import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/components/Main/HeroSection/HeroSection";
import { HeadSection } from "@/components";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <HeadSection
        title="Riches Metelewawon — Full-Stack Engineer"
        page="Home"
        description="Full-Stack Engineer with 3+ years building production systems in fintech, healthcare, and API infrastructure. React, TypeScript, Laravel, Node.js, PostgreSQL."
      />
      <main className="relative w-full font-pop bg-body overflow-x-hidden">
        <section className="relative min-h-screen flex justify-center items-center z-20 pt-28 pb-14 font-pop">
          {/* <div className="absolute inset-0 -z-10">
            <Image src={"/bg-hero2.png"} alt="" fill priority />
          </div> */}
          <div className="max-w-4xl xl:max-w-[1000px] px-6 md:px-10 lg:px-0 relative w-full ">
            {/* hero items' */}
            <HeroSection />
          </div>
        </section>
      </main>
    </>
  );
}
