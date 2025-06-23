import React from 'react';
import { motion } from 'framer-motion';
import './lib/i18n';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ValueProposition from './components/ValueProposition';
import FeaturesShowcase from './components/FeaturesShowcase';
import SocialProof from './components/SocialProof';
import Community from './components/Community';
import Leadership from './components/Leadership';
import Inclusivity from './components/Inclusivity';
import FAQ from './components/FAQ';
import WaysToConnect from './components/WaysToConnect';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import IOSWaitlistModal from './components/IOSWaitlistModal';
import PlayStoreModal from './components/PlayStoreModal';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <FeaturesShowcase />
        <SocialProof />
        <Community />
        <Leadership />
        <Inclusivity />
        <FAQ />
        <WaysToConnect />
        <FinalCTA />
      </main>
      <Footer />
      <IOSWaitlistModal />
      <PlayStoreModal />
    </div>
  );
}

export default App;