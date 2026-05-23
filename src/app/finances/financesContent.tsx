"use client";

import { Button } from "@/components/atoms/button/Button";
import { useStore } from "@/core/state/store";
import { useRouter } from "next/navigation";

export default function FinancesContent() {
  const router = useRouter();
  const { test, add, sub, reset } = useStore();

  const navigateToHome = () => router.replace("/"); // Replace in terms of disallowing to navigate back from home page

  return (
    <div>
      <div>Finances</div>
      <Button label={"Home"} onClick={navigateToHome} />
      {/* Testing layout */}
      <div>
        <div>{test}</div>
        <button onClick={add}>Add</button>
        <button onClick={sub}>Subtract</button>
        <button onClick={reset}>Reset</button>
        <button>Add source</button>
      </div>
    </div>
  );
}
