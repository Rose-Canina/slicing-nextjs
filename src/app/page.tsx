"use Client";

import Script from "next/script";
import Navbar from "@/app/component/Navbar";
import Stats from "@/app/component/Stats";
import Features from "@/app/component/Features";
import Plan from "@/app/component/Plan";
import Network from "@/app/component/Network";
import Testimonial from "@/app/component/Testimonials";
import Subscribe from "@/app/component/Subscribe";
import Footer from "@/app/component/Footer";
import GetStarted from "./component/GetStarted";

export default function Home() {
  return (
    <>
      <Script src="/script/script.js" strategy="afterInteractive" />

      <section className="section">
        <Navbar />

        <GetStarted />

        <Stats />

        <Features />

        <Plan />

        <Network />

        <Testimonial />

        <Subscribe />

        <Footer />
      </section>
    </>
  );
}
