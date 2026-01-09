import { Suspense } from "react";
import CommunityClient from "./CommunityClient";

export default function CommunityPage() {
  return (
    <Suspense fallback={null}>
      <CommunityClient />
    </Suspense>
  );
}
