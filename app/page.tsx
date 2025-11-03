"use client";

import dynamic from 'next/dynamic';
import AnimatedHero from '@/components/AnimatedHero';
const ConnectionAnimation = dynamic(
  () => import('@/components/ConnectionAnimation'),
  { ssr: false }
);
import Showcase from '@/components/Showcase';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="font-sans">
      <AnimatedHero />
      {/* <div className="min-h-screen">
        <ConnectionAnimation />
        <Showcase />
        <Footer />
      </div> */}
    </main>
  );
}
