/**
 * Stripe Catalog Population Script
 * Run this with: node scripts/populate-stripe.js
 * 
 * Before running:
 * 1. npm install stripe
 * 2. Set your STRIPE_SECRET_KEY as an environment variable or edit it below
 */

// const stripe = require('stripe')('sk_test_..._your_key_here');
// If you're running this as a one-off, put your key here temporarily:
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || 'sk_test_...';
const stripe = require('stripe')(STRIPE_SECRET_KEY);

const PACKS = [
  { id: 'tailwater-confidence', name: 'Tailwater Confidence Pack', price: 42, smallPrice: 24 },
  { id: 'ozark-freestone', name: 'Ozark Freestone Pack', price: 45, smallPrice: 26 },
  { id: 'hopper-dropper', name: 'Hopper-Dropper Pack', price: 38, smallPrice: 22 },
  { id: 'big-river-montana', name: 'Montana Big River Pack', price: 52, smallPrice: 28 },
  { id: 'colorado-high-country', name: 'Colorado High Country Pack', price: 48, smallPrice: 26 },
  { id: 'southwest-freestone', name: 'Southwest Freestone Pack', price: 40, smallPrice: 22 },
  { id: 'warmwater-urban', name: 'Urban Warmwater Pack', price: 38, smallPrice: 20 },
];

const INDIVIDUAL_FLIES = [
  { name: 'Zebra Midge', price: 2.50 },
  { name: 'RS2', price: 2.50 },
  { name: "Griffith's Gnat", price: 2.50 },
  { name: "Pat's Rubber Legs", price: 3.00 },
  { name: 'Elk Hair Caddis', price: 2.50 },
  { name: 'Chubby Chernobyl', price: 3.50 },
  { name: 'Parachute Adams', price: 2.50 },
  { name: 'Woolly Bugger', price: 3.00 },
  { name: "Amy's Ant", price: 2.50 },
  { name: 'Frenchie', price: 2.50 },
  { name: 'X-Caddis', price: 2.50 },
  { name: 'San Juan Worm', price: 2.00 },
];

async function createCatalog() {
  console.log('🚀 Starting Stripe Catalog Population...');
  
  const mapping = {
    packs: {},
    flies: {}
  };

  for (const pack of PACKS) {
    console.log(`\n📦 Creating Pack: ${pack.name}...`);
    
    // Full Pack Product
    const fullProd = await stripe.products.create({
      name: `AF - ${pack.name} (Full)`,
      description: 'Hand-tied confidence pack by Arrowhead Flies',
    });
    const fullPrice = await stripe.prices.create({
      unit_amount: Math.round(pack.price * 100),
      currency: 'usd',
      product: fullProd.id,
    });

    // Mini Sampler Product
    const miniProd = await stripe.products.create({
      name: `AF - ${pack.name} (Mini Sampler)`,
      description: 'Mini hand-tied sampler for technical waters.',
    });
    const miniPrice = await stripe.prices.create({
      unit_amount: Math.round(pack.smallPrice * 100),
      currency: 'usd',
      product: miniProd.id,
    });

    mapping.packs[pack.id] = {
      full: fullPrice.id,
      mini: miniPrice.id
    };
  }

  for (const fly of INDIVIDUAL_FLIES) {
    console.log(`\n🍂 Creating Fly: ${fly.name}...`);
    const prod = await stripe.products.create({
      name: `AF - Fly: ${fly.name}`,
    });
    const price = await stripe.prices.create({
      unit_amount: Math.round(fly.price * 100),
      currency: 'usd',
      product: prod.id,
    });

    mapping.flies[fly.name.toLowerCase().replace(/ /g, '_')] = price.id;
  }

  console.log('\n\n✅ DONE!');
  console.log('--------------------------------------------------');
  console.log('Paste the following mapping into your code:');
  console.log(JSON.stringify(mapping, null, 2));
}

createCatalog().catch(err => {
  console.error('❌ FAILED:', err.message);
  process.exit(1);
});
