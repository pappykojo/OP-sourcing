// ─────────────────────────────────────────────
//  PRODUCT DATA
//  To add a product: append one object to this array.
//  Fields:
//    category  : "electronics" | "appliances" | "construction" | "vehicles" | "industrial"
//    badge     : label shown on the card thumbnail
//    images    : array of image paths (first is the thumbnail)
//    title     : product name
//    rating    : number (1–5)
//    desc      : short description
//    meta      : { label, value }  — MOQ / Size / Mileage
//    shipping  : shipping note
//    price     : display string e.g. "₵11,000" or "$18,000"
// ─────────────────────────────────────────────
const PRODUCTS = [
  // ── ELECTRONICS ────────────────────────────
  {
    category: "electronics",
    badge: "Smart TV",
    images: [
      "assets/img/products/65TV.webp",
      "assets/img/products/65TV2.avif",
      "assets/img/products/65TV3.jpg",
      "assets/img/products/65TV4.webp"
    ],
    title: '65" Samsung QLED 65Q70T',
    rating: 4.5,
    desc: "Premium QLED television with smart streaming, HDR support and ultra-slim bezel design.",
    meta: { label: "MOQ", value: "1 Unit(s)" },
    shipping: "Included in price",
    price: "₵11,000"
  },
  {
    category: "electronics",
    badge: "Smart TV",
    images: [
      "assets/img/products/55TV.jpg",
      "assets/img/products/85TV.jpg",
      "assets/img/products/65TV2.avif",
      "assets/img/products/65TV3.jpg",
      "assets/img/products/65TV4.webp"
    ],
    title: '55" Samsung QLED 55Q70T',
    rating: 4.9,
    desc: "Premium QLED television with smart streaming, HDR support and ultra-slim bezel design.",
    meta: { label: "MOQ", value: "1 Unit(s)" },
    shipping: "Included in price",
    price: "₵9,000"
  },
  {
    category: "electronics",
    badge: "Smart TV",
    images: [
      "assets/img/products/85TV.jpg",
      "assets/img/products/65TV.webp",
      "assets/img/products/65TV2.avif",
      "assets/img/products/65TV3.jpg",
      "assets/img/products/65TV4.webp"
    ],
    title: '85" Samsung QLED 85Q70A',
    rating: 4.9,
    desc: "Premium QLED television with smart streaming, HDR support and ultra-slim bezel design.",
    meta: { label: "MOQ", value: "1 Unit(s)" },
    shipping: "Included in price",
    price: "₵20,000"
  },

  // ── APPLIANCES ─────────────────────────────
  {
    category: "appliances",
    badge: "Refrigerators",
    images: [
      "assets/img/products/doublefridge.jpg",
      "assets/img/products/fridge2.jpg",
      "assets/img/products/fridge3.jpg",
      "assets/img/products/fridge4.jpg"
    ],
    title: "Double Door Samsung Fridge",
    rating: 4.8,
    desc: "Energy efficient refrigerator with inverter cooling, low noise technology and modern interior storage.",
    meta: { label: "MOQ", value: "1 Unit(s)" },
    shipping: "Included in price",
    price: "₵17,000"
  },
  {
    category: "appliances",
    badge: "Air Conditioners",
    images: [
      "assets/img/products/ac.jpg",
      "assets/img/products/ac1.jpg",
      "assets/img/products/ac2.gif",
      "assets/img/products/ac3.jpg"
    ],
    title: "2.5HP Inverter Panasonic AC",
    rating: 4.7,
    desc: "Smart inverter air conditioner designed for efficient cooling and reduced power consumption.",
    meta: { label: "MOQ", value: "1 Unit(s)" },
    shipping: "Included in price",
    price: "₵15,000"
  },
  {
    category: "appliances",
    badge: "Washing Machine",
    images: [
      "assets/img/products/28wash.jpg",
      "assets/img/products/28wash1.jpg",
      "assets/img/products/28wash2.jpg",
      "assets/img/products/28wash3.jpg",
      "assets/img/products/28wash4.jpg",
      "assets/img/products/28wash5.jpg"
    ],
    title: "LG 28kg Washing Machine",
    rating: 4.8,
    desc: "Smart top load washing machine with low water consumption. Wash, dry and spin.",
    meta: { label: "MOQ", value: "1 Unit(s)" },
    shipping: "Included in price",
    price: "₵5,000"
  },
  {
    category: "appliances",
    badge: "Washing Machine",
    images: [
      "assets/img/products/15wash.jpg",
      "assets/img/products/28wash1.jpg",
      "assets/img/products/28wash2.jpg",
      "assets/img/products/28wash3.jpg",
      "assets/img/products/28wash4.jpg",
      "assets/img/products/28wash5.jpg"
    ],
    title: "Samsung 15kg Washing Machine",
    rating: 4.8,
    desc: "High-capacity smart washing machine with inverter motor and low water consumption. Wash, dry and spin.",
    meta: { label: "MOQ", value: "1 Unit(s)" },
    shipping: "Included in price",
    price: "₵4,500"
  },

  // ── INDUSTRIAL ─────────────────────────────
  {
    category: "industrial",
    badge: "Industrial Washing Machine",
    images: [
      "assets/img/products/industrial washing machine.jpg",
      "assets/img/products/induswash1.jpg",
      "assets/img/products/induswash2.jpg",
      "assets/img/products/induswash3.avif"
    ],
    title: "Industrial Washing Machine",
    rating: 4.2,
    desc: "High-capacity smart washing machine with inverter motor and low water consumption. Wash, dry and spin.",
    meta: { label: "MOQ", value: "1 Unit(s)" },
    shipping: "Included in price",
    price: "₵65,000"
  },

  // ── CONSTRUCTION ───────────────────────────
  {
    category: "construction",
    badge: "Bath Tub",
    images: [
      "assets/img/products/2bathtub2.jpg",
      "assets/img/products/2bathtub1.avif",
      "assets/img/products/3bathtub3.jpg"
    ],
    title: "Wood-like Acrylic Bath Tub",
    rating: 4.2,
    desc: "Luxury Wooden Bath Tub",
    meta: { label: "Size", value: "1.7 meter" },
    shipping: "Included in price",
    price: "₵7,000"
  },
  {
    category: "construction",
    badge: "Construction",
    images: [
      "assets/img/products/glossy tiles.jpg",
      "assets/img/products/gloss0.jpg",
      "assets/img/products/gloss1.jpg",
      "assets/img/products/gloss2.jpg",
      "assets/img/products/gloss3.jpg",
      "assets/img/products/gloss4.jpg",
      "assets/img/products/gloss5.jpg",
      "assets/img/products/gloss6.jpg",
      "assets/img/products/gloss7.jpg",
      "assets/img/products/gloss8.jpg",
      "assets/img/products/gloss9.jpg",
      "assets/img/products/gloss10.jpg",
      "assets/img/products/gloss11.jpg",
      "assets/img/products/gloss12.jpg",
      "assets/img/products/gloss13.jpg",
      "assets/img/products/gloss14.jpg",
      "assets/img/products/gloss15.jpg",
      "assets/img/products/gloss16.jpg",
      "assets/img/products/gloss17.jpg",
      "assets/img/products/gloss18.jpg",
      "assets/img/products/gloss19.jpg"
    ],
    title: "Premium High Gloss Tiles",
    rating: 4.9,
    desc: "Durable coated tiles designed for residential and commercial projects. Contact for additional designs.",
    meta: { label: "Size", value: "60x60 (4 pieces per box)" },
    shipping: "Not included in price",
    price: "₵180"
  },
  {
    category: "construction",
    badge: "Bath Tub",
    images: [
      "assets/img/products/1bathtub1.jpg",
      "assets/img/products/1bathtub2.jpg",
      "assets/img/products/1bathtub3.jpg",
      "assets/img/products/1bathtub4.webp"
    ],
    title: "Modern Bath Tub",
    rating: 4.2,
    desc: "Luxury Bath Tub",
    meta: { label: "Size", value: "170x120x50" },
    shipping: "Included in price",
    price: "₵8,600"
  },
  {
    category: "construction",
    badge: "Construction",
    images: [
      "assets/img/products/1door1.jpg",
      "assets/img/products/1door2.jpg",
      "assets/img/products/1door3.jpg",
      "assets/img/products/1door4.jpg",
      "assets/img/products/1door5.jpg",
      "assets/img/products/1door6.jpg",
      "assets/img/products/1door7.jpg",
      "assets/img/products/1door8.jpg"
    ],
    title: "Water-proof Hardwood Doors",
    rating: 4.6,
    desc: "Durable water-proof hardwood doors designed for residential and commercial projects. Contact for additional designs.",
    meta: { label: "Size", value: "single" },
    shipping: "Included in price",
    price: "₵2,700"
  },
  {
    category: "construction",
    badge: "Construction",
    images: [
      "assets/img/products/matte tiles.jpg",
      "assets/img/products/matte1.jpg",
      "assets/img/products/matte2.jpg",
      "assets/img/products/matte3.jpg",
      "assets/img/products/matte4.jpg",
      "assets/img/products/matte5.jpg",
      "assets/img/products/matte6.jpg",
      "assets/img/products/matte7.jpg",
      "assets/img/products/matte8.jpg",
      "assets/img/products/matte9.jpg",
      "assets/img/products/matte10.jpg",
      "assets/img/products/matte11.jpg",
      "assets/img/products/matte12.jpg"
    ],
    title: "Premium Matte Porcelain Tiles",
    rating: 4.8,
    desc: "Durable porcelain matte tiles designed for residential and commercial projects. Contact for additional designs.",
    meta: { label: "Size", value: "60x60 (4 pieces per box)" },
    shipping: "Not included in price",
    price: "₵180"
  },
  {
    category: "construction",
    badge: "Construction",
    images: [
      "assets/img/products/terrazo tiles.jpg",
      "assets/img/products/tt1.jpg",
      "assets/img/products/tt2.jpg",
      "assets/img/products/tt3.jpg",
      "assets/img/products/tt4.jpg",
      "assets/img/products/tt5.jpg",
      "assets/img/products/tt6.jpg",
      "assets/img/products/tt7.jpg",
      "assets/img/products/tt8.jpg",
      "assets/img/products/tt9.jpg"
    ],
    title: "Terrazzo Textured Tiles",
    rating: 4.8,
    desc: "Terrazzo textured tiles designed for residential and commercial projects. Contact for additional designs.",
    meta: { label: "Size", value: "60x60 (4 pieces per box)" },
    shipping: "Not included in price",
    price: "₵220"
  },

  // ── VEHICLES ───────────────────────────────
  {
    category: "vehicles",
    badge: "Vehicles",
    images: [
      "assets/img/products/12car1.jpg",
      "assets/img/products/12car2.jpg",
      "assets/img/products/12car3.jpg",
      "assets/img/products/12car4.jpg",
      "assets/img/products/12car8.jpg",
      "assets/img/products/12car5.jpg",
      "assets/img/products/12car6.jpg",
      "assets/img/products/12car7.jpg"
    ],
    title: "2021 Geely Star",
    rating: 4.8,
    desc: 'Features a highly efficient 2.0L Turbo engine or the cutting-edge "EM-i" super-hybrid plug-in system, allowing for incredible electric-only range (up to 84 miles) and a combined hybrid range of over 900 km.',
    meta: { label: "Mileage", value: "Unspecified" },
    shipping: "Export documents and shipping fees included to Tema Port",
    price: "₵172,000"
  },
  {
    category: "vehicles",
    badge: "Vehicles",
    images: [
      "assets/img/products/1car1.jpg",
      "assets/img/products/1car2.jpg",
      "assets/img/products/1car3.jpg",
      "assets/img/products/1car4.jpg",
      "assets/img/products/1car5.jpg",
      "assets/img/products/1car6.jpg"
    ],
    title: "2018 Zotye T500",
    rating: 4.0,
    desc: "1.5-Liter Turbocharged 4-cylinder engine, 156 Horsepower and 215 Nm of torque.",
    meta: { label: "Mileage", value: "88,000km" },
    shipping: "Export license and shipping fees included to Tema Port",
    price: "₵96,000"
  },
  {
    category: "vehicles",
    badge: "Vehicles",
    images: [
      "assets/img/products/10car1.jpg",
      "assets/img/products/10car2.jpg",
      "assets/img/products/10car3.jpg",
      "assets/img/products/10car4.jpg",
      "assets/img/products/10car5.jpg",
      "assets/img/products/10car6.jpg"
    ],
    title: "2021 Hyundai IX35",
    rating: 4.7,
    desc: "Features a 2.0L naturally aspirated engine, a spacious cabin, and reliable tech like Android Auto and Apple CarPlay. Automatic Transmission 2-Drive GL Comfort Edition.",
    meta: { label: "Mileage", value: "52,000km" },
    shipping: "Export license and shipping fees included to Tema Port",
    price: "₵165,000"
  },
  {
    category: "vehicles",
    badge: "Vehicles",
    images: [
      "assets/img/products/2car1.jpg",
      "assets/img/products/2car2.jpg",
      "assets/img/products/2car3.jpg",
      "assets/img/products/2car4.jpg",
      "assets/img/products/2car5.jpg"
    ],
    title: "2024 Chery Ruhu Excellence Edition",
    rating: 4.4,
    desc: "1.5L engine, automatic transmission, original paint. Manufactured Feb 2025 — everything is original.",
    meta: { label: "Mileage", value: "21,000km" },
    shipping: "Export license and shipping fees included to Tema Port",
    price: "₵134,000"
  },
  {
    category: "vehicles",
    badge: "Vehicles",
    images: [
      "assets/img/products/3car1.jpg",
      "assets/img/products/3car2.jpg",
      "assets/img/products/3car3.jpg",
      "assets/img/products/3car4.jpg",
      "assets/img/products/3car5.jpg",
      "assets/img/products/3car6.jpg",
      "assets/img/products/3car7.jpg",
      "assets/img/products/3car8.jpg",
      "assets/img/products/3car9.jpg",
      "assets/img/products/3car10.jpg"
    ],
    title: "2021 Jetour X70 Plus",
    rating: 4.8,
    desc: "1.5L engine, red leather seats, modern dash, automatic transmission, original paint.",
    meta: { label: "Mileage", value: "70,000km" },
    shipping: "Export license and shipping fees included to Tema Port",
    price: "₵150,000"
  },
  {
    category: "vehicles",
    badge: "Vehicles",
    images: [
      "assets/img/products/4car1.jpg",
      "assets/img/products/4car2.jpg",
      "assets/img/products/4car3.jpg",
      "assets/img/products/4car4.jpg",
      "assets/img/products/4car5.jpg",
      "assets/img/products/4car6.jpg",
      "assets/img/products/4car7.jpg"
    ],
    title: "2023 Forthing T5 EVO",
    rating: 4.8,
    desc: "Diamond Edition. Powered by a 1.5L Turbocharged 4-cylinder engine generating 177–197 horsepower and 285 Nm of torque.",
    meta: { label: "Mileage", value: "30,000km" },
    shipping: "Export license and shipping fees included to Tema Port",
    price: "₵155,000"
  },
  {
    category: "vehicles",
    badge: "Vehicles",
    images: [
      "assets/img/products/5car1.jpg",
      "assets/img/products/5car2.jpg",
      "assets/img/products/5car3.jpg",
      "assets/img/products/5car4.jpg",
      "assets/img/products/5car5.jpg",
      "assets/img/products/5car6.jpg",
      "assets/img/products/5car7.jpg"
    ],
    title: "2023 Dongfeng Shine Glory Edition",
    rating: 4.8,
    desc: "Features Dongfeng's reliable 1.5L naturally aspirated engine paired with a 6-speed Automatic Dual-Clutch Transmission (6DCT). Keyless Entry, Push-Button Start, and Auto-Hold electronic braking.",
    meta: { label: "Mileage", value: "58,000km" },
    shipping: "Export license and shipping fees included to Tema Port",
    price: "₵129,000"
  },
  {
    category: "vehicles",
    badge: "Vehicles",
    images: [
      "assets/img/products/6car1.jpg",
      "assets/img/products/6car2.jpg",
      "assets/img/products/6car3.jpg",
      "assets/img/products/6car4.jpg"
    ],
    title: "2022 Jetour Dashing",
    rating: 4.8,
    desc: "Compact, futuristic SUV with sharp design and tech-heavy features. Powered by a 1.5L turbocharged engine delivering ~156HP and 230Nm of torque.",
    meta: { label: "Mileage", value: "56,000km" },
    shipping: "Export documents and shipping fees included to Tema Port",
    price: "$18,000"
  },
  {
    category: "vehicles",
    badge: "Vehicles",
    images: [
      "assets/img/products/7car1.jpg",
      "assets/img/products/7car2.jpg",
      "assets/img/products/7car3.jpg",
      "assets/img/products/7car4.jpg",
      "assets/img/products/7car5.jpg"
    ],
    title: "2018 Toyota Corolla",
    rating: 4.8,
    desc: "1.2-Liter 4-Cylinder gas engine (DOHC 16-Valve), Continuously Variable Transmission (CVT).",
    meta: { label: "Mileage", value: "Unspecified" },
    shipping: "Export documents and shipping fees included to Tema Port",
    price: "₵96,000"
  },
  {
    category: "vehicles",
    badge: "Vehicles",
    images: [
      "assets/img/products/8car1.jpg",
      "assets/img/products/8car2.jpg",
      "assets/img/products/8car3.jpg",
      "assets/img/products/8car4.jpg",
      "assets/img/products/8car5.jpg",
      "assets/img/products/8car6.jpg"
    ],
    title: "2024 Jetour T2",
    rating: 4.8,
    desc: "2.0L Turbocharged engine, 252HP and 390Nm of torque. 7-speed Wet DCT or 8-speed automatic. 15.6\" central touchscreen + 10.25\" digital instrument cluster.",
    meta: { label: "Mileage", value: "Unspecified" },
    shipping: "Export documents and shipping fees included to Tema Port",
    price: "₵310,000"
  },
  {
    category: "vehicles",
    badge: "Vehicles",
    images: [
      "assets/img/products/9car1.jpg",
      "assets/img/products/9car2.jpg",
      "assets/img/products/9car3.jpg",
      "assets/img/products/9car4.jpg"
    ],
    title: "2020 Geely Icon",
    rating: 4.8,
    desc: "1.5L Turbo + 48V Electric Motor, 188HP / 300Nm, Full-speed Adaptive Cruise Control (ACC).",
    meta: { label: "Mileage", value: "58,000km" },
    shipping: "Export documents and shipping fees included to Tema Port",
    price: "₵125,000"
  },
  {
    category: "vehicles",
    badge: "Vehicles",
    images: [
      "assets/img/products/11car1.jpg",
      "assets/img/products/11car2.jpg",
      "assets/img/products/11car3.jpg"
    ],
    title: "2021 Tank 300 Wind Forest Iron Cavalry",
    rating: 4.8,
    desc: "A hardcore, factory-modified, rugged off-road variant of the standard GWM Tank 300.",
    meta: { label: "Mileage", value: "Unspecified" },
    shipping: "Export documents and shipping fees included to Tema Port",
    price: "₵404,600"
  },
{
  category: "vehicles",
  badge: "Vehicles",
  images: [
    "assets/img/products/13car1.jpg",
    "assets/img/products/13car2.jpg",
    "assets/img/products/13car3.jpg",
    "assets/img/products/13car4.jpg",
    "assets/img/products/13car5.jpg",
    "assets/img/products/13car6.jpg"
  ],
  title: "Jetour Traveler T2",
  rating: 4.7,
  desc: "Production Date: 2023-9 First Chinese Registration: 2023-11 Colour: Black VIN: 505883",
  meta: { label: "Mileage", value: "33,000km" },
  shipping: "Export License and Shipping Fees Incluced",
  price: "₵295,300"
},

{
  category: "vehicles",
  badge: "Vehicles",
  images: [
    "assets/img/products/14car1.jpg",
    "assets/img/products/14car2.jpg",
    "assets/img/products/14car4.jpg",
    "assets/img/products/14car3.jpg",
    "assets/img/products/14car5.jpg",
    "assets/img/products/14car6.jpg"
  ],
  title: "Jetour Shanhai T2 C-DM",
  rating: 4.5,
  desc: "Production Date: 2024-12 Registrtaion Date: 2025-6 Colour: Gray VIN: 22793",
  meta: { label: "Mileage", value: "17,000km" },
  shipping: "Shipment and export license included",
  price: "₵336,000"
},



];