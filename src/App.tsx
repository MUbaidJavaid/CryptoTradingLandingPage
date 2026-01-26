import React from 'react';
import { Hero } from './components/Hero';
import { MarketGrowth } from './components/MarketGrowth';
import { ProfitPotential } from './components/ProfitPotential';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DashboardPreview } from './components/DashboardPreview';
import { SocialProof } from './components/SocialProof';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';
import { CryptoBackground } from './components/CryptoBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 relative">
      <CryptoBackground />
      <Hero />
      <MarketGrowth />
      <ProfitPotential />
      <HowItWorks />
      <WhyChooseUs />
      <DashboardPreview />
      <SocialProof />
      <RegistrationForm />
      <Footer />
    </div>
  );
}
