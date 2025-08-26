"use client"

import { useEffect, useState } from "react";
import styles from "../style/footer.module.css";

type FooterLink = {
  title: string;
  items: string[];
};

export default function Footer() {
  const [footerLinks, setFooterLinks] = useState<FooterLink[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/data.json");
        const data = await res.json();

        // ambil array sesuai JSON
        setFooterLinks(data["footerLinks"]);
      } catch (error) {
        console.error("error", error);
      }
    }
    fetchData();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Bagian Kiri */}
        <div className={styles.footerLeft}>
          <div className={styles.footerLeftLogo}>
            <img src="/img/Logo.png" alt="LaslesVPN" />
          </div>
          <p>
            LaslesVPN is a private virtual network that has unique features and
            has high security.
          </p>
          <div className={styles.socialIcons}>
            <img src="/img/Facebook.png" alt="Facebook" />
            <img src="/img/Twitter.png" alt="Twitter" />
            <img src="/img/Instagram.png" alt="Instagram" />
          </div>
          <p className={styles.copyright}>©2020 LaslesVPN</p>
        </div>

        {/* Bagian Footer Links */}
        <div className={styles.footerLinks}>
          {footerLinks.map((link, index) => (
            <div key={index}>
              <h4>{link.title}</h4>
              <ul>
                {link.items.map((item, i) => (
                  <li key={i}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
