import { CheckIcon } from "lucide-react";
import { motion } from "framer-motion";

const BenefitsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  const benefits = [
    {
      title: "Increased Operational Efficiency",
      description: "Streamline inventory processes and reduce manual work with automation",
    },
    {
      title: "Improved Inventory Accuracy",
      description: "Maintain precise stock levels with real-time tracking and bin management",
    },
    {
      title: "Better Decision Making",
      description: "Access comprehensive reports for data-driven inventory decisions",
    },
    {
      title: "Reduced Inventory Costs",
      description: "Optimize stock levels to minimize carrying costs and prevent overstocking",
    },
    {
      title: "Enhanced Customer Satisfaction",
      description: "Fulfill orders accurately and quickly with organized inventory management",
    },
    {
      title: "Scalable Solution",
      description: "Grow your business with a system that can handle increasing complexity",
    },
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-bgGray">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-skyblue mb-6">
            Why Choose Our Inventory System?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our inventory management solution delivers tangible benefits that impact your bottom line and operational effectiveness.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 bg-skyblue rounded-full p-1.5">
                <CheckIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
