import { Inter } from "next/font/google";
import Nav from "@/Components/DynamicNavbar";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Nav />
    </>
  );
}
