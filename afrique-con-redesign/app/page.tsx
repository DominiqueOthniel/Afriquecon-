import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Routes from '@/components/Routes';
import ComfortClasses from '@/components/ComfortClasses';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Routes />
        <Services />
        <ComfortClasses />
        <Booking />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
