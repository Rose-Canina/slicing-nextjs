"use client";

import Image from "next/image";
import styles from "../style/subscribe.module.css";
import { useEffect, useState } from "react";

export default function Subscribe() {
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
  
    useEffect(() => {
      async function fetchData() {
        try {
          const res = await fetch("/data/data.json");
          const data = await res.json();
  
          // ambil array
          setTitle(data["subscribeText"][0]);
          setSubTitle(data["subscribeText"][1]);
        } catch (error) {
          console.error("eror", error);
        }
      }
      fetchData();
    }, []);
  return (
    <section className={styles.subscribe}>
      <div className={styles.subscribeBox}>
        <div className={styles.subscribeText}>
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
        <a href="#" className={styles.btnSubscribe}>
          Subscribe Now
        </a>
      </div>
    </section>
  );
}
