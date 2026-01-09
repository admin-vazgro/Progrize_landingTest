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

export default function SearchClient() {
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

  const handleAuthClick = () => {
    router.push("/");
  };

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
            event_image: post.event_image || null,
            location: post.events?.[0]?.location || null,
            event_date: post.events?.[0]?.event_date || "",
          }))
        );
      } finally {
        setLoading(false);
      }
    };

    loadResults();
  }, [query]);

  useEffect(() => {
    if (!userId) return;

    const loadFollowing = async () => {
      const { data } = await supabase
        .from("follows")
        .select("following_id")
        .eq("follower_id", userId);

      setFollowingIds(new Set((data || []).map((row) => row.following_id)));
    };

    loadFollowing();
  }, [userId]);

  const handleFollowToggle = async (targetId: string) => {
    if (!userId) return;
    const isFollowing = followingIds.has(targetId);

    if (isFollowing) {
      await supabase
        .from("follows")
        .delete()
        .eq("follower_id", userId)
        .eq("following_id", targetId);
    } else {
      await supabase.from("follows").insert({
        follower_id: userId,
        following_id: targetId,
      });
    }

    setFollowingIds((prev) => {
      const next = new Set(prev);
      if (isFollowing) {
        next.delete(targetId);
      } else {
        next.add(targetId);
      }
      return next;
    });
  };

  const renderPeople = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {people.map((person) => (
        <div
          key={person.id}
          className="rounded-2xl bg-[#F1F1F1] p-6 text-center shadow-sm cursor-pointer hover:shadow-md transition"
          onClick={() => router.push(`/user/${person.id}`)}
        >
          <div className="mx-auto h-24 w-24 rounded-full border-4 border-[#F0A44C] overflow-hidden bg-white">
            {person.avatar_url ? (
              <Image
                src={person.avatar_url}
                alt={person.full_name}
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-2xl font-semibold text-[#0B2B17]">
                {person.full_name.charAt(0)}
              </div>
            )}
          </div>
          <h3 className="mt-4 font-semibold text-[#0B2B17]">{person.full_name}</h3>
          <p className="text-sm text-[#3F4E45]">
            {(person.occupation || "Professional") +
              (person.location ? ` · ${person.location}` : "")}
          </p>
          {person.company && (
            <p className="text-xs text-[#6A7A70]">{person.company}</p>
          )}
          {userId && userId !== person.id && (
            <button
              className="mt-4 rounded-full bg-[#D6E86A] px-6 py-2 text-sm font-medium text-[#0B2B17]"
              onClick={(event) => {
                event.stopPropagation();
                handleFollowToggle(person.id);
              }}
            >
              {followingIds.has(person.id) ? "Unfollow" : "Follow"}
            </button>
          )}
        </div>
      ))}
    </div>
  );

  const renderCompanies = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {companies.map((company) => (
        <div key={company.name} className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-[#E7ECE9] flex items-center justify-center">
              {company.logo ? (
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              ) : (
                <span className="text-xl font-semibold text-[#0B2B17]">
                  {company.name.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-[#0B2B17]">{company.name}</h3>
              {company.location && (
                <p className="text-sm text-[#6A7A70]">{company.location}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderDiscussions = () => (
    <div className="space-y-4">
      {discussions.map((post) => (
        <div
          key={post.id}
          className="rounded-2xl border border-[#E2E6E3] bg-white p-6 shadow-sm cursor-pointer"
          onClick={() => router.push(`/community?post=${post.id}`)}
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full overflow-hidden bg-[#E7ECE9]">
              {post.user_avatar ? (
                <Image
                  src={post.user_avatar}
                  alt={post.user_name}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-sm font-semibold text-[#0B2B17]">
                  {post.user_name.charAt(0)}
                </div>
              )}
            </div>
            <div>
              <p className="text-sm font-medium text-[#0B2B17]">{post.user_name}</p>
              <p className="text-xs text-[#6A7A70]">
                {new Date(post.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-[#0B2B17]">{post.title}</h3>
          <p className="mt-2 text-sm text-[#3F4E45] line-clamp-3">{post.content}</p>
        </div>
      ))}
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-4">
      {events.map((event) => (
        <div
          key={event.id}
          className="rounded-2xl border border-[#E2E6E3] bg-white p-6 shadow-sm cursor-pointer"
          onClick={() => router.push(`/community?event=${event.id}`)}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-48 h-32 rounded-2xl overflow-hidden bg-[#E7ECE9]">
              {event.event_image ? (
                <Image
                  src={event.event_image}
                  alt={event.title}
                  width={192}
                  height={128}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-sm text-[#6A7A70]">
                  No image
                </div>
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#0B2B17]">{event.title}</h3>
              <p className="text-sm text-[#6A7A70]">
                {event.location || "Location"} ·{" "}
                {event.event_date
                  ? new Date(event.event_date).toLocaleDateString()
                  : "Date TBD"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F6F7F4]">
      <Navbar onAuthClick={handleAuthClick} />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm text-[#6A7A70]">
            You search for “{query || "..."}”
          </p>

          <div className="mt-6 flex flex-wrap gap-6 border-b border-[#E2E6E3] text-sm font-medium text-[#6A7A70]">
            {(["people", "companies", "discussion", "events"] as TabKey[]).map(
              (tab) => (
                <button
                  key={tab}
                  className={`pb-3 capitalize ${
                    activeTab === tab
                      ? "text-[#0B2B17] border-b-2 border-[#0B2B17]"
                      : "hover:text-[#0B2B17]"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "discussion" ? "Discussion" : tab}
                </button>
              )
            )}
          </div>

          <div className="mt-8">
            {loading && <p className="text-sm text-[#6A7A70]">Loading...</p>}
            {!loading && activeTab === "people" && renderPeople()}
            {!loading && activeTab === "companies" && renderCompanies()}
            {!loading && activeTab === "discussion" && renderDiscussions()}
            {!loading && activeTab === "events" && renderEvents()}
          </div>
        </div>
      </div>
    </div>
  );
}
