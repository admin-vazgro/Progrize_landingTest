import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const supabaseAdmin = getSupabaseAdmin();
  const { searchParams } = new URL(request.url);
  const query = (searchParams.get("q") || "").trim();
  const userId = (searchParams.get("userId") || "").trim();

  let postsQuery = supabaseAdmin
    .from("posts")
    .select("id, title, content, post_type, created_at, user_id")
    .order("created_at", { ascending: false })
    .limit(50);

  if (query) {
    postsQuery = postsQuery.or(`title.ilike.%${query}%,content.ilike.%${query}%`);
  }

  if (userId) {
    postsQuery = postsQuery.eq("user_id", userId);
  }

  const { data: posts, error } = await postsQuery;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const userIds = Array.from(new Set((posts || []).map((post) => post.user_id)));
  let profilesMap = new Map<string, { full_name: string; avatar_url: string; occupation: string }>();

  if (userIds.length > 0) {
    const { data: profiles } = await supabaseAdmin
      .from("profiles")
      .select("id, full_name, avatar_url, occupation")
      .in("id", userIds);

    (profiles || []).forEach((profile) => {
      profilesMap.set(profile.id, {
        full_name: profile.full_name || "User",
        avatar_url: profile.avatar_url || "",
        occupation: profile.occupation || "",
      });
    });
  }

  const enriched = (posts || []).map((post) => {
    const profile = profilesMap.get(post.user_id);
    return {
      ...post,
      user_name: profile?.full_name || "User",
      user_avatar: profile?.avatar_url || "",
      user_occupation: profile?.occupation || "",
    };
  });

  return NextResponse.json({ data: enriched });
}
