"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string | null;
  authorName: string;
  authorAvatar?: string | null;
  url: string;
  label?: string;
  showQr?: boolean;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1)}…`;
};

export default function ShareModal({
  isOpen,
  onClose,
  title,
  description,
  authorName,
  authorAvatar,
  url,
  label = "Share this post",
  showQr = false,
}: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const shareText = useMemo(() => {
    const preview = description ? ` - ${truncateText(description, 100)}` : "";
    return `${title}${preview}`;
  }, [title, description]);

  if (!isOpen) return null;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch (error) {
      console.error("Error copying link:", error);
      alert("Failed to copy link. Please try again.");
    }
  };

  const handleSystemShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text: shareText, url });
        return;
      } catch (error) {
        console.error("Error sharing:", error);
      }
    }
    copyLink();
  };

  const openShareUrl = (shareUrl: string) => {
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${url}`)}`;
  const xUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(
    shareText
  )}`;
  const mailUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(
    `${shareText}\n\n${url}`
  )}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
    url
  )}`;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          aria-label="Close share modal"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-lg font-semibold text-[#0B2B17]">{label}</h3>

        <div className="mt-4 rounded-xl border border-[#E2E6E3] p-4">
          <p className="text-sm text-[#3F4E45]">{truncateText(description || title, 140)}</p>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-8 w-8 overflow-hidden rounded-full bg-[#E7ECE9]">
              {authorAvatar ? (
                <Image
                  src={authorAvatar}
                  alt={authorName}
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-[#0B2B17]">
                  {authorName.charAt(0)}
                </div>
              )}
            </div>
            <p className="text-sm font-medium text-[#0B2B17]">{authorName}</p>
          </div>
        </div>

        <p className="mt-3 text-xs text-[#6A7A70]">
          Shared links are accessible to signed-in Progrize users.
        </p>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-medium text-[#3F4E45]">
          <button
            onClick={() => openShareUrl(facebookUrl)}
            className="flex flex-col items-center gap-2 rounded-xl bg-[#F6F7F4] py-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white">
              f
            </span>
            Facebook
          </button>
          <button
            onClick={() => openShareUrl(whatsappUrl)}
            className="flex flex-col items-center gap-2 rounded-xl bg-[#F6F7F4] py-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
              <svg className="h-5 w-5" viewBox="0 0 32 32" fill="currentColor">
                <path d="M19.11 17.73c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.37.45-.56.15-.2.2-.34.3-.56.1-.22.05-.41-.02-.56-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51l-.57-.01c-.2 0-.56.07-.86.37-.3.3-1.13 1.1-1.13 2.68 0 1.58 1.16 3.11 1.32 3.33.16.22 2.28 3.49 5.53 4.89.77.33 1.37.52 1.84.67.77.24 1.48.2 2.04.12.62-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" />
                <path d="M16.03 3C9.4 3 4 8.4 4 15.03c0 2.64.86 5.07 2.33 7.04L4 29l7.13-2.29c1.93 1.06 4.14 1.66 6.9 1.66 6.63 0 12.03-5.4 12.03-12.03C30.06 8.4 22.66 3 16.03 3zm0 22.05c-2.44 0-4.7-.75-6.56-2.05l-.47-.31-4.25 1.36 1.38-4.14-.31-.42c-1.33-1.85-2.03-4.05-2.03-6.36 0-6.01 4.9-10.91 10.91-10.91 6.01 0 10.91 4.9 10.91 10.91 0 6.01-4.9 10.92-10.91 10.92z" />
              </svg>
            </span>
            WhatsApp
          </button>
          <button
            onClick={() => openShareUrl(xUrl)}
            className="flex flex-col items-center gap-2 rounded-xl bg-[#F6F7F4] py-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
              X
            </span>
            X
          </button>
          <button
            onClick={handleSystemShare}
            className="flex flex-col items-center gap-2 rounded-xl bg-[#F6F7F4] py-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] text-white">
              IG
            </span>
            Instagram
          </button>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-3 text-center text-xs font-medium text-[#3F4E45]">
          <button
            onClick={handleSystemShare}
            className="flex flex-col items-center gap-2 rounded-xl bg-[#F6F7F4] py-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E7ECE9] text-[#0B2B17]">
              💬
            </span>
            Chat
          </button>
          <button
            onClick={copyLink}
            className="flex flex-col items-center gap-2 rounded-xl bg-[#F6F7F4] py-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E7ECE9] text-[#0B2B17]">
              🔗
            </span>
            {copied ? "Copied" : "Copy"}
          </button>
          <button
            onClick={() => openShareUrl(mailUrl)}
            className="flex flex-col items-center gap-2 rounded-xl bg-[#F6F7F4] py-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E7ECE9] text-[#0B2B17]">
              ✉️
            </span>
            Email
          </button>
          <button
            onClick={copyLink}
            className="flex flex-col items-center gap-2 rounded-xl bg-[#F6F7F4] py-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E7ECE9] text-[#0B2B17]">
              🔁
            </span>
            Repost
          </button>
        </div>

        {showQr && (
          <div className="mt-5 rounded-xl border border-[#E2E6E3] p-4">
            <p className="text-xs font-medium text-[#3F4E45]">Scan to open profile</p>
            <div className="mt-3 flex items-center justify-center">
              <img
                src={qrUrl}
                alt="QR code"
                width={160}
                height={160}
                className="h-40 w-40 rounded-lg bg-white"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
