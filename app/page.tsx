import Hero from './components/Hero';
import NewArrivals from './components/NewArrivals';
import Newsletter from './components/Newsletter';
import TopSelling from './components/TopSelling';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <NewArrivals />
      <TopSelling />
      <Newsletter />
    </div>
  );
}