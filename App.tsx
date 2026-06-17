import React from 'react';
import { Header } from './components/Header';  // Changed from default to named import
import Hero from './components/Hero';
import { Problem } from './components/Problem';
import { Approach } from './components/Approach';
import { HowItWorks } from './components/HowItWorks';
import { EvolvingSolutions } from './components/EvolvingSolutions';
import { PartnerSolutions } from './components/PartnerSolutions';
import { OperationalSupport } from './components/OperationalSupport';
import { WhoItsFor } from './components/WhoItsFor';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen antialiased">
      <Header />
      <main>
        <Hero />
        <Problem />
        <EvolvingSolutions />
        <Approach />
        <HowItWorks />
        <PartnerSolutions />
        <OperationalSupport />
        <WhoItsFor />
        <CTA />
        <Footer />
      </main>
    </div>
  );
};

export default App;