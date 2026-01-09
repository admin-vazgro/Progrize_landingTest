import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const supabaseAdmin = getSupabaseAdmin();
  const { searchParams } = new URL(request.url);
  const query = (searchParams.get("q") || "").trim();

  let profilesQuery = supabaseAdmin
    .from("profiles")
    .select(
      "id, full_name, occupation, location, followers_count, following_count, created_at, is_banned, is_flagged"
    )
    .order("created_at", { ascending: false })
    .limit(50);

  if (query) {
    profilesQuery = profilesQuery.or(
      `full_name.ilike.%${query}%,occupation.ilike.%${query}%,location.ilike.%${query}%`
    );
  }

  const { data: profiles, error } = await profilesQuery;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const profileIds = (profiles || []).map((profile) => profile.id);
  let postsCountMap = new Map<string, number>();

  if (profileIds.length > 0) {
    const { data: postRows, error: postsError } = await supabaseAdmin
      .from("posts")
      .select("user_id")
      .in("user_id", profileIds);

    if (!postsError && postRows) {
      postRows.forEach((row) => {
        postsCountMap.set(row.user_id, (postsCountMap.get(row.user_id) || 0) + 1);
      });
    }
  }

  const enriched = (profiles || []).map((profile) => ({
    ...profile,
    posts_count: postsCountMap.get(profile.id) || 0,
  }));

  return NextResponse.json({ data: enriched });
}
