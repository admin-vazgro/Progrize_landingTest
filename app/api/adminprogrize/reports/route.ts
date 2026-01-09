import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

export async function GET() {
  const supabaseAdmin = getSupabaseAdmin();
  const { data: reports, error } = await supabaseAdmin
    .from("reports")
    .select("id, reporter_id, target_user_id, target_post_id, reason, status, created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const postIds = Array.from(
    new Set((reports || []).map((report) => report.target_post_id).filter(Boolean))
  ) as string[];

  let postsMap = new Map<string, { title: string; user_id: string }>();
  if (postIds.length > 0) {
    const { data: postsData } = await supabaseAdmin
      .from("posts")
      .select("id, title, user_id")
      .in("id", postIds);

    (postsData || []).forEach((post) => {
      postsMap.set(post.id, { title: post.title, user_id: post.user_id });
    });
  }

  const enriched = (reports || []).map((report) => {
    const post = report.target_post_id ? postsMap.get(report.target_post_id) : undefined;
    return {
      ...report,
      target_post_title: post?.title || null,
      target_post_owner: post?.user_id || null,
    };
  });

  return NextResponse.json({ data: enriched });
}
