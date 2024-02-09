import { Inter } from "next/font/google";
import Nav from "@/Components/DynamicNavbar";
import ParticlesContainer from "@/Components/ParticlesContainer";
import HomeSection from "./Home/Home";
import About from "./About/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ParticlesContainer className="-z-20">
        <div className="max-w-7xl mx-auto">
          <Nav />
          <HomeSection />
          <About></About>
        </div>
      </ParticlesContainer>
    </>
  );
}
