
import { Helmet } from "react-helmet-async";

const SEOHead = () => {
  return (
    <Helmet>
      <title>StockVista - Complete Inventory Management System</title>
      <meta name="description" content="Comprehensive inventory management system featuring unit masters, bin management, item creation, stock tracking, and detailed reporting for businesses of all sizes." />
      <meta name="keywords" content="inventory management, stock control, bin management, item master, warehouse management, stock tracking, inventory reports, HSN master, stock journal, inventory software" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="StockVista - Complete Inventory Management System" />
      <meta property="og:description" content="Comprehensive inventory management system with advanced features for master data, stock control, bin management, and detailed reporting." />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="StockVista - Complete Inventory Management System" />
      <meta name="twitter:description" content="Comprehensive inventory management system with advanced features for master data, stock control, bin management, and detailed reporting." />
      
      {/* Canonical */}
      <link rel="canonical" href="https://stockvista-inventory.com" />
    </Helmet>
  );
};

export default SEOHead;
