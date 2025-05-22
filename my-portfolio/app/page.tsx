import Image from "next/image";
import Hero from "./components/hero";
import { FloatingNav } from "./components/ui/floating-navbar";
import { HomeIcon, UserIcon, BriefcaseIcon } from "lucide-react";
import Grid from "./components/grid";

export default function Home() {
  return (
    <main className="min-h-screen relative"> 
      <section className="relative bg-black-100 flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl mx-auto w-full">
          <Hero />
        </div>
      </section>
      <section className="relative bg-black-100 flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5 mt-20">
        <div className="max-w-7xl mx-auto w-full px-4">
          <Grid />
        </div>
      </section>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <FloatingNav 
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: <HomeIcon />
            },
            {
              name: "About",
              link: "#about",
              icon: <UserIcon />
            },
            {
              name: "Projects",
              link: "#projects",
              icon: <BriefcaseIcon />
            }
          ]} 
        />
      </div>
    </main>
  );
}
