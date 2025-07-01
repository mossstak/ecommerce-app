import postgres from 'postgres';
import { products } from '@/lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: { rejectUnauthorized: false } });

async function seedProducts() {
  console.log('Seeding products...');

  for (const product of products) {
    const {
      productName,
      productType,
      roastLevel,
      description,
      imgUrl,
      farmName,
      farmRegion,
      farmCountry,
      farmAltitude,
      producer,
      varietal,
      harvestSeason,
      farmingPractice,
      farmStory,
      processingMethod,
      roastDate,
      roastProfile,
      tastingNotes,
      brewingRecommendation,
      weight,
      price,
      stockQuantity
    } = product;

    const now = new Date().toISOString();
    
    await sql`INSERT INTO products (
        "productName", "productType", "roastLevel", "description", "imgUrl", 
        "farmName", "farmRegion", "farmCountry", "farmAltitude", "producer", 
        "varietal", "harvestSeason", "farmingPractice", "farmStory", 
        "processingMethod", "roastDate", "roastProfile", "tastingNotes", 
        "brewingRecommendation", "weight", "price", "stockQuantity",
        "createdAt", "updatedAt"
      ) VALUES (
        ${productName}, ${productType}, ${roastLevel}, ${description}, ${imgUrl}, 
        ${farmName}, ${farmRegion}, ${farmCountry}, ${farmAltitude}, ${producer}, 
        ${varietal}, ${harvestSeason}, ${farmingPractice}, ${farmStory}, 
        ${processingMethod}, ${roastDate}, ${roastProfile}, 
        ${tastingNotes}, ${brewingRecommendation}, 
        ${weight}, ${price}, ${stockQuantity},
        ${now}, ${now}
      )`;
  }

  console.log('Products seeded successfully.');
}

{/* async function clearProducts() {
  console.log('Clearing products...');
    await sql`DELETE FROM products`;
    console.log('Products cleared successfully.');
} */ }

export async function GET() {
    try {
        await seedProducts();
        // await clearProducts();
        return new Response('Products seeded successfully', { status: 200 });
    } catch (error) {
        console.error('Error seeding products:', error);
        return new Response('Failed to seed products', { status: 500 });
    }
}