/**
 * Global Configuration for Arrowhead Flies
 */
export const CONFIG = {
  // Your Master Stripe Publishable Key (Live)
  STRIPE_PUBLISHABLE_KEY: 'pk_live_51TCkM0IxcbTZggeJRuqzIAYfOb63d9JfTrftN2DgfWXUkOCdCJqcmMaT7CjfbukMpLpdqovgiVQb8L97oJUIsJ0E00j1ZQbUjF', 

  // Store Configuration
  STORE_TITLE: 'The Quiver Shop',
  STORE_SUBTITLE: 'Hand-tied patterns. technical precision. No bulk filler.',

  // Master Fly Registry (All 50+ flies)
  MASTER_FLIES_BUY_BUTTON_ID: 'buy_btn_1TCtpjIxcbTZggeJlmS1v3hR',

  // Premium Fly Packs
  // These are your high-end, curated collections
  PACKS: [
    {
      id: 'tailwater-confidence',
      name: 'Tailwater Confidence Pack (12-Pack)',
      description: 'The ultimate technical selection for finicky fish below the dam.',
      buyButtonId: 'buy_btn_1TCuDKIxcbTZggeJHh3qQffY', 
      featured: true
    },
    {
      id: 'ozark-freestone',
      name: 'Ozark Freestone Pack (12-Pack)',
      description: 'Generalist patterns that work from Missouri to Montana.',
      buyButtonId: 'buy_btn_1TCuF2IxcbTZggeJzHp7rwHu',
      featured: false
    },
    {
      id: 'big-river',
      name: 'Montana Big River Pack (12-Pack)',
      description: 'Big bugs for big water. Weighted for deep currents.',
      buyButtonId: 'buy_btn_1TCuHfIxcbTZggeJdO8VDbr2',
      featured: false
    }
  ],

  // Contact Info
  CONTACT_EMAIL: 'arrowheadflies@gmail.com',
  INSTAGRAM_URL: 'https://instagram.com/arrowheadflies',
};
