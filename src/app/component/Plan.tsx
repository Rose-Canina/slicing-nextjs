"use client";

import Image from "next/image";
import styles from "../style/plan.module.css";
import { useEffect, useState } from "react";

export default function Plan() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/data.json");
        const data = await res.json();

        // ambil array
        setTitle(data["planText"][0]);
        setSubTitle(data["planText"][1]);
      } catch (error) {
        console.error("eror", error);
      }
    }
    fetchData();
  }, []);
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <p>{subTitle}</p>
      <div className={styles.plans}>
        {/* Free Plan */}
        <div className={styles.planCard}>
          <Image src="/img/Box.png" alt="Free Plan" width={180} height={180} />
          <h3>Free Plan</h3>
          <ul className={styles.planFeatures}>
            <li>
              <Image
                src="/img/correct.png"
                alt="Correct"
                width={60}
                height={30}
              />{" "}
              Unlimited Bandwidth
            </li>
            <li>
              <Image
                src="/img/correct.png"
                alt="Correct"
                width={60}
                height={30}
              />{" "}
              Encrypted Connection
            </li>
            <li>
              <Image
                src="/img/correct.png"
                alt="Correct"
                width={60}
                height={30}
              />{" "}
              No Traffic Logs
            </li>
            <li>
              <Image
                src="/img/correct.png"
                alt="Correct"
                width={60}
                height={30}
              />{" "}
              Works on All Devices
            </li>
          </ul>
          <div>
            <p className={styles.planPrice}> Free</p>
          </div>
          <div className={styles.button}>Select</div>
        </div>

        {/* Standard Plan */}
        <div className={styles.planCard}>
          <Image src="/img/Box.png" alt="Free Plan" width={180} height={180} />
          <h3>Standard Plan</h3>
          <ul className={styles.planFeatures}>
            <li>
              <Image
                src="/img/correct.png"
                alt="Correct"
                width={60}
                height={30}
              />{" "}
              Unlimited Bandwidth
            </li>
            <li>
              <Image
                src="/img/correct.png"
                alt="Correct"
                width={60}
                height={30}
              />{" "}
              Encrypted Connection
            </li>
            <li>
              <Image
                src="/img/correct.png"
                alt="Correct"
                width={60}
                height={30}
              />{" "}
              No Traffic Logs
            </li>
            <li>
              <Image
                src="/img/correct.png"
                alt="Correct"
                width={60}
                height={30}
              />{" "}
              Works on All Devices
            </li>
            <li>
              <Image
                src="/img/correct.png"
                alt="Correct"
                width={60}
                height={30}
              />{" "}
              Connect Anywhere
            </li>
          </ul>
          <div>
            <p className={styles.planPrice}>$9 /mo</p>
          </div>
          <div className={styles.button}>Select</div>
        </div>

        {/* Premium Plan  */}
        <div className={styles.planCard}>
          <Image
            src="/img/Box.png"
            alt="Premium Plan"
            width={180}
            height={180}
          />
          <h3>Premium Plan</h3>
          <ul className={styles.planFeatures}>
            <li>
              <Image
                src="/img/correct.png"
                alt="Correct"
                width={60}
                height={30}
              />{" "}
              Unlimited Bandwidth
            </li>
            <li>
              <Image
                src="/img/correct.png"
                alt="Correct"
                width={60}
                height={30}
              />{" "}
              Encrypted Connection
            </li>
            <li>
              <Image
                src="/img/correct.png"
                alt="Correct"
                width={60}
                height={30}
              />{" "}
              No Traffic Logs
            </li>
            <li>
              <Image
                src="/img/correct.png"
                alt="Correct"
                width={60}
                height={30}
              />{" "}
              Works on All Devices
            </li>
            <li>
              <Image
                src="/img/correct.png"
                alt="Correct"
                width={60}
                height={30}
              />{" "}
              Connect Anywhere
            </li>
            <li>
              <Image
                src="/img/correct.png"
                alt="Correct"
                width={60}
                height={30}
              />{" "}
              Get New Features
            </li>
          </ul>
          <div>
            <p className={styles.planPrice}>$12 /mo</p>
          </div>
          <div className={styles.button}>Select</div>
        </div>
      </div>
    </section>
  );
}
