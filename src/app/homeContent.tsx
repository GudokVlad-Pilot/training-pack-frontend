"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function HomeContent() {
  const router = useRouter();

  const navigateToFinance = () => router.push("/finances");

  return (
    <div className={styles.page}>
      Hello world!
      <div onClick={navigateToFinance}>Finances</div>
    </div>
  );
}
