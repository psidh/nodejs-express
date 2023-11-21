import About from '@/components/about';
import Footer from '@/components/footer';
import TechForm from '@/components/form';
import Hero from '@/components/hero';
import Horiline from '@/components/horiline';
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
      <Horiline />
      <Ocean />
      <TechForm />
      <Footer />
    </div>
  );
}
