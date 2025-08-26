"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../style/navbar.module.css";
import { useEffect, useState } from "react";

interface NavbarItem {
  link: string;
  text: string;
}

export default function Navbar() {
  const [menu, setMenu] = useState<NavbarItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/data.json");
        const data = await res.json();

        // ambil langsung array menu
        setMenu(data.menu);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <nav className={styles.nav}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image
          src="/img/Logo.png"
          alt="Logo"
          width={150}
          height={40}
          className={styles.logoImg}
        />
      </div>

      {/* Menu */}
      <ul className={styles.menu}>
        {menu.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Right Buttons */}
      <div className={styles["right-buttons"]}>
        <Link href="/signin" className={styles.signin}>
          Sign In
        </Link>
        <Link href="/signup" className={styles.signup}>
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
