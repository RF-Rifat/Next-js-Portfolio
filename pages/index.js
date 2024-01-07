import { Inter } from "next/font/google";
import Nav from "@/Components/DynamicNavbar";
import ParticlesContainer from "@/Components/ParticlesContainer";
import HomeSection from "./Home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ParticlesContainer className="-z-20"></ParticlesContainer>
      <div className="max-w-7xl mx-auto">
        <Nav />
        <HomeSection />
      </div>
    </>
  );
}
