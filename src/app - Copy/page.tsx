

import Hero from "@/app/components/Hero";
import Image from "next/image";
import Project from "./components/Home";
import Contact from "@/app/components/Contact";
import About  from "@/app/components/About";
import footer from "@/app/components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home(){
  useEffect (() => {
AOS.init({
  easing:"ease-out-back",
  duration:1200,
delay:100,
mirror: true,
anchorPlacement:"bottom-bottom",
offset:160,
});
AOS.refresh()
  },[])
  return(
    <main>
      <Hero/>
      <Home/>
      <Contact/>
      <About/>
      <footer/>
    </main>
  );
};
