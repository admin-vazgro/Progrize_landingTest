"use client";

import { useRouter } from "next/navigation";

export default function VerificationSuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Verification Successful!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for verifying this information. The user has been notified and a verification badge will now appear on their profile.
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