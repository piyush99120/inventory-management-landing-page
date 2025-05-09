import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import BenefitsSection from "../components/BenefitsSection";
import ModulesSection from "../components/ModulesSection";
import CallToAction from "../components/CallToAction";
import SEOHead from "../components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-bgGray">
      <SEOHead />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <ModulesSection />
        <CallToAction />
      </main>
    </div>
  );
};

export default Index;
