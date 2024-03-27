import HeroSection from '@/components/hero/HeroSection';
import NavBar from '@/components/navbar/NavBar';
import ShortenSection from '@/components/shorten/ShortenSection';
import FeaturesSection from '@/components/features/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/footer/Footer';
export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <ShortenSection />
      <StatsSection />
      <FeaturesSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
