import Hero from '../components/Hero';
import PopularDestinations from '../components/PopularDestinations';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularDestinations />
      <Testimonials />
      <FAQ />
    </main>
  );
}