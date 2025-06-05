import Image from "next/image";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";

export default function Home() {
  return (
    <div className="desktop w-360 border">
      <Navbar />

      <Hero />
      <SocialProof />
      <Features />
    </div>
  );
}
