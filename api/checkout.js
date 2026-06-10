const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { items } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      res.status(400).json({ error: 'Missing or invalid items array' });
      return;
    }

    // Format line items for Stripe
    const lineItems = items.map((item) => {
      if (!item.price || !item.quantity) {
        throw new Error('Each item must have a price ID and quantity');
      }
      return {
        price: item.price,
        quantity: parseInt(item.quantity, 10),
      };
    });

    const origin = req.headers.origin || 'https://arrowheadflies.com';

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${origin}/#/shop?success=true`,
      cancel_url: `${origin}/#/shop?canceled=true`,
      // Collect shipping address if needed (highly recommended for physical goods!)
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
      billing_address_collection: 'required',
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe Checkout Error:', err.message);
    res.status(500).json({ error: err.message });
  }
};
