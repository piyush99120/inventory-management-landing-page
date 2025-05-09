import { 
  Badge 
} from "@/components/ui/badge";

const ModulesSection = () => {
  const modules = [
    {
      category: "Master Setup",
      items: [
        {
          title: "Unit Master",
          description: "Define and manage various units of measurement for inventory items",
        },
        {
          title: "UOM Group Master",
          description: "Create unit of measurement groups for related measurement types",
        },
        {
          title: "HSN Master",
          description: "Maintain Harmonized System Nomenclature codes for tax and regulatory compliance",
        },
        {
          title: "Manufacture Master",
          description: "Register and manage product manufacturers for sourcing and inventory tracking",
        },
        {
          title: "Item Category",
          description: "Categorize items for better organization and filtering capabilities",
        },
        {
          title: "Item Type",
          description: "Define various item types based on their characteristics and usage",
        },
      ]
    },
    {
      category: "Item Management",
      items: [
        {
          title: "Product Type Entry",
          description: "Define and manage different product types for categorization",
        },
        {
          title: "Item Property Entry",
          description: "Set up properties and attributes for detailed item specification",
        },
        {
          title: "Item Specification",
          description: "Create detailed specifications for each inventory item",
        },
        {
          title: "Group Master",
          description: "Organize items into hierarchical groups for better classification",
        },
        {
          title: "Item Creation",
          description: "Central module for creating and defining inventory items with all attributes",
        },
      ]
    },
    {
      category: "Stock Management",
      items: [
        {
          title: "Item Stock In Master",
          description: "Record incoming stock with detailed tracking information",
        },
        {
          title: "Stock Journal Entry",
          description: "Document all stock movements with comprehensive journal entries",
        },
        {
          title: "Demand Slip",
          description: "Generate and process demand requests for inventory items",
        },
        {
          title: "Stock Rate Update",
          description: "Update item rates and manage pricing changes across inventory",
        },
      ]
    },
    {
      category: "Location Management",
      items: [
        {
          title: "Bin Management Setup",
          description: "Configure storage bins for optimized warehouse organization",
        },
        {
          title: "Locker Entry",
          description: "Create and manage locker storage for secure item placement",
        },
        {
          title: "Box Entry",
          description: "Define box containers for grouping related items together",
        },
        {
          title: "Section Entry",
          description: "Organize warehouse into logical sections for easier navigation",
        },
        {
          title: "Packet Entry",
          description: "Track individual packets within boxes for granular inventory management",
        },
        {
          title: "Bin Serial Number Set Up",
          description: "Establish serial numbering system for bins to ensure unique identification",
        },
      ]
    },
    {
      category: "Price Management",
      items: [
        {
          title: "Client Price List",
          description: "Maintain client-specific pricing for customized rate management",
        },
        {
          title: "NTR Price List",
          description: "Manage net rate price lists for internal costing and valuation",
        },
      ]
    },
    {
      category: "Reports",
      items: [
        {
          title: "Stock Register",
          description: "Comprehensive record of all stock movements and current inventory levels",
        },
        {
          title: "Stock Trial",
          description: "Track and analyze stock movements over specific time periods",
        },
        {
          title: "Customer Item wise Stock Register",
          description: "View stock allocated or reserved for specific customers",
        },
        {
          title: "Daily Stock Account",
          description: "Day-to-day stock transaction records with opening and closing balances",
        },
        {
          title: "HSN/SAC Details Reports",
          description: "Tax code-wise reporting for regulatory compliance",
        },
        {
          title: "Stock Details",
          description: "Detailed view of stock with filters for various parameters",
        },
        {
          title: "Monthly Stock Analysis",
          description: "Analyze monthly trends in stock movement and valuation",
        },
        {
          title: "Individual Stock Details",
          description: "Item-specific stock details with complete transaction history",
        },
        {
          title: "Stock Trial (Bin Setup Wise)",
          description: "Location-specific stock trials for warehouse management",
        },
      ]
    },
  ];

  return (
    <section id="modules" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-indigo text-white mb-4">Modules</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-skyblue mb-6">
            Powerful Modules for Complete Control
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our inventory system includes comprehensive modules designed to handle every aspect of inventory management.
          </p>
        </div>

        <div className="max-w-3xl mx-auto h-[600px] overflow-y-auto rounded-lg shadow-lg">
          <div className="space-y-8 p-6">
            {modules.map((module, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-indigo mb-4 px-4 pt-4">
                  {module.category}
                </h3>
                <div className="space-y-4 p-4">
                  {module.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-bgGray p-4 rounded-lg hover:bg-gray-100 transition-colors">
                      <h4 className="font-medium text-skyblue mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-700">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
