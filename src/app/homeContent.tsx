"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/button/Button";

export default function HomeContent() {
  const router = useRouter();

  const navigateToFinance = () => router.push("/finances");

  return (
    <div>
      Hello world!
      <Button label={"Finances"} onClick={navigateToFinance} />
    </div>
  );
}
