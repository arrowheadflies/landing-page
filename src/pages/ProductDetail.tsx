import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';

import { ArrowLeft, ShieldCheck, Truck, Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();

  const product = useMemo(() => productsData.find(p => p.id === productId), [productId]);
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      document.title = `${product.name} — Arrowhead Flies`;
      setSelectedImage(product.image);
    }
  }, [productId, product]);


  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-charcoal text-cream px-6">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/shop" className="btn btn-secondary">
          <ArrowLeft size={16} /> Back to Shop
        </Link>
      </div>
    );
  }

  const otherProducts = productsData.filter(p => p.id !== product.id);

  return (
    <div className="bg-charcoal min-h-screen">
      <div className="container-default px-6 pt-24 pb-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-mid-gray mb-8" aria-label="Breadcrumb">
          <Link to="/shop" className="hover:text-cream transition-colors">Shop</Link>
          <span className="text-border">/</span>
          <span className="text-cream">{product.name}</span>
        </nav>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-elevated rounded-xl overflow-hidden border border-border">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = 'none';
                }}
              />
            </div>
            
            {(product as any).images && (product as any).images.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {(product as any).images.map((img: string, i: number) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                      selectedImage === img ? 'border-accent scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="lg:sticky lg:top-24 space-y-8">
            <div>
              {product.badge && (
                <span className="badge bg-accent/10 text-accent border border-accent/20 mb-3">
                  {product.badge}
                </span>
              )}
              <h1 className="text-3xl sm:text-4xl font-bold text-cream tracking-tight mb-3">
                {product.name}
              </h1>
              <p className="text-mid-gray text-base leading-relaxed mb-4">{product.description}</p>
              <p className="text-accent text-3xl font-bold">${product.price}</p>
            </div>

            {/* Buy Button via Cart */}
            <button
              onClick={() => {
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  paymentLink: product.stripeBuyButtonId || '',
                  stripePriceId: product.stripePriceId || ''
                });
              }}
              className="btn btn-primary btn-lg w-full flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} />
              Add to Cart — ${product.price}
            </button>

            {/* Details */}
            <div className="space-y-4 pt-4 border-t border-border">
              <h3 className="text-cream font-semibold text-sm uppercase tracking-wider">Details</h3>
              <p className="text-mid-gray text-sm leading-relaxed">{product.details}</p>
            </div>

            {/* Contents (for fly products) */}
            {product.flies && product.flies.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-border">
                <h3 className="text-cream font-semibold text-sm uppercase tracking-wider">
                  What's Inside — {product.count}
                </h3>
                <div className="bg-surface rounded-lg border border-border overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left px-4 py-3 text-xs font-semibold text-mid-gray uppercase tracking-wider">Pattern</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-mid-gray uppercase tracking-wider">Size</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-mid-gray uppercase tracking-wider">Type</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {product.flies.map((fly, i) => (
                        <tr key={i} className="hover:bg-elevated/50 transition-colors">
                          <td className="px-4 py-3 text-cream font-medium">{fly.name}</td>
                          <td className="px-4 py-3 text-mid-gray font-mono text-xs">#{fly.size}</td>
                          <td className="px-4 py-3 text-mid-gray">{fly.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Trust signals */}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              {[
                { icon: <Star size={14} />, text: 'Hand-tied with premium materials' },
                { icon: <ShieldCheck size={14} />, text: 'Secure checkout via Stripe' },
                { icon: <Truck size={14} />, text: 'Ships from the USA' },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-3 text-mid-gray text-sm">
                  <span className="text-sage">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Products */}
        {otherProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-border">
            <h3 className="text-xl font-bold text-cream mb-8 text-center">You might also like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {otherProducts.map(p => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="card group overflow-hidden"
                >
                  <div className="aspect-[4/3] bg-elevated overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start gap-3">
                      <h4 className="text-cream font-semibold group-hover:text-warm-white transition-colors">{p.name}</h4>
                      <span className="text-accent font-bold">${p.price}</span>
                    </div>
                    <p className="text-mid-gray text-sm mt-1">{p.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
