"use client";

import Image from "next/image";
import styles from "../style/stats.module.css";

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.statItem}>
        <div className={styles.icon}>
          <Image src="/img/user.png" alt="Users" width={45} height={45} />
        </div>
        <div className={styles.statText}>
          <span className={styles.statNumber}>90+</span>
          <span className={styles.statLabel}>Users</span>
        </div>
      </div>

      <div className={styles.statItem}>
        <div className={styles.icon}>
          <Image
            src="/img/location.png"
            alt="Locations"
            width={45}
            height={45}
          />
        </div>
        <div className={styles.statText}>
          <span className={styles.statNumber}>30+</span>
          <span className={styles.statLabel}>Locations</span>
        </div>
      </div>

      <div className={styles.statItem}>
        <div className={styles.icon}>
          <Image src="/img/server.png" alt="Servers" width={45} height={45} />
        </div>
        <div className={styles.statText}>
          <span className={styles.statNumber}>50+</span>
          <span className={styles.statLabel}>Servers</span>
        </div>
      </div>
    </section>
  );
}
