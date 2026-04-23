import Hero from "@/components/Hero";
import WhySkillAhead from "@/components/WhySkillAhead";
import OurSchoolsHome from "@/components/OurSchoolsHome";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import WhatYouGain from "@/components/WhatYouGain";
import CTA from "@/components/CTA";

import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="bg-white overflow-hidden">
      <Hero />
      <ScrollReveal>
        <WhySkillAhead />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <OurSchoolsHome />
      </ScrollReveal>
      <ScrollReveal>
        <WhoThisIsFor />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <WhatYouGain />
      </ScrollReveal>
      <ScrollReveal>
        <CTA />
      </ScrollReveal>
    </main>
  );
}
