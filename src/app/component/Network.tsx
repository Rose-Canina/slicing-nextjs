"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../style/network.module.css";
import { useEffect, useState } from "react";

export default function Network() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  useEffect(() => {
    async function fecthData() {
      try {
        const res = await fetch("/data/data.json");
        const data = await res.json();

        // ambil array
        setTitle(data["network"][0]);
        setSubTitle(data["network"][1]);
      } catch (error) {
        console.error("eror", error);
      }
    }
    fecthData();
  }, []);

  return (
    <section className={styles.networkSection}>
      <h2>{title}</h2>
      <p>{subTitle}</p>
      <Image src="/img/Huge Global.png" alt="Global" width={700} height={700} />
      <Image
        src="/img/Sponsored.png"
        alt="Sponsored"
        width={700}
        height={700}
      />
    </section>
  );
}
