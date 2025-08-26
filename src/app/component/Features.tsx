"use client";

import Image from "next/image";
import styles from "../style/features.module.css";
import { useEffect, useState } from "react";

export default function Features() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [list, setList] = useState<{ img: string; text: string }[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/data.json");
        const data = await res.json();

        // ambil array
        setTitle(data.featuresText.title);
        setSubTitle(data.featuresText.subTitle);
        setList(data.featuresText.list);
      } catch (error) {
        console.error("eror", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className={styles.features}>
      {/* Bagian gambar */}
      <div className={styles.featuresImage}>
        <img src="/img/person2.png" alt="Person 2" />
      </div>

      {/* Bagian teks */}
      <div className={styles.featuresText}>
        <h2>{title}</h2>
        <p>{subTitle}</p>

        <ul className={styles.featuresText}>
          {list.map((item, index) => (
            <li key={index}>
              <span className={styles.featuresImage2}>
                <img src="/img/checklist.png" alt="check" />
              </span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
