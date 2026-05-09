"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { Button } from "@/components/atoms/button/Button";

export default function HomeContent() {
  const router = useRouter();

  const navigateToFinance = () => router.push("/finances");

  return (
    <div className={styles.page}>
      Hello world!
      <Button label={"Finances"} onClick={navigateToFinance} />
    </div>
  );
}
