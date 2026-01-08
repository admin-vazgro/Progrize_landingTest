"use client";

import { useRouter } from "next/navigation";

export default function VerificationRejectedPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Verification Rejected</h2>
        <p className="text-gray-600 mb-6">
          The verification request has been rejected. The user has been notified with your feedback.
        </p>
        <button
          onClick={() => router.push("/")}
          className="w-full px-6 py-3 bg-[#162f16] text-white rounded-lg hover:bg-[#0f2310] transition font-medium"
        >
          Close
        </button>
      </div>
    </div>
  );
}