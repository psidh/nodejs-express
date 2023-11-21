import About from '@/components/about';
import Footer from '@/components/footer';
import TechForm from '@/components/form';
import Hero from '@/components/hero';
import Line from '@/components/line';
import Navbar from '@/components/navbar';
import Ocean from '@/components/ocean';
import Ultra from '@/components/ultra';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Ultra />
      <About />
      <Line />
      <Ocean />
      <TechForm />
      <Footer />
    </div>
  );
}
