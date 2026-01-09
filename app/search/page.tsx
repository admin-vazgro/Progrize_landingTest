"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import Navbar from "../Navbar";

type TabKey = "people" | "companies" | "discussion" | "events";

interface PersonResult {
  id: string;
  full_name: string;
  avatar_url: string | null;
  occupation: string | null;
  location: string | null;
  company: string | null;
}

interface CompanyResult {
  name: string;
  logo: string | null;
  location: string | null;
}

interface DiscussionResult {
  id: string;
  title: string;
  content: string;
  created_at: string;
  user_name: string;
  user_avatar: string | null;
}

interface EventResult {
  id: string;
  title: string;
  location: string | null;
  event_date: string;
  event_image: string | null;
}

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = useMemo(() => (searchParams.get("q") || "").trim(), [searchParams]);
  const [activeTab, setActiveTab] = useState<TabKey>("people");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [people, setPeople] = useState<PersonResult[]>([]);
  const [companies, setCompanies] = useState<CompanyResult[]>([]);
  const [discussions, setDiscussions] = useState<DiscussionResult[]>([]);
  const [events, setEvents] = useState<EventResult[]>([]);
  const [followingIds, setFollowingIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push("/");
        return;
      }
      setUserId(user.id);
    });
  }, [router]);

  useEffect(() => {
    if (!query) {
      setPeople([]);
      setCompanies([]);
      setDiscussions([]);
      setEvents([]);
      return;
    }

    const loadResults = async () => {
      setLoading(true);
      try {
        const peoplePromise = supabase
          .from("profiles")
          .select("id, full_name, avatar_url, occupation, location")
          .or(
            `full_name.ilike.%${query}%,occupation.ilike.%${query}%,location.ilike.%${query}%`
          )
          .limit(12);

        const companiesPromise = supabase
          .from("experiences")
          .select("company_name, company_logo, location")
          .ilike("company_name", `%${query}%`)
          .limit(20);

        const discussionsPromise = supabase
          .from("posts")
          .select("id, title, content, created_at, user_id")
          .eq("post_type", "discussion")
          .or(`title.ilike.%${query}%,content.ilike.%${query}%`)
          .order("created_at", { ascending: false })
          .limit(10);

        const eventsPromise = supabase
          .from("posts")
          .select(
            `id, title, created_at, event_image, events!left(event_date, location)`
          )
          .eq("post_type", "event")
          .ilike("title", `%${query}%`)
          .order("created_at", { ascending: false })
          .limit(10);

        const [
          { data: peopleData, error: peopleError },
          { data: companiesData, error: companiesError },
          { data: discussionsData, error: discussionsError },
          { data: eventsData, error: eventsError },
        ] = await Promise.all([
          peoplePromise,
          companiesPromise,
          discussionsPromise,
          eventsPromise,
        ]);

        if (peopleError) console.error("People search error:", peopleError);
        if (companiesError) console.error("Companies search error:", companiesError);
        if (discussionsError) console.error("Discussion search error:", discussionsError);
        if (eventsError) console.error("Events search error:", eventsError);

        setPeople(
          (peopleData || []).map((person) => ({
            id: person.id,
            full_name: person.full_name || "User",
            avatar_url: person.avatar_url,
            occupation: person.occupation || null,
            location: person.location || null,
            company: null,
          }))
        );

        const companyMap = new Map<string, CompanyResult>();
        (companiesData || []).forEach((row) => {
          if (!row.company_name) return;
          if (!companyMap.has(row.company_name)) {
            companyMap.set(row.company_name, {
              name: row.company_name,
              logo: row.company_logo || null,
              location: row.location || null,
            });
          }
        });
        setCompanies(Array.from(companyMap.values()).slice(0, 12));

        const discussionItems = await Promise.all(
          (discussionsData || []).map(async (post) => {
            const { data: profile } = await supabase
              .from("profiles")
              .select("full_name, avatar_url")
              .eq("id", post.user_id)
              .maybeSingle();

            return {
              id: post.id,
              title: post.title,
              content: post.content,
              created_at: post.created_at,
              user_name: profile?.full_name || "User",
              user_avatar: profile?.avatar_url || null,
            };
          })
        );
        setDiscussions(discussionItems);

        setEvents(
          (eventsData || []).map((post) => ({
            id: post.id,
            title: post.title,
            location: post.events?.[0]?.location || "Virtual",
            event_date: post.events?.[0]?.event_date || post.created_at,
            event_image: post.event_image || null,
          }))
        );

        if (userId && (peopleData || []).length > 0) {
          const { data: followData } = await supabase
            .from("profile_follows")
            .select("following_id")
            .eq("follower_id", userId)
            .in(
              "following_id",
              (peopleData || []).map((row) => row.id)
            );
          setFollowingIds(new Set((followData || []).map((row) => row.following_id)));
        }
      } catch (error) {
        console.error("Error loading search results:", error);
      } finally {
        setLoading(false);
      }
    };

    loadResults();
  }, [query, userId]);

  const handleAuthClick = () => {
    router.push("/");
  };

  const handleToggleFollow = async (targetId: string) => {
    if (!userId) {
      router.push("/");
      return;
    }
    const isFollowing = followingIds.has(targetId);
    if (isFollowing) {
      const { error } = await supabase
        .from("profile_follows")
        .delete()
        .eq("follower_id", userId)
        .eq("following_id", targetId);
      if (!error) {
        setFollowingIds((prev) => {
          const next = new Set(prev);
          next.delete(targetId);
          return next;
        });
      }
      return;
    }

    const { error } = await supabase
      .from("profile_follows")
      .insert({ follower_id: userId, following_id: targetId });
    if (!error) {
      setFollowingIds((prev) => new Set(prev).add(targetId));
    }
  };

  const handleCardKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onAuthClick={handleAuthClick} />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl p-6 md:p-8">
          <p className="text-sm text-gray-600 mb-6">
            You search for “<span className="text-gray-900 font-semibold">{query || "..."}</span>”
          </p>

          <div className="flex flex-wrap gap-6 border-b border-gray-200 mb-6">
            {[
              { key: "people", label: "Peoples" },
              { key: "companies", label: "Companies" },
              { key: "discussion", label: "Discussion" },
              { key: "events", label: "Events" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as TabKey)}
                className={`pb-3 text-sm font-medium transition ${
                  activeTab === tab.key
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {loading && <p className="text-sm text-gray-500">Loading...</p>}

          {!loading && activeTab === "people" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {people.length === 0 ? (
                <p className="text-sm text-gray-500">No people found.</p>
              ) : (
                people.map((person) => (
                  <div
                    key={person.id}
                    className="bg-[#efefef] rounded-2xl p-6 text-center cursor-pointer hover:shadow-sm transition"
                    role="button"
                    tabIndex={0}
                    onClick={() => router.push(`/user/${person.id}`)}
                    onKeyDown={(event) =>
                      handleCardKeyDown(event, () => router.push(`/user/${person.id}`))
                    }
                  >
                    <div className="w-24 h-24 mx-auto rounded-full border-4 border-[#f0b429] overflow-hidden mb-4">
                      {person.avatar_url ? (
                        <Image
                          src={person.avatar_url}
                          alt={person.full_name}
                          width={96}
                          height={96}
                          className="w-24 h-24 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-[#162f16] text-white flex items-center justify-center text-2xl font-semibold">
                          {person.full_name.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <h3 className="text-base font-semibold text-[#153f26]">
                      {person.full_name}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {person.occupation || "Professional"}
                    </p>
                    <p className="text-xs text-gray-600">
                      {person.occupation || "Professional"}
                    </p>
                    <p className="text-xs text-gray-600 mb-4">
                      {person.location || "Location"}
                    </p>
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        handleToggleFollow(person.id);
                      }}
                      className="px-6 py-2 bg-[#d9e86b] text-[#162f16] rounded-lg text-sm font-medium"
                    >
                      {followingIds.has(person.id) ? "Following" : "Follow"}
                    </button>
                  </div>
                ))
              )}
            </div>
          )}

          {!loading && activeTab === "companies" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {companies.length === 0 ? (
                <p className="text-sm text-gray-500">No companies found.</p>
              ) : (
                companies.map((company) => (
                  <div key={company.name} className="bg-[#efefef] rounded-2xl p-6">
                    <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-4">
                      {company.logo ? (
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        <span className="text-lg font-semibold text-[#162f16]">
                          {company.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-semibold text-gray-900">{company.name}</h3>
                    <p className="text-xs text-gray-600">{company.location || "Location"}</p>
                  </div>
                ))
              )}
            </div>
          )}

          {!loading && activeTab === "discussion" && (
            <div className="space-y-4">
              {discussions.length === 0 ? (
                <p className="text-sm text-gray-500">No discussions found.</p>
              ) : (
                discussions.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl p-6 border border-gray-200 cursor-pointer hover:shadow-sm transition"
                    role="button"
                    tabIndex={0}
                    onClick={() => router.push(`/community?post=${item.id}`)}
                    onKeyDown={(event) =>
                      handleCardKeyDown(event, () => router.push(`/community?post=${item.id}`))
                    }
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {item.user_avatar ? (
                        <Image
                          src={item.user_avatar}
                          alt={item.user_name}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-[#162f16] text-white flex items-center justify-center text-sm font-semibold">
                          {item.user_name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{item.user_name}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(item.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-700 line-clamp-4">{item.content}</p>
                  </div>
                ))
              )}
            </div>
          )}

          {!loading && activeTab === "events" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.length === 0 ? (
                <p className="text-sm text-gray-500">No events found.</p>
              ) : (
                events.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-xl p-6 border border-gray-200 cursor-pointer hover:shadow-sm transition"
                    role="button"
                    tabIndex={0}
                    onClick={() => router.push(`/community?event=${event.id}`)}
                    onKeyDown={(eventKey) =>
                      handleCardKeyDown(eventKey, () =>
                        router.push(`/community?event=${event.id}`)
                      )
                    }
                  >
                    <div className="h-40 rounded-xl overflow-hidden bg-gray-100 mb-4">
                      {event.event_image ? (
                        <Image
                          src={event.event_image}
                          alt={event.title}
                          width={400}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#162f16] to-[#2a4a2a]" />
                      )}
                    </div>
                    <h4 className="text-base font-semibold text-gray-900">{event.title}</h4>
                    <p className="text-xs text-gray-600">
                      {event.location || "Virtual"} · {new Date(event.event_date).toLocaleDateString()}
                    </p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
