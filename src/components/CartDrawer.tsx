import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import productsData from '../data/products.json';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const subtotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  const handleCheckout = async () => {
    setIsCartOpen(false);

    // Map items to include their stripePriceId from products.json if it is missing from cart state,
    // then filter out items that don't have a valid stripePriceId (e.g. empty or placeholder)
    const validItems = cart
      .map((item) => {
        const product = productsData.find((p) => p.id === item.id);
        const priceId = item.stripePriceId || (product && (product as any).stripePriceId);
        return {
          ...item,
          stripePriceId: priceId,
        };
      })
      .filter(
        (item) =>
          item.stripePriceId &&
          item.stripePriceId.startsWith('price_') &&
          !item.stripePriceId.includes('YOUR_')
      );

    // If we have valid Stripe Price IDs, try to use the serverless API
    if (validItems.length > 0) {
      try {
        const response = await fetch('/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            items: validItems.map((item) => ({
              price: item.stripePriceId,
              quantity: item.quantity,
            })),
          }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.url) {
            window.location.href = data.url;
            return;
          }
        }
      } catch (err) {
        console.error('Failed to create serverless checkout session:', err);
      }
    }

    // Fallback: If the API endpoint is unavailable (e.g., in local development)
    // or if Stripe Price IDs are not configured, use the direct Payment Link redirect.
    if (cart.length > 0) {
      const item = cart[0];
      try {
        const url = new URL(item.paymentLink);
        url.searchParams.set('prefilled_quantity', item.quantity.toString());
        window.location.href = url.toString();
      } catch (e) {
        window.location.href = item.paymentLink;
      }
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[2000] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-[380px] bg-charcoal border-l border-border z-[2001] transition-transform duration-300 ease-out flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag size={18} className="text-accent" />
            <h2 className="text-cream font-semibold text-sm">Your Cart</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-mid-gray hover:text-cream transition-colors rounded"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Contents */}
        <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-14 h-14 bg-surface rounded-full flex items-center justify-center mb-4 text-mid-gray/30">
                <ShoppingBag size={28} />
              </div>
              <p className="text-cream font-medium mb-1">Your cart is empty</p>
              <p className="text-mid-gray text-sm mb-6">Add some flies to get started.</p>
              <button
                onClick={() => { setIsCartOpen(false); navigate('/shop'); }}
                className="btn btn-secondary text-sm"
              >
                Browse Shop
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 py-3 border-b border-border last:border-0">
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-cream text-sm font-medium truncate pr-3">{item.name}</h3>
                      <span className="text-cream text-sm font-mono">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-0 bg-surface rounded border border-border">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1.5 text-mid-gray hover:text-cream transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-xs font-mono text-cream">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1.5 text-mid-gray hover:text-cream transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-mid-gray hover:text-accent transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-6 py-5 border-t border-border bg-surface/50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-mid-gray text-sm font-medium">Subtotal</span>
              <span className="text-cream text-lg font-mono font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="btn btn-primary btn-lg w-full"
            >
              Checkout
            </button>
            <p className="text-center text-xs text-mid-gray/50 mt-3">
              Secure payments via Stripe
            </p>
          </div>
        )}
      </div>
    </>
  );
}
