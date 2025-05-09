import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-skyblue to-indigo">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Inventory Management?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join businesses that have optimized their inventory processes and
          increased operational efficiency.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-indigo hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
