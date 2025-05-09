import { Button } from "@/components/ui/button";
import { Database, Box, Settings } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 bg-bgGray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-skyblue leading-tight">
              Complete Inventory <span className="text-indigo">Management System</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Streamline your inventory operations with our comprehensive solution. From item creation to stock reporting, manage your entire inventory lifecycle in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-skyblue hover:bg-indigo transition-colors text-lg py-6 px-8">
                Get Started
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-float">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center">
                <Box className="text-skyblue mb-2" size={36} />
                <h3 className="text-indigo font-semibold">Item Management</h3>
                <p className="text-sm text-gray-600">Organize and track all items</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center mt-8">
                <Database className="text-deepPink mb-2" size={36} />
                <h3 className="text-indigo font-semibold">Stock Control</h3>
                <p className="text-sm text-gray-600">Real-time inventory tracking</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center">
                <Settings className="text-indigo mb-2" size={36} />
                <h3 className="text-indigo font-semibold">Master Setup</h3>
                <p className="text-sm text-gray-600">Configure your system</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center mt-8">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-skyblue mb-2">
                  <path d="M10 2v4m4-4v4M10 18v4m4-4v4M2 10h4m-4 4h4m12-4h4m-4 4h4M7 7l10 10M17 7L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="text-indigo font-semibold">Bin Management</h3>
                <p className="text-sm text-gray-600">Optimize storage locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
