import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { OpeningSoon } from "@/components/opening-soon/opening-soon";
import { Collection } from "@/components/collection/collection";
import { Editorial } from "@/components/editorial/editorial";
import { BrandStory } from "@/components/brand-story/brand-story";
import { Location } from "@/components/location/location";
import { Social } from "@/components/social/social";
import { FinalCta } from "@/components/ui/final-cta";
import { Footer } from "@/components/footer/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Collection />
        <Editorial />
        <BrandStory />
        <OpeningSoon />
        <Location />
        <Social />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
