import { Badge } from "@/components/ui/badge";
import { DatabaseIcon, Box, Settings } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-skyblue text-white mb-4">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo mb-6">
            Comprehensive Inventory Management
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our platform offers end-to-end inventory control with powerful
            features designed to optimize your operations and increase
            efficiency.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div
            variants={item}
            className="bg-bgGray p-6 rounded-xl hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white inline-block p-3 rounded-full mb-4">
              <DatabaseIcon className="text-skyblue" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-indigo mb-2">
              Master Management
            </h3>
            <p className="text-gray-700">
              Easily define and manage units, HSN codes, manufacturers, and
              other master data critical for inventory operations.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-bgGray p-6 rounded-xl hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white inline-block p-3 rounded-full mb-4">
              <Box className="text-deepPink" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-indigo mb-2">
              Item Management
            </h3>
            <p className="text-gray-700">
              Create, categorize, and manage items with detailed specifications,
              properties, and grouping for better organization.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-bgGray p-6 rounded-xl hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white inline-block p-3 rounded-full mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-skyblue"
              >
                <path
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m-8 4v10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-indigo mb-2">
              Stock Control
            </h3>
            <p className="text-gray-700">
              Track stock movement with detailed journals, demand slips, and
              stock-in entries for complete visibility.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-bgGray p-6 rounded-xl hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white inline-block p-3 rounded-full mb-4">
              <Settings className="text-indigo" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-indigo mb-2">
              Bin Management
            </h3>
            <p className="text-gray-700">
              Optimize storage with locker, box, section, and packet management
              for precise location tracking of items.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-bgGray p-6 rounded-xl hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white inline-block p-3 rounded-full mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-deepPink"
              >
                <path
                  d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m4-9l5-5m0 0l5 5m-5-5v12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-indigo mb-2">
              Price Management
            </h3>
            <p className="text-gray-700">
              Maintain client price lists, NTR price lists, and stock rate
              updates to ensure accurate pricing.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-bgGray p-6 rounded-xl hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white inline-block p-3 rounded-full mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-skyblue"
              >
                <path
                  d="M9 17l-5-5 5-5m6 10l5-5-5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-indigo mb-2">
              Comprehensive Reporting
            </h3>
            <p className="text-gray-700">
              Generate detailed reports including stock register, stock trial,
              HSN/SAC details, and monthly stock analysis.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
