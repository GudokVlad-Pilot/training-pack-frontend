"use client";

import { useRouter } from "next/navigation";

export default function FinancesContent() {
  const router = useRouter();

  const navigateToHome = () => router.replace("/"); // Replace in terms of disallowing to navigate back from home page

  return (
    <div>
      <div>Finances</div>
      <div onClick={navigateToHome}>Home</div>
    </div>
  );
}
