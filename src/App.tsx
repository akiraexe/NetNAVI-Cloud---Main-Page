import React from 'react';
import { Header } from './Header';
import Hero from './Hero';
import { Problem } from './Problem';
import { Approach } from './Approach';
import { HowItWorks } from './HowItWorks';
import { EvolvingSolutions } from './EvolvingSolutions';
import Ecosistema from './Ecosistema'; // <-- 1. Importamos el nuevo componente
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
        <Ecosistema /> {/* <-- 2. Lo inyectamos en la posición estratégica de conversión */}
        <Approach />
        <HowItWorks />
        <PartnerSolutions />
        <OperationalSupport />
        <WhoItsFor />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;