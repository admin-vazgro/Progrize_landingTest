import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

type ActionPayload =
  | { action: "ban_user"; userId: string; reason?: string }
  | { action: "flag_user"; userId: string; reason?: string }
  | { action: "reset_user"; userId: string }
  | { action: "edit_user"; userId: string; full_name?: string; occupation?: string; location?: string }
  | { action: "delete_post"; postId: string }
  | { action: "delete_user"; userId: string };

export async function POST(request: Request) {
  const supabaseAdmin = getSupabaseAdmin();
  const payload = (await request.json()) as ActionPayload;

  try {
    switch (payload.action) {
      case "ban_user": {
        const { error } = await supabaseAdmin
          .from("profiles")
          .update({
            is_banned: true,
            banned_at: new Date().toISOString(),
            ban_reason: payload.reason || null,
          })
          .eq("id", payload.userId);
        if (error) throw error;
        break;
      }
      case "flag_user": {
        const { error } = await supabaseAdmin
          .from("profiles")
          .update({
            is_flagged: true,
            flagged_at: new Date().toISOString(),
            flag_reason: payload.reason || null,
          })
          .eq("id", payload.userId);
        if (error) throw error;
        break;
      }
      case "reset_user": {
        const { error } = await supabaseAdmin
          .from("profiles")
          .update({
            is_banned: false,
            is_flagged: false,
            banned_at: null,
            flagged_at: null,
            ban_reason: null,
            flag_reason: null,
          })
          .eq("id", payload.userId);
        if (error) throw error;
        break;
      }
      case "edit_user": {
        const { error } = await supabaseAdmin
          .from("profiles")
          .update({
            full_name: payload.full_name,
            occupation: payload.occupation,
            location: payload.location,
          })
          .eq("id", payload.userId);
        if (error) throw error;
        break;
      }
      case "delete_post": {
        const { error } = await supabaseAdmin
          .from("posts")
          .delete()
          .eq("id", payload.postId);
        if (error) throw error;
        break;
      }
      case "delete_user": {
        await supabaseAdmin.auth.admin.deleteUser(payload.userId);
        await supabaseAdmin.from("profiles").delete().eq("id", payload.userId);
        await supabaseAdmin.from("posts").delete().eq("user_id", payload.userId);
        await supabaseAdmin.from("comments").delete().eq("user_id", payload.userId);
        await supabaseAdmin.from("post_likes").delete().eq("user_id", payload.userId);
        await supabaseAdmin.from("event_rsvps").delete().eq("user_id", payload.userId);
        break;
      }
      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const details = {
      message: (error as { message?: string })?.message,
      code: (error as { code?: string })?.code,
    };
    return NextResponse.json({ error: details.message || "Action failed", details }, { status: 500 });
  }
}
