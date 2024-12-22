import Hero from '@/components/Hero/Hero';
import { Footer } from '@/components/Footer/footer';
import Testimonials from '@/components/Testimonials/testimonials';
import Features from '@/components/Features/features';
import Services from '@/components/Services/services';
import Future from '@/components/Future/future';

export default function Home() {
  return (
    <main className="bg-transparent">
      <Hero />
      <Services />
      <Features />
      <Testimonials />

      <Future />

      {/* <LogoCloud /> */}
      {/* <YoutubeGrid /> */}
      {/* <Stats /> */}
      {/* <YoutubeVideos /> */}
      {/* <WavyBackgroundDemo /> */}
      {/* <Projects /> */}
      {/* <SecondQuote /> */}
      {/* <TheEnd /> */}
      <Footer />
    </main>
  );
}
