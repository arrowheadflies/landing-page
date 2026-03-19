import { Package, ShieldCheck, ChevronDown, ChevronUp, Fish, ShoppingCart, FileText, Trash2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { slugify } from '../data/flyRegistry';

interface PackFly {
  name: string;
  qty: number;
  sizes: string;
}

interface Pack {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  whenToUse: string;
  flies: PackFly[];
  rigging: string;
  price: string;
  smallPrice: string;
  badge: string | null;
  relatedHatch: { label: string; path: string } | null;
}

const PACKS: Pack[] = [
  {
    id: 'tailwater-confidence',
    name: 'Tailwater Confidence Pack',
    tagline: 'The essential midge & scud system for cold, technical tailwaters.',
    problem: 'Picky fish in cold, clear, technical tailwater flows — you need small, precise, and proven.',
    whenToUse: 'Year-round on tailwaters like Lake Taneycomo and the White River. Most critical Nov–Mar.',
    flies: [
      { name: 'Zebra Midge', qty: 4, sizes: '#18-22' },
      { name: 'Black Beauty', qty: 4, sizes: '#20-24' },
      { name: 'RS2', qty: 3, sizes: '#18-22' },
      { name: 'Mercury Midge', qty: 3, sizes: '#20-24' },
      { name: 'Grey Scud', qty: 4, sizes: '#14-16' },
      { name: "Griffith's Gnat", qty: 3, sizes: '#18-22' },
    ],
    rigging: 'Standard 9ft 5x leader, small indicator, tie 18-22 inches of 6x tippet to a midge. Swap to dry-dropper for rising fish.',
    price: '$42',
    smallPrice: '$24',
    badge: 'Bestseller',
    relatedHatch: { label: 'Midge Hatch Guide', path: '/hatch-guide/midges' },
  },
  {
    id: 'ozark-freestone',
    name: 'Ozark Freestone Pack',
    tagline: 'Attractor dries and workhorse nymphs for Ozark mountain streams.',
    problem: 'Needing proven searching patterns that reliably move fish in clear, medium-pace freestone rivers.',
    whenToUse: 'Spring through fall on Ozark streams. Peak effectiveness April–September.',
    flies: [
      { name: "Pat's Rubber Legs", qty: 3, sizes: '#8-12' },
      { name: 'Pheasant Tail', qty: 4, sizes: '#14-18' },
      { name: 'Elk Hair Caddis', qty: 3, sizes: '#14-18' },
      { name: "Griffith's Gnat", qty: 2, sizes: '#18-20' },
      { name: "Amy's Ant", qty: 3, sizes: '#12-14' },
      { name: 'Chubby Chernobyl', qty: 2, sizes: '#10-12' },
    ],
    rigging: "Dry-dropper: large Chubby or Caddis up top (4x), Pat's Rubber Legs or PT nymph 24 inches below on 5x.",
    price: '$45',
    smallPrice: '$26',
    badge: null,
    relatedHatch: { label: 'Caddis & Stonefly Guide', path: '/hatch-guide/caddis' },
  },
  {
    id: 'hopper-dropper',
    name: 'Hopper-Dropper Pack',
    tagline: 'High summer terrestrial fishing at its finest.',
    problem: 'August bank fishing when fish ignore conventional nymphs and hatches have slowed.',
    whenToUse: 'July–September on meadow streams and freestone rivers near grassy banks.',
    flies: [
      { name: 'Chubby Chernobyl', qty: 3, sizes: '#8-12' },
      { name: 'Parachute Hopper', qty: 3, sizes: '#8-12' },
      { name: "Amy's Ant", qty: 3, sizes: '#12-14' },
      { name: 'Black Foam Beetle', qty: 3, sizes: '#12-16' },
      { name: 'Frenchie', qty: 3, sizes: '#14-16' },
    ],
    rigging: 'Hopper on 3x within 2ft of the bank. 20-24 inch dropper of Frenchie or bead head below. Slap the fly down.',
    price: '$38',
    smallPrice: '$22',
    badge: 'Top Summer Pick',
    relatedHatch: { label: 'Terrestrials Hatch Guide', path: '/hatch-guide/terrestrials' },
  },
  {
    id: 'big-river-montana',
    name: 'Montana Big River Pack',
    tagline: 'Stoneflies and salmonflies for large western rivers.',
    problem: 'Big water, big fish, and the most explosive dry fly hatches of the year.',
    whenToUse: 'May–August on Gallatin, Madison, and other large western freestone rivers.',
    flies: [
      { name: "Pat's Rubber Legs", qty: 4, sizes: '#4-8' },
      { name: 'Chubby Chernobyl', qty: 3, sizes: '#8-10' },
      { name: 'Sparkle Dun PMD', qty: 3, sizes: '#16-18' },
      { name: 'X-Caddis', qty: 3, sizes: '#14-16' },
      { name: 'San Juan Worm', qty: 3, sizes: '#10-12' },
      { name: 'Zebra Midge', qty: 2, sizes: '#18-20' },
    ],
    rigging: 'Summer: Big foam dry 3ft above a heavy stonefly nymph. Run-off: Deep indicator with worm + midge dropper.',
    price: '$52',
    smallPrice: '$28',
    badge: null,
    relatedHatch: { label: 'Stonefly Hatch Guide', path: '/hatch-guide/stoneflies' },
  },
  {
    id: 'colorado-high-country',
    name: 'Colorado High Country Pack',
    tagline: 'Green Drakes, PMDs and pocket water patterns for Colorado freestone.',
    problem: 'Technical Rocky Mountain hatches demand precise imitations and adaptable searching patterns.',
    whenToUse: 'April–October on the Poudre, Frying Pan, and surrounding Colorado freestone streams.',
    flies: [
      { name: 'Colorado Green Drake', qty: 2, sizes: '#10-12' },
      { name: "Amy's Ant", qty: 3, sizes: '#10-12' },
      { name: 'Frenchie', qty: 3, sizes: '#14-16' },
      { name: 'Rainbow Warrior', qty: 3, sizes: '#18-20' },
      { name: 'Parachute Adams', qty: 3, sizes: '#16-20' },
      { name: 'Black Beauty', qty: 3, sizes: '#20-22' },
    ],
    rigging: 'Summer pocket water: heavy dry-dropper. Winter/spring: deep indicator with Frenchie + Rainbow Warrior.',
    price: '$48',
    smallPrice: '$26',
    badge: null,
    relatedHatch: { label: 'Mayfly Hatch Guide', path: '/hatch-guide/mayflies' },
  },
  {
    id: 'southwest-freestone',
    name: 'Southwest Freestone Pack',
    tagline: 'Canyon trout patterns for Oak Creek and Arizona freestone streams.',
    problem: 'Southwest fisheries need year-round midge patterns and aggressive summer terrestrials.',
    whenToUse: 'Year-round on Oak Creek (AZ) and similar desert canyon streams.',
    flies: [
      { name: 'Parachute Hopper', qty: 3, sizes: '#10-12' },
      { name: 'Elk Hair Caddis', qty: 3, sizes: '#14-16' },
      { name: 'Zebra Midge', qty: 4, sizes: '#18-22' },
      { name: 'BWO Emerger', qty: 3, sizes: '#18-20' },
      { name: "Amy's Ant", qty: 3, sizes: '#10-12' },
    ],
    rigging: 'Dry-dropper year-round. In winter, switch to a delicate 5x-6x indicator rig for midge pupae.',
    price: '$40',
    smallPrice: '$22',
    badge: null,
    relatedHatch: { label: 'Caddis Hatch Guide', path: '/hatch-guide/caddis' },
  },
  {
    id: 'warmwater-urban',
    name: 'Urban Warmwater Pack',
    tagline: 'Bass, bluegill and pond trout from the city.',
    problem: 'Urban stillwater and warmwater species require completely different fly selection than trout streams.',
    whenToUse: 'Year-round for KC area ponds and warmwater fisheries. Stocked trout Dec–Feb, warmwater Mar–Nov.',
    flies: [
      { name: 'Woolly Bugger', qty: 3, sizes: '#8-10' },
      { name: 'Clouser Minnow', qty: 3, sizes: '#4-8' },
      { name: 'Foam Spider / Popper', qty: 3, sizes: '#10-12' },
      { name: 'Damsel Nymph', qty: 3, sizes: '#12-14' },
      { name: 'Squirmy Worm', qty: 3, sizes: '#12' },
    ],
    rigging: 'Streamers: 7.5ft 3x leader stripped aggressively near structure. Topwater: floating line with 9ft 2x leader.',
    price: '$38',
    smallPrice: '$20',
    badge: null,
    relatedHatch: { label: 'Streamers Guide', path: '/hatch-guide/streamers' },
  },
];

const INDIVIDUAL_FLIES = [
  { name: 'Zebra Midge', sizes: '#18-22', type: 'Nymph', price: 2.50 },
  { name: 'RS2', sizes: '#18-22', type: 'Emerger', price: 2.50 },
  { name: "Griffith's Gnat", sizes: '#18-22', type: 'Dry', price: 2.50 },
  { name: "Pat's Rubber Legs", sizes: '#8-12', type: 'Nymph', price: 3.00 },
  { name: 'Elk Hair Caddis', sizes: '#14-18', type: 'Dry', price: 2.50 },
  { name: 'Chubby Chernobyl', sizes: '#8-12', type: 'Dry', price: 3.50 },
  { name: 'Parachute Adams', sizes: '#14-20', type: 'Dry', price: 2.50 },
  { name: 'Woolly Bugger', sizes: '#6-10', type: 'Streamer', price: 3.00 },
  { name: "Amy's Ant", sizes: '#10-14', type: 'Dry', price: 2.50 },
  { name: 'Frenchie', sizes: '#14-18', type: 'Nymph', price: 2.50 },
  { name: 'X-Caddis', sizes: '#14-16', type: 'Dry', price: 2.50 },
  { name: 'San Juan Worm', sizes: '#10-12', type: 'Nymph', price: 2.00 },
];

// ── Order Types ──────────────────────────────────────────────────────────────
interface OrderItem {
  name: string;
  qty: number;
  unitPrice: number;
  sizes?: string;
  packLabel?: string;
}

// ── PDF Generator ─────────────────────────────────────────────────────────────
function generateOrderPDF(items: OrderItem[]) {
  const total = items.reduce((sum, i) => sum + i.qty * i.unitPrice, 0);
  const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const rows = items.map(i => `
    <tr>
      <td>${i.name}${i.sizes ? ` (${i.sizes})` : ''}${i.packLabel ? `<br/><small>${i.packLabel}</small>` : ''}</td>
      <td style="text-align:center">${i.qty}</td>
      <td style="text-align:right">$${i.unitPrice.toFixed(2)}</td>
      <td style="text-align:right">$${(i.qty * i.unitPrice).toFixed(2)}</td>
    </tr>
  `).join('');

  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Arrowhead Flies — Order Form</title>
<style>
  body { font-family: Georgia, serif; max-width: 700px; margin: 40px auto; color: #1a1a1a; }
  h1 { font-size: 2rem; margin-bottom: 0; }
  .sub { color: #555; margin-top: 4px; font-size: 0.9rem; }
  .date { color: #777; font-size: 0.85rem; margin-bottom: 2rem; }
  table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; }
  th { text-align: left; border-bottom: 2px solid #1a1a1a; padding: 6px 8px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; }
  td { padding: 10px 8px; border-bottom: 1px solid #e0e0e0; font-size: 0.95rem; vertical-align: top; }
  td small { color: #777; font-size: 0.8rem; }
  .total-row td { font-weight: bold; font-size: 1.05rem; border-top: 2px solid #1a1a1a; border-bottom: none; }
  .footer { margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid #ccc; font-size: 0.85rem; color: #555; line-height: 1.7; }
  .footer a { color: #1a1a1a; }
  h2 { font-size: 1.1rem; font-weight: normal; color: #444; margin: 2rem 0 0.5rem; }
  @media print { body { margin: 20px; } }
</style>
</head>
<body>
  <h1>Arrowhead Flies</h1>
  <p class="sub">Hand-tied to order. Know What to Throw.</p>
  <p class="date">Order generated: ${date}</p>

  <h2>Order Summary</h2>
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th style="text-align:center">Qty</th>
        <th style="text-align:right">Unit Price</th>
        <th style="text-align:right">Total</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
      <tr class="total-row">
        <td colspan="3">Order Total</td>
        <td style="text-align:right">$${total.toFixed(2)}</td>
      </tr>
    </tbody>
  </table>

  <div class="footer">
    <p><strong>How to place your order:</strong></p>
    <ol>
      <li>Print or save this page as a PDF (File → Print → Save as PDF).</li>
      <li>Email it to <a href="mailto:arrowheadflies@gmail.com">arrowheadflies@gmail.com</a> with the subject line "Fly Order".</li>
      <li>Allow 3-5 business days for hand-tying and shipping.</li>
    </ol>
    <p>Questions? <a href="mailto:arrowheadflies@gmail.com">arrowheadflies@gmail.com</a> | arrowheadflies.com</p>
  </div>
</body>
</html>`;

  const win = window.open('', '_blank');
  if (win) {
    win.document.write(html);
    win.document.close();
    setTimeout(() => win.print(), 400);
  }
}

// ── PackCard ──────────────────────────────────────────────────────────────────
function PackCard({
  pack,
  onAddPack,
}: {
  pack: Pack;
  onAddPack: (item: OrderItem) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [wantMini, setWantMini] = useState(false);

  const packPrice = wantMini ? parseFloat(pack.smallPrice.replace('$', '')) : parseFloat(pack.price.replace('$', ''));
  const packLabel = wantMini ? 'Mini Sampler' : 'Full Pack';

  return (
    <div id={pack.id} className="pack-card">
      <div className="pack-image-placeholder">
        <div className="pack-texture" />
        <Package className="pack-placeholder-icon" size={44} />
        {pack.badge && <span className="pack-badge">{pack.badge}</span>}
      </div>

      <div className="pack-details">
        <div className="pack-top">
          <div>
            <h2 className="pack-name">{pack.name}</h2>
            <p className="pack-tagline">{pack.tagline}</p>
          </div>
          <div className="pack-prices">
            <div className="price-block">
              <span className="price-label">Full Pack</span>
              <span className="price-full">{pack.price}</span>
            </div>
            <div className="price-divider" />
            <div className="price-block">
              <span className="price-label">Mini Sampler</span>
              <span className="price-mini">{pack.smallPrice}</span>
            </div>
          </div>
        </div>

        <div className="pack-section">
          <h3><ShieldCheck size={14} className="inline-icon" /> Problem Solved</h3>
          <p>{pack.problem}</p>
        </div>

        <div className="pack-section">
          <h3>When to Use</h3>
          <p>{pack.whenToUse}</p>
        </div>

        <button className="expand-toggle" onClick={() => setExpanded(e => !e)}>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          {expanded ? 'Hide' : 'See'} What's Included ({pack.flies.length} patterns)
        </button>

        {expanded && (
          <div className="flies-list">
            {pack.flies.map((f, i) => (
              <Link key={i} to={`/fly/${slugify(f.name)}`} className="fly-list-item">
                <span className="fly-list-name">{f.name}</span>
                <span className="fly-list-meta">{f.qty}× {f.sizes}</span>
                <span className="fly-list-arrow">→</span>
              </Link>
            ))}
          </div>
        )}

        <div className="pack-section">
          <h3>How to Rig</h3>
          <p className="rig-text">{pack.rigging}</p>
        </div>

        {pack.relatedHatch && (
          <div className="pack-hatch-link">
            <Fish size={14} className="inline-icon" />
            <Link to={pack.relatedHatch.path} className="hatch-link-text">
              {pack.relatedHatch.label}
            </Link>
          </div>
        )}

        {/* Order controls */}
        <div className="order-control-row">
          <div className="size-toggle">
            <button
              className={`size-opt ${!wantMini ? 'active' : ''}`}
              onClick={() => setWantMini(false)}
            >
              Full — {pack.price}
            </button>
            <button
              className={`size-opt ${wantMini ? 'active' : ''}`}
              onClick={() => setWantMini(true)}
            >
              Mini — {pack.smallPrice}
            </button>
          </div>
          <button
            className="btn-primary add-btn"
            onClick={() => onAddPack({
              name: pack.name,
              qty: 1,
              unitPrice: packPrice,
              packLabel,
            })}
          >
            <ShoppingCart size={14} style={{ display: 'inline', marginRight: '6px' }} />
            Add to Order
          </button>
        </div>

        <p className="order-note">
          Hand-tied to order. Email <a href="mailto:arrowheadflies@gmail.com">arrowheadflies@gmail.com</a> or use the order form below.
        </p>
      </div>
    </div>
  );
}

// ── Individual Fly Row ────────────────────────────────────────────────────────
function IndividualFlyRow({
  fly,
  selected,
  qty,
  onToggle,
  onQty,
}: {
  fly: typeof INDIVIDUAL_FLIES[0];
  selected: boolean;
  qty: number;
  onToggle: () => void;
  onQty: (q: number) => void;
}) {
  return (
    <div className={`ifly-row ${selected ? 'selected' : ''}`}>
      <label className="ifly-checkbox-label">
        <input type="checkbox" checked={selected} onChange={onToggle} className="ifly-checkbox" />
        <Link to={`/fly/${slugify(fly.name)}`} className="ifly-name" onClick={e => selected && e.preventDefault()}>
          {fly.name}
        </Link>
      </label>
      <div className="ifly-right-group">
        <span className="ifly-type-badge">{fly.type}</span>
        <span className="ifly-size">{fly.sizes}</span>
        <span className="ifly-price">${fly.price.toFixed(2)}/fly</span>
        {selected && (
          <div className="ifly-qty-wrap">
            <button onClick={() => onQty(Math.max(1, qty - 1))}>−</button>
            <span>{qty}</span>
            <button onClick={() => onQty(qty + 1)}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function ShopPacks() {
  const location = useLocation();
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [flySelections, setFlySelections] = useState<Record<string, { selected: boolean; qty: number }>>({});

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location.hash]);

  const addPackToOrder = (item: OrderItem) => {
    setOrderItems(prev => {
      const idx = prev.findIndex(i => i.name === item.name && i.packLabel === item.packLabel);
      if (idx >= 0) {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], qty: updated[idx].qty + 1 };
        return updated;
      }
      return [...prev, item];
    });
  };

  const toggleFly = (fly: typeof INDIVIDUAL_FLIES[0]) => {
    const key = fly.name;
    setFlySelections(prev => {
      const cur = prev[key];
      if (cur?.selected) {
        // deselect → remove from order items
        setOrderItems(oi => oi.filter(i => i.name !== key));
        return { ...prev, [key]: { selected: false, qty: 1 } };
      } else {
        setOrderItems(oi => {
          const existing = oi.find(i => i.name === key);
          if (existing) return oi;
          return [...oi, { name: key, qty: cur?.qty || 1, unitPrice: fly.price, sizes: fly.sizes }];
        });
        return { ...prev, [key]: { selected: true, qty: cur?.qty || 1 } };
      }
    });
  };

  const setFlyQty = (fly: typeof INDIVIDUAL_FLIES[0], qty: number) => {
    const key = fly.name;
    setFlySelections(prev => ({ ...prev, [key]: { ...prev[key], qty } }));
    setOrderItems(prev => prev.map(i => i.name === key ? { ...i, qty } : i));
  };

  const removeOrderItem = (idx: number) => {
    const removed = orderItems[idx];
    setOrderItems(prev => prev.filter((_, i) => i !== idx));
    // if it was an individual fly, uncheck it
    setFlySelections(prev => {
      if (prev[removed.name]) return { ...prev, [removed.name]: { ...prev[removed.name], selected: false } };
      return prev;
    });
  };

  const orderTotal = orderItems.reduce((sum, i) => sum + i.qty * i.unitPrice, 0);
  const hasOrder = orderItems.length > 0;

  return (
    <div className="packs-page">
      <div className="container packs-container">
        {/* Header */}
        <header className="page-header">
          <span className="brand-badge">CONVERSION SYSTEM</span>
          <h1 className="brand-headline">CONFIDENCE PACKS</h1>
          <p className="brand-subheadline">
            Stop buying random flies. Every pack is curated for a specific fishery and situation — hand-tied to order.
            Select your pack or individual flies below to build your order form.
          </p>
          <div className="header-ctas">
            <Link to="/quiver" className="btn-primary">Not sure which pack? Use The Quiver</Link>
          </div>
        </header>

        {/* Order Summary */}
        <div className="order-summary-section order-summary-top">
          <div className="order-summary-header">
            <h2>
              <ShoppingCart size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              Your Order
            </h2>
            {hasOrder && <span className="order-total-badge">${orderTotal.toFixed(2)}</span>}
          </div>

          {!hasOrder ? (
            <div className="order-empty">
              <p>No items selected yet. Add a pack below or check individual flies.</p>
            </div>
          ) : (
            <>
              <div className="order-items-list">
                {orderItems.map((item, idx) => (
                  <div key={idx} className="order-item-row">
                    <div className="oi-info">
                      <span className="oi-name">{item.name}</span>
                      {item.packLabel && <span className="oi-pack-label">{item.packLabel}</span>}
                      {item.sizes && <span className="oi-sizes">{item.sizes}</span>}
                    </div>
                    <div className="oi-right">
                      <div className="oi-qty-wrap">
                        <button onClick={() => {
                          if (item.qty <= 1) removeOrderItem(idx);
                          else setOrderItems(prev => prev.map((o, i) => i === idx ? { ...o, qty: o.qty - 1 } : o));
                        }}>−</button>
                        <span>{item.qty}</span>
                        <button onClick={() => setOrderItems(prev => prev.map((o, i) => i === idx ? { ...o, qty: o.qty + 1 } : o))}>+</button>
                      </div>
                      <span className="oi-subtotal">${(item.qty * item.unitPrice).toFixed(2)}</span>
                      <button className="oi-remove" onClick={() => removeOrderItem(idx)}>
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-footer">
                <div className="order-total-line">
                  <span>Estimated Total</span>
                  <strong>${orderTotal.toFixed(2)}</strong>
                </div>
                <p className="order-disclaimer">
                  Flies are hand-tied to order. Ship cost calculated at fulfillment. Email order is free — you'll hear back with a final invoice before anything ships.
                </p>
                <button
                  className="btn-primary generate-btn"
                  onClick={() => generateOrderPDF(orderItems)}
                >
                  <FileText size={16} style={{ display: 'inline', marginRight: '8px' }} />
                  Generate Order PDF
                </button>
                <p className="pdf-help">
                  A print dialog will open. Choose "Save as PDF" then email it to <a href="mailto:arrowheadflies@gmail.com">arrowheadflies@gmail.com</a>.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Packs */}
        <div className="packs-grid">
          {PACKS.map(pack => (
            <PackCard key={pack.id} pack={pack} onAddPack={addPackToOrder} />
          ))}
        </div>

        {/* Individual flies */}
        <div className="individual-section">
          <div className="individual-header">
            <h2>Individual Flies</h2>
            <p>Select what you need and set the quantity. Check any fly to add it to your order, then generate the PDF below.</p>
          </div>
          <div className="ifly-table">
            {INDIVIDUAL_FLIES.map((fly) => {
              const sel = flySelections[fly.name] || { selected: false, qty: 1 };
              return (
                <IndividualFlyRow
                  key={fly.name}
                  fly={fly}
                  selected={sel.selected}
                  qty={sel.qty}
                  onToggle={() => toggleFly(fly)}
                  onQty={q => setFlyQty(fly, q)}
                />
              );
            })}
          </div>
        </div>


      </div>

      <style>{`
        .packs-page {
          padding: 6rem 0 8rem;
          min-height: calc(100vh - 80px);
        }

        .page-header {
          padding-top: 4rem;
          margin-bottom: 4rem;
          max-width: 720px;
        }

        .brand-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--accent-green);
          margin-bottom: 1.25rem;
          background: rgba(74, 222, 128, 0.08);
          padding: 0.35rem 0.8rem;
          border-radius: 4px;
        }

        .brand-headline {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          margin-bottom: 1.5rem;
          line-height: 0.95;
          text-transform: uppercase;
        }

        .brand-subheadline {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .header-ctas { display: flex; gap: 1rem; flex-wrap: wrap; }

        /* Pack grid */
        .packs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 6rem;
        }

        @media (min-width: 900px) {
          .packs-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .pack-card {
          background: var(--bg-panel);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s, border-color 0.2s;
        }

        .pack-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.15);
        }

        .pack-image-placeholder {
          aspect-ratio: 16/7;
          background: linear-gradient(135deg, #0f1214 0%, #1a1c1e 100%);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid var(--border-color);
        }

        .pack-texture {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.04) 0%, transparent 60%);
        }

        .pack-placeholder-icon { color: rgba(255,255,255,0.07); z-index: 1; }

        .pack-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--color-deep-red);
          color: white;
          padding: 0.3rem 0.75rem;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          border-radius: 4px;
          z-index: 2;
        }

        .pack-details {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 1.25rem;
        }

        .pack-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .pack-name { font-size: 1.5rem; font-weight: 700; margin: 0 0 0.35rem; line-height: 1.2; }
        .pack-tagline { color: var(--text-secondary); font-size: 0.9rem; line-height: 1.4; margin: 0; max-width: 300px; }

        .pack-prices { display: flex; align-items: center; gap: 1rem; flex-shrink: 0; }
        .price-block { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }
        .price-label { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary); }
        .price-full { font-size: 1.4rem; font-weight: 700; color: var(--accent-green); }
        .price-mini { font-size: 1.2rem; font-weight: 700; color: var(--text-secondary); }
        .price-divider { width: 1px; height: 36px; background: var(--border-color); }

        .pack-section h3 {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-secondary);
          margin-bottom: 0.4rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .pack-section p { color: var(--text-primary); font-size: 0.92rem; line-height: 1.6; margin: 0; }
        .inline-icon { display: inline; vertical-align: middle; color: var(--accent-green); }

        .expand-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 0.85rem;
          padding: 0.6rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s;
        }

        .expand-toggle:hover { color: var(--text-primary); border-color: rgba(255,255,255,0.2); }

        .flies-list { display: flex; flex-direction: column; gap: 0.25rem; }

        .fly-list-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.6rem 0.75rem;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 5px;
          text-decoration: none;
          transition: all 0.15s;
        }

        .fly-list-item:hover { background: rgba(255,255,255,0.05); }
        .fly-list-name { color: var(--text-primary); font-size: 0.88rem; font-weight: 500; }
        .fly-list-meta { color: var(--text-secondary); font-size: 0.78rem; }
        .fly-list-arrow { color: var(--accent-green); font-size: 0.8rem; }

        .rig-text {
          background: rgba(74, 222, 128, 0.04);
          border-left: 3px solid rgba(74, 222, 128, 0.3);
          padding: 0.75rem 1rem;
          border-radius: 0 4px 4px 0;
          font-size: 0.88rem !important;
          line-height: 1.6 !important;
        }

        .pack-hatch-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
        }

        .hatch-link-text {
          color: var(--accent-green);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.82rem;
          letter-spacing: 0.03em;
        }

        .hatch-link-text:hover { text-decoration: underline; }

        /* Order control row */
        .order-control-row {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 1.25rem;
        }

        .size-toggle {
          display: flex;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          overflow: hidden;
        }

        .size-opt {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-family: inherit;
          font-size: 0.82rem;
          padding: 0.55rem 1rem;
          cursor: pointer;
          transition: all 0.15s;
          white-space: nowrap;
        }

        .size-opt.active {
          background: rgba(255,255,255,0.07);
          color: var(--text-primary);
          font-weight: 600;
        }

        .add-btn { flex: 1; }

        .order-note {
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin: 0;
          opacity: 0.7;
          line-height: 1.5;
        }

        .order-note a { color: var(--accent-green); text-decoration: none; }

        /* Individual flies table */
        .individual-section {
          border-top: 1px solid var(--border-color);
          padding-top: 4rem;
          margin-bottom: 4rem;
        }

        .individual-header { margin-bottom: 2rem; max-width: 600px; }
        .individual-header h2 { font-size: 2rem; font-weight: 700; margin-bottom: 0.6rem; }
        .individual-header p { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin: 0; }

        .ifly-table {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .ifly-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.875rem 1rem;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 6px;
          transition: all 0.15s;
          flex-wrap: wrap;
        }

        .ifly-row.selected {
          background: rgba(74, 222, 128, 0.05);
          border-color: rgba(74, 222, 128, 0.2);
        }

        .ifly-checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          flex: 1;
          min-width: 0;
        }

        .ifly-checkbox {
          width: 16px;
          height: 16px;
          cursor: pointer;
          accent-color: var(--accent-green);
          flex-shrink: 0;
        }

        .ifly-name {
          color: var(--text-primary);
          font-size: 0.92rem;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .ifly-name:hover { color: var(--accent-green); }

        .ifly-right-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          flex-shrink: 0;
        }

        .ifly-type-badge {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          background: rgba(255,255,255,0.06);
          padding: 0.2rem 0.5rem;
          border-radius: 3px;
        }

        .ifly-size { color: var(--text-secondary); font-size: 0.8rem; }
        .ifly-price { color: var(--accent-green); font-size: 0.82rem; font-weight: 700; white-space: nowrap; }

        .ifly-qty-wrap {
          display: flex;
          align-items: center;
          gap: 0;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 5px;
          overflow: hidden;
        }

        .ifly-qty-wrap button {
          background: rgba(255,255,255,0.04);
          border: none;
          color: var(--text-primary);
          width: 28px;
          height: 28px;
          cursor: pointer;
          font-size: 1rem;
          font-family: inherit;
          transition: background 0.15s;
        }

        .ifly-qty-wrap button:hover { background: rgba(255,255,255,0.1); }

        .ifly-qty-wrap span {
          width: 28px;
          text-align: center;
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* Order Summary */
        .order-summary-section {
          background: rgba(255,255,255,0.01);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 2.5rem;
          margin-bottom: 5rem;
        }

        .order-summary-section.top-order-summary {
          margin-bottom: 5rem;
        }

        .order-summary-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .order-summary-header h2 { font-size: 1.75rem; font-weight: 700; margin: 0; }
        .order-total-badge {
          background: var(--accent-green);
          color: #000;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 0.3rem 0.75rem;
          border-radius: 20px;
        }

        .order-empty {
          background: rgba(255,255,255,0.02);
          border: 1px dashed rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 3rem;
          text-align: center;
          color: var(--text-secondary);
        }

        .order-items-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .order-item-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 7px;
          flex-wrap: wrap;
        }

        .oi-info { display: flex; flex-direction: column; gap: 0.25rem; }
        .oi-name { color: var(--text-primary); font-weight: 600; font-size: 0.95rem; }
        .oi-pack-label, .oi-sizes { color: var(--text-secondary); font-size: 0.78rem; }

        .oi-right { display: flex; align-items: center; gap: 1rem; flex-shrink: 0; }

        .oi-qty-wrap {
          display: flex;
          align-items: center;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 5px;
          overflow: hidden;
        }

        .oi-qty-wrap button {
          background: rgba(255,255,255,0.04);
          border: none;
          color: var(--text-primary);
          width: 30px;
          height: 30px;
          cursor: pointer;
          font-size: 1.1rem;
          font-family: inherit;
          transition: background 0.15s;
        }

        .oi-qty-wrap button:hover { background: rgba(255,255,255,0.1); }

        .oi-qty-wrap span {
          width: 32px;
          text-align: center;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .oi-subtotal { font-weight: 700; color: var(--accent-green); font-size: 1rem; }

        .oi-remove {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 4px;
          opacity: 0.5;
          transition: opacity 0.15s;
        }

        .oi-remove:hover { opacity: 1; color: #f87171; }

        .order-footer {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          padding: 2rem;
        }

        .order-total-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .order-total-line strong { color: var(--accent-green); font-size: 1.4rem; }

        .order-disclaimer {
          color: var(--text-secondary);
          font-size: 0.85rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .generate-btn { width: 100%; justify-content: center; font-size: 1rem; padding: 0.875rem; margin-bottom: 0.75rem; }

        .pdf-help {
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.82rem;
          line-height: 1.5;
          margin: 0;
        }

        .pdf-help a { color: var(--accent-green); text-decoration: none; }
      `}</style>
    </div>
  );
}
