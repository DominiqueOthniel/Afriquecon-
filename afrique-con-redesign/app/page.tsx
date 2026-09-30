import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Routes from '@/components/Routes';
import ComfortClasses from '@/components/ComfortClasses';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Routes />
        <ComfortClasses />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
