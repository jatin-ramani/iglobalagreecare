export type ProductCategory = "Manure & Biomass" | "Grains" | "Powders & Superfoods" | "Packaging";

export type Product = {
  name: string;
  slug: string;
  category: ProductCategory;
  tagline: string;
  summary: string;
  intro: string;
  image: string;
  features: string[];
  applications: string[];
  closing: string;
  customizeImage?: boolean;
};

export const products: Product[] = [
  {
    name: "Cow Dung Cakes", slug: "cow-dung-cakes", category: "Manure & Biomass",
    tagline: "Traditional biomass, prepared with care.",
    summary: "Naturally sun-dried cow dung cakes for ceremonial, household and biomass applications.",
    intro: "Made from carefully sourced cow dung and dried without synthetic binders, these traditional cakes provide a practical renewable fuel option. Their uniform form supports convenient handling, storage and use.",
    image: "/products/cow-dung-cakes.jpg",
    features: ["Pure cow dung with no synthetic additives", "Traditionally shaped and naturally sun-dried", "Low-waste use of an agricultural by-product", "Convenient formats for storage and transport"],
    applications: ["Havan, puja and traditional ceremonies", "Traditional cooking and heating", "Natural biomass and farm use"],
    closing: "A simple, time-tested product for buyers seeking natural biomass with cultural and practical value.",
    customizeImage: true,
  },
  {
    name: "Cow Dung Manure", slug: "cow-dung-manure", category: "Manure & Biomass",
    tagline: "Organic nourishment for living soil.",
    summary: "Nutrient-rich organic manure that supports soil structure, microbial activity and resilient growth.",
    intro: "Our cow dung manure is prepared to retain valuable organic matter and naturally occurring nutrients. Applied to farms, gardens and landscapes, it helps create a healthier environment for roots and beneficial soil life.",
    image: "/products/cow-dung-manure.jpg",
    features: ["Naturally contains nitrogen, phosphorus and potassium", "Supports beneficial soil microorganisms", "Helps improve moisture retention and soil texture", "Free from synthetic fertilizer additives"],
    applications: ["Field crops and horticulture", "Gardens, nurseries and landscaping", "Soil conditioning and organic cultivation"],
    closing: "A dependable natural input for growers working toward fertile soil and steady long-term productivity.",
  },
  {
    name: "Yellow Corn (Maize)", slug: "yellow-corn-maize", category: "Grains",
    tagline: "Indian maize selected for versatile global use.",
    summary: "Bright, uniform yellow maize for food processing, feed manufacturing and industrial requirements.",
    intro: "Sourced from Indian agricultural supply networks, our yellow corn is selected for kernel quality, consistency and dependable handling. Lots can be prepared for buyer-specific food, feed and industrial requirements.",
    image: "/products/yellow-corn.jpg",
    features: ["Uniform colour and kernel profile", "Naturally rich in carbohydrates and dietary energy", "Carefully checked before packing", "Bulk formats for commercial requirements"],
    applications: ["Food, flour and snack processing", "Livestock and poultry feed", "Starch and other industrial processing"],
    closing: "A flexible commodity offering for importers, processors and feed businesses seeking consistent Indian maize.",
  },
  {
    name: "Moringa Leaf Powder", slug: "moringa-leaf-powder", category: "Powders & Superfoods",
    tagline: "Green nutrition in a versatile natural format.",
    summary: "Finely milled moringa leaf powder for nutrition, wellness, food and personal-care formulations.",
    intro: "Moringa leaves are gently dried and milled into a vibrant powder designed for versatile formulation. The ingredient naturally contains vitamins, minerals and antioxidant compounds valued across wellness categories.",
    image: "/products/moringa-powder.jpg",
    features: ["Naturally nutrient-dense leaf ingredient", "Fine texture for easy blending", "Plant-based source of antioxidants", "Suitable for custom bulk requirements"],
    applications: ["Smoothies, beverages and nutrition mixes", "Capsules and wellness formulations", "Cosmetic and personal-care products"],
    closing: "A practical botanical ingredient for brands developing clean, plant-forward products.",
  },
  {
    name: "Organic Moringa Leaf Powder", slug: "organic-moringa-leaf-powder", category: "Powders & Superfoods",
    tagline: "Premium moringa for clean-label formulations.",
    summary: "Organic-positioned moringa powder for buyers prioritising purity, traceability and responsible sourcing.",
    intro: "Produced from carefully selected moringa leaves, this premium grade is intended for organic and clean-label product lines. Gentle processing helps retain the plant's characteristic colour and nutritional profile.",
    image: "/products/organic-moringa.jpg",
    features: ["Clean-label botanical ingredient", "Processed without artificial colours or fillers", "Naturally rich in plant nutrients", "Traceable sourcing options subject to order"],
    applications: ["Organic beverages and superfood blends", "Natural wellness formulations", "Clean-label skincare and personal care"],
    closing: "Designed for premium formulations where ingredient integrity and responsible sourcing matter.",
  },
  {
    name: "Dry Oyster Mushroom", slug: "dry-oyster-mushroom", category: "Powders & Superfoods",
    tagline: "Delicate flavour with extended shelf life.",
    summary: "Carefully dried oyster mushrooms that preserve their distinctive texture, aroma and nutritional value.",
    intro: "Fresh oyster mushrooms are dehydrated to reduce moisture while protecting their characteristic savoury flavour. The resulting ingredient is easy to store, transport and rehydrate for culinary use.",
    image: "/products/dry-oyster-mushroom.jpg",
    features: ["Naturally savoury umami profile", "Source of plant protein and dietary fibre", "Extended shelf life compared with fresh mushrooms", "Convenient storage and transport"],
    applications: ["Soups, curries and stir-fries", "Ready-meal and packaged-food production", "Gourmet and hospitality kitchens"],
    closing: "A shelf-stable mushroom ingredient offering flavour, nutrition and convenience for commercial kitchens and processors.",
  },
  {
    name: "Oyster Mushroom Powder", slug: "oyster-mushroom-powder", category: "Powders & Superfoods",
    tagline: "Concentrated umami, ready to blend.",
    summary: "Fine oyster mushroom powder for seasoning, nutrition mixes and convenient food formulation.",
    intro: "Dried oyster mushrooms are milled into a versatile powder that disperses easily across dry and liquid recipes. It delivers natural savoury depth while contributing mushroom-derived nutrients.",
    image: "/products/oyster-mushroom-powder.jpg",
    features: ["Natural umami flavour enhancer", "Fine, formulation-friendly texture", "Contains protein, fibre and micronutrients", "Long shelf life and efficient handling"],
    applications: ["Soup, sauce and seasoning blends", "Instant foods and ready-to-eat meals", "Nutrition and savoury product formulations"],
    closing: "A compact, efficient ingredient for food businesses seeking authentic mushroom flavour without fresh-product handling.",
  },
  {
    name: "Banana Powder", slug: "banana-powder", category: "Powders & Superfoods",
    tagline: "Natural fruit character for modern food products.",
    summary: "Versatile banana powder for bakery, beverage, infant-food and nutrition applications.",
    intro: "Selected bananas are processed into a smooth powder that offers gentle sweetness, fruit flavour and functional body. Its convenient format supports consistent dosing in both household and industrial recipes.",
    image: "/products/banana-powder.jpg",
    features: ["Naturally sweet banana flavour", "Easy to store, measure and blend", "Useful as a thickening and flavouring ingredient", "Suitable for varied commercial formulations"],
    applications: ["Baby-food and nutrition products", "Bakery, desserts and snack mixes", "Smoothies, shakes and health drinks"],
    closing: "A convenient fruit ingredient that adds flavour, nutrition and formulation flexibility across product categories.",
  },
  {
    name: "Garlic Powder", slug: "garlic-powder", category: "Powders & Superfoods",
    tagline: "Reliable garlic flavour in every batch.",
    summary: "Dehydrated garlic powder delivering consistent aroma and flavour for food manufacturing and kitchens.",
    intro: "Quality garlic cloves are dehydrated and milled to create an efficient alternative to fresh garlic. The powder offers predictable flavour, simple storage and easy incorporation into recipes and industrial mixes.",
    image: "/products/garlic-powder.jpg",
    features: ["Authentic garlic aroma and taste", "Consistent particle size and dosing", "Longer shelf life than fresh garlic", "Convenient for bulk food preparation"],
    applications: ["Seasonings, sauces and spice blends", "Snacks and ready-to-eat foods", "Hotels, restaurants and catering"],
    closing: "A dependable pantry and processing ingredient built for consistent flavour at commercial scale.",
  },
  {
    name: "Onion Powder", slug: "onion-powder", category: "Powders & Superfoods",
    tagline: "Full onion flavour without fresh handling.",
    summary: "Shelf-stable onion powder for seasonings, savoury foods and efficient commercial preparation.",
    intro: "Carefully selected onions are dehydrated and milled into a uniform powder with a recognisable savoury profile. It offers processors a practical way to add onion character with controlled dosing and reduced preparation time.",
    image: "/products/onion-powder.jpg",
    features: ["Distinctive natural onion flavour", "Stable and easy to store", "Consistent blending across production batches", "Reduces peeling and preparation requirements"],
    applications: ["Soups, sauces and seasoning blends", "Chips, namkeen and savoury snacks", "Instant foods and packaged meals"],
    closing: "A time-saving ingredient for food manufacturers seeking repeatable flavour and straightforward storage.",
  },
  {
    name: "PP & PET Strapping Rolls", slug: "pp-pet-strapping-rolls", category: "Packaging",
    tagline: "Secure loads. Streamline logistics.",
    summary: "Durable PP and PET strapping solutions for bundling, pallet stability and industrial transport.",
    intro: "Our packaging range covers lightweight polypropylene strapping and stronger polyester options for demanding loads. Both formats support efficient bundling and safer movement through storage and logistics operations.",
    image: "/products/strapping-rolls.jpg",
    features: ["PP options for light and medium-duty bundling", "PET options for stronger load retention", "Moisture-resistant and corrosion-free", "Compatible with common manual and machine systems"],
    applications: ["Cartons, newspapers and packaged goods", "Pallet stabilisation and logistics", "Construction materials and industrial loads"],
    closing: "A cost-conscious packaging choice for businesses that need dependable load security from warehouse to destination.",
    customizeImage: true,
  },
];

export const productCategories: ProductCategory[] = ["Powders & Superfoods", "Grains", "Manure & Biomass", "Packaging"];
export const featuredProducts = [products[1], products[2], products[3], products[10]];
export const contact = {
  address: "Ground Floor - 50 Variya, Ghogha Road, Nr. Rajaram No Avedo, Shivaji Circle, Bhavnagar - 364001, Gujarat, India",
  phone: "+91 99132 42040",
  email: "iglobalagreecare2040@gmail.com",
  website: "www.iglobalagreecare.com",
  whatsapp: "919913242040",
  map: "https://maps.google.com/?q=Ground+Floor+50+Variya+Ghogha+Road+Shivaji+Circle+Bhavnagar+364001",
};

export const trustBadges = [
  ["01", "Market Experience", "Practical export support shaped around buyer requirements."],
  ["02", "Quality Standards", "Clear checks from sourcing through final packing."],
  ["03", "Ethical Policies", "Responsible relationships with suppliers and customers."],
  ["04", "Customer Satisfaction", "Responsive communication across every order stage."],
];

export const faqs = [
  ["What products can I source from IGLOBALAGREECARE?", "Our range covers cow dung products, yellow maize, moringa, mushroom and fruit or vegetable powders, plus PP and PET strapping rolls."],
  ["Can you provide certification documents?", "Available documents depend on the product and shipment. Tell us your destination and compliance needs, and we will confirm the applicable records before order finalisation."],
  ["Do you support custom or bulk orders?", "Yes. Packaging, quantity and selected specifications can be discussed for commercial orders, subject to feasibility and minimum quantities."],
  ["What is the minimum order quantity?", "MOQ varies by product, pack format and destination. Share your requirement through the enquiry form for a product-specific quotation."],
  ["Are samples available?", "Samples may be arranged for qualified enquiries. Availability, courier charges and documentation are confirmed case by case."],
  ["Which payment terms do you accept?", "Payment terms are agreed during quotation and depend on order value, destination and commercial checks."],
];
