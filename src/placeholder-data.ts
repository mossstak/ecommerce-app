// Sample data for coffee ecommerce app
export const products = [
  {
    id: 1,
    productName: "Ethiopian Yirgacheffe",
    productType: "Single Origin",
    roastLevel: "Light",
    description: "Bright and floral with notes of citrus and tea-like body. A classic Ethiopian coffee with wine-like acidity.",
    imgUrl: "/coffee-1.jpg",
    farm: {
      name: "Kochere Washing Station",
      region: "Yirgacheffe",
      country: "Ethiopia",
      altitude: "1,800-2,000m",
      producer: "Local Smallholders",
      varietal: "Heirloom Ethiopian",
      harvestSeason: "October - December",
      farmingPractice: ["Organic", "Shade Grown"],
      story: "Grown by smallholder farmers in the birthplace of coffee, this lot represents generations of coffee cultivation expertise."
    },
    processingMethod: "Washed",
    roastDate: "2024-01-15",
    roastProfile: "Light City",
    tastingNotes: ["Lemon", "Floral", "Black Tea"],
    brewingRecommendation: ["Pour Over", "V60", "Chemex", "French Press"],
    weight: [250, 500, 1000],
    price: [18.99, 34.99, 64.99],
    stockQuantity: 50,
  },
  {
    id: 2,
    productName: "Colombian Huila",
    productType: "Single Origin",
    roastLevel: "Medium",
    description: "Well-balanced with chocolate and caramel sweetness. A versatile coffee perfect for any brewing method.",
    imgUrl: "/coffee-2.jpg",
    farm: {
      name: "Finca El Paraiso",
      region: "Huila",
      country: "Colombia",
      altitude: "1,600-1,800m",
      producer: "Diego Bermudez",
      varietal: "Caturra, Castillo",
      harvestSeason: "March - June",
      farmingPractice: ["Rainforest Alliance", "Sustainable"],
      story: "Family-owned farm focusing on innovative processing methods and sustainable farming practices."
    },
    processingMethod: "Honey",
    roastDate: "2024-01-14",
    roastProfile: "Full City",
    tastingNotes: ["Chocolate", "Caramel", "Orange"],
    brewingRecommendation: ["Espresso", "Drip", "French Press", "Moka Pot"],
    weight: [250, 500, 1000],
    price: [16.99, 31.99, 59.99],
    stockQuantity: 75,
  },
  {
    id: 3,
    productName: "Guatemala Antigua",
    productType: "Single Origin",
    roastLevel: "Medium-Dark",
    description: "Full-bodied with smoky undertones and spicy complexity. Grown in volcanic soil for unique mineral notes.",
    imgUrl: "/coffee-3.jpg",
    farm: {
      name: "Finca San Sebastian",
      region: "Antigua",
      country: "Guatemala",
      altitude: "1,500-1,700m",
      producer: "Familia Zelaya",
      varietal: "Bourbon, Typica",
      harvestSeason: "December - March",
      farmingPractice: ["Organic", "Bird Friendly"],
      story: "Volcanic soil and traditional processing methods create this distinctive Guatemalan coffee with generations of expertise."
    },
    processingMethod: "Washed",
    roastDate: "2024-01-13",
    roastProfile: "Vienna",
    tastingNotes: ["Dark Chocolate", "Spice", "Smoke"],
    brewingRecommendation: ["Espresso", "French Press", "Cold Brew", "Turkish"],
    weight: [250, 500, 1000],
    price: [19.99, 37.99, 69.99],
    stockQuantity: 30,
  }
];

// You might also need users data if following the Next.js tutorial
export const users = [
  {
    id: '1',
    name: 'Coffee Admin',
    email: 'admin@coffeeshop.com',
    password: 'password123',
  },
];

// Orders data
export const orders = [
  {
    id: '1',
    customer_id: '1',
    amount: 1899,
    status: 'completed',
    date: '2024-01-15',
  },
];
