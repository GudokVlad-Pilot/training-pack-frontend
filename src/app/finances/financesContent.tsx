"use client";

import { Button } from "@/components/atoms/button/Button";
import { useRouter } from "next/navigation";

export default function FinancesContent() {
  const router = useRouter();

  const navigateToHome = () => router.replace("/"); // Replace in terms of disallowing to navigate back from home page

  return (
    <div>
      <div>Finances</div>
      <Button label={"Home"} onClick={navigateToHome} />
    </div>
  );
}
