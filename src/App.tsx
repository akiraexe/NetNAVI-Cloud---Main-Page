import React from 'react';
import { Header } from './Header';  // Changed from default to named import
import Hero from './Hero';
import { Problem } from './Problem';
import { Approach } from './Approach';
import { HowItWorks } from './HowItWorks';
import { EvolvingSolutions } from './EvolvingSolutions';
import { PartnerSolutions } from './PartnerSolutions';
import { OperationalSupport } from './OperationalSupport';
import { WhoItsFor } from './WhoItsFor';
import { CTA } from './CTA';
import { Footer } from './Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-lightBg text-brand-textDark antialiased">
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