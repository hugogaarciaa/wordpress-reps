import Image from "next/image";
import Navbar from "./layout/navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
