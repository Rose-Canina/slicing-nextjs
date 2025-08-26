"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../style/getStarted.module.css";
import { useEffect, useState } from "react";

export default function GetStarted() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/data.json");
        const data = await res.json();

        // ambil array
        setTitle(data["getText"][0]);
        setSubTitle(data["getText"][1]);
      } catch (error) {
        console.error("eror", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className={styles.getContent}>
      <div className={styles.getContent}>
        {/* Text Section */}
        <div className={styles.getText}>
          <h1>
            {title}
          </h1>
          <p>{subTitle}</p>
          <Link href="#" className={styles.btn}>
            Get Started
          </Link>
        </div>

        {/* Image Section */}
        <div className={styles.personImage}>
          <Image
            src="/img/person.png"
            alt="Person Illustration"
            width={500} // kasih ukuran asli/proporsional
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
