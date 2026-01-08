"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

interface EventCardProps {
  event: {
    id: string;
    post_id: string;
    title: string;
    content: string;
    event_date: string;
    location: string;
    meeting_link: string;
    going_count: number;
    interested_count: number;
    likes_count: number;
    comments_count: number;
    user_rsvp: string | null;
    event_image: string | null;
    user_id: string;
    user_name: string;
    user_avatar: string;
    attendees: Array<{ avatar_url: string; full_name: string }>;
  };
  currentUserId: string;
  onUpdate: () => void;
  onOpenDetail: (eventId: string) => void;
}

export default function EventCard({ event, currentUserId, onUpdate, onOpenDetail }: EventCardProps) {
  const [isRSVPing, setIsRSVPing] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleRSVP = async (status: "going" | "interested") => {
    if (isRSVPing) return;
    setIsRSVPing(true);

    try {
      if (event.user_rsvp === status) {
        // Remove RSVP
        await supabase
          .from("event_rsvps")
          .delete()
          .eq("event_id", event.id)
          .eq("user_id", currentUserId);

        // Decrement count
        const field = status === "going" ? "going_count" : "interested_count";
        await supabase
          .from("events")
          .update({ [field]: Math.max(0, event[field] - 1) })
          .eq("id", event.id);
      } else {
        // Add or update RSVP
        await supabase
          .from("event_rsvps")
          .upsert({
            event_id: event.id,
            user_id: currentUserId,
            status
          });

        // Update counts
        if (event.user_rsvp) {
          // Switching from one status to another
          const oldField = event.user_rsvp === "going" ? "going_count" : "interested_count";
          const newField = status === "going" ? "going_count" : "interested_count";
          
          await supabase
            .from("events")
            .update({
              [oldField]: Math.max(0, event[oldField] - 1),
              [newField]: event[newField] + 1
            })
            .eq("id", event.id);
        } else {
          // New RSVP
          const field = status === "going" ? "going_count" : "interested_count";
          await supabase
            .from("events")
            .update({ [field]: event[field] + 1 })
            .eq("id", event.id);
        }
      }

      onUpdate();
    } catch (error) {
      console.error("Error updating RSVP:", error);
    } finally {
      setIsRSVPing(false);
    }
  };

  const totalAttendees = event.going_count + event.interested_count;

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition cursor-pointer"
      onClick={() => onOpenDetail(event.id)}
    >
      {/* Event Image */}
      <div className="relative h-64 bg-gray-200">
        {event.event_image && !imageError ? (
          <Image
            src={event.event_image}
            alt={event.title}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#162f16] to-[#2a4a2a]">
            <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Event Content */}
      <div className="p-6">
        {/* Title and Location */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{event.location || "Virtual Event"}</p>

        {/* Attendees */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex -space-x-2">
            {event.attendees.slice(0, 3).map((attendee, index) => (
              attendee.avatar_url ? (
                <Image
                  key={index}
                  src={attendee.avatar_url}
                  alt={attendee.full_name}
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              ) : (
                <div 
                  key={index}
                  className="w-8 h-8 rounded-full border-2 border-white bg-[#162f16] text-white flex items-center justify-center text-xs font-semibold"
                >
                  {attendee.full_name.charAt(0).toUpperCase()}
                </div>
              )
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {totalAttendees > 0 ? `${totalAttendees} + Going` : "Be the first to join"}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 mb-4 line-clamp-3">{event.content}</p>

        {/* Action Buttons */}
        <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => handleRSVP("going")}
            disabled={isRSVPing}
            className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition ${
              event.user_rsvp === "going"
                ? "bg-[#162f16] text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {event.user_rsvp === "going" ? "Going" : "I am going"}
          </button>
          <button
            className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
          >
            Draft
          </button>
        </div>
      </div>
    </div>
  );
}