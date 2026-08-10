import LogoIntro from "@/components/layout/LogoIntro";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Companies from "@/components/sections/Companies";
import Talent from "@/components/sections/Talent";
import Founder from "@/components/sections/Founder";
import Vision from "@/components/sections/Vision";
import FinalCta from "@/components/sections/FinalCta";

/* Home page composition. Portfolio, Timeline, Insights and Stats still exist under
   src/components/sections/ and can be slotted back in here if the group wants them. */
export default function Home() {
  return (
    <>
      {/* Overlay, not a section: holds for 3s then dissolves. The page itself
          begins at the Hero. */}
      <LogoIntro />
      <Hero />
      <About />
      <Companies />
      <Talent />
      <Founder />
      <Vision />
      <FinalCta />
    </>
  );
}
