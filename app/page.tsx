import Hero from "@/components/Hero";
import WhySkillAhead from "@/components/WhySkillAhead";
import OurSchoolsHome from "@/components/OurSchoolsHome";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import WhatYouGain from "@/components/WhatYouGain";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="bg-white overflow-hidden">
      <Hero />
      <WhySkillAhead />
      <OurSchoolsHome />
      <WhoThisIsFor />
      <WhatYouGain />
      <CTA />
    </main>
  );
}
