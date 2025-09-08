"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../style/testimonials.module.css";
import { useEffect, useState } from "react";

export default function Testimonial() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/data.json");
        const data = await res.json();

        // ambil array
        setTitle(data["testimonialText"][0]);
        setSubTitle(data["testimonialText"][1]);
      } catch (error) {
        console.error("eror", error);
      }
    }
    fetchData();
  }, []);
  return (
    <section className={styles.testimonialSection}>
      {/* ✅ Judul & Subtitle */}
      <div className={styles.testimonialCardText}>
      <h2>{title}</h2>
      <p>{subTitle}</p>
      </div>

      {/* ✅ Testimonial Cards */}
      <div className={styles.testimonialCards}>
        {/* Card 1 */}
        <div className={styles.testimonialCard}>
          <div className={styles.cardHeader}>
            <div className={styles.userInfo}>
              <img src="/img/Ellipse 175.png" alt="User 1" />
              <div>
                <div className={styles.userName}>Viezth Robert</div>
                <div className={styles.userLocation}>Warsaw, Poland</div>
              </div>
            </div>
            <div className={styles.rating}>
              4.5 <img src="/img/Group 1161.png" alt="Star" />
            </div>
          </div>
          <div className={styles.cardText}>
            "Wow... I am very happy to use this VPN, it turned out to be more
            than expectations and so far there have been no problems. LaslesVPN
            always the best."
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.testimonialCard}>
          <div className={styles.cardHeader}>
            <div className={styles.userInfo}>
              <img src="/img/Ellipse 175 (1).png" alt="User 2" />
              <div>
                <div className={styles.userName}>Yessica Christy</div>
                <div className={styles.userLocation}>Shanxi, China</div>
              </div>
            </div>
            <div className={styles.rating}>
              4.5 <img src="/img/Group 1161.png" alt="Star" />
            </div>
          </div>
          <div className={styles.cardText}>
            "I like it because I like to travel far and still can connect with
            high speed."
          </div>
        </div>

        {/* Card 3 */}
        <div className={styles.testimonialCard}>
          <div className={styles.cardHeader}>
            <div className={styles.userInfo}>
              <img src="/img/Ellipse 175 (2).png" alt="User 3" />
              <div>
                <div className={styles.userName}>Kim Young Jou</div>
                <div className={styles.userLocation}>Seoul, South Korea</div>
              </div>
            </div>
            <div className={styles.rating}>
              4.5 <img src="/img/Group 1161.png" alt="Star" />
            </div>
          </div>
          <div className={styles.cardText}>
            "This is very unusual for my business that currently requires a
            virtual private network that has high security."
          </div>
        </div>
      </div>

      {/* ✅ Navigasi bawah */}
      <div className={styles.testimonialNav}>
        <div className={styles.dot}>
          <div className={styles.dotImage}>
            <img src="/img/Group 1300.png" alt="Move" />
          </div>
        </div>
        <div className={styles.arrows}>
          <div className={styles.arrowBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </div>
          <div className={styles.arrowBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
