import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bug, MapPin } from 'lucide-react';
import { slugify } from '../data/flyRegistry';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Get current 3-letter abbreviated month to default the selector
const currentMonthAbbr = MONTHS[new Date().getMonth()];

const LOCATION_DATA = {
  'taneycomo': {
    name: 'Lake Taneycomo (MO)',
    type: 'Tailwater',
    packLabel: 'Tailwater Confidence Pack',
    packId: 'tailwater-confidence',
    getHatch: (month: string) => {
      if (['Jan', 'Feb', 'Dec'].includes(month)) return 'Midges, Scuds, Winter Baetis';
      if (['Mar', 'Apr', 'May'].includes(month)) return 'Heavy Midges, Blue Winged Olives, Shad (late spring)';
      if (['Jun', 'Jul', 'Aug'].includes(month)) return 'Sulphurs, Terrestrials, Scuds';
      return 'Fall Baetis, Midges, Crane Flies';
    },
    getFlies: (month: string) => {
      if (['Jan', 'Feb', 'Dec'].includes(month)) return [
        { name: 'Zebra Midge', size: '#18-22', type: 'Nymph', desc: 'The ultimate winter tailwater confidence fly.' },
        { name: 'Grey Scud', size: '#14-16', type: 'Nymph', desc: 'Fish near the bottom in generation flows.' },
        { name: 'RS2', size: '#20-22', type: 'Emerger', desc: 'Perfect for finicky winter risers.' },
      ];
      return [
        { name: 'Ruby Midge', size: '#18-20', type: 'Nymph', desc: 'Stands out in slightly deeper water.' },
        { name: 'Crackback Scud', size: '#14-18', type: 'Nymph', desc: 'Deadly during high water generation.' },
        { name: 'Parachute Adams', size: '#16-20', type: 'Dry', desc: 'Covers most sporadic dry fly action.' },
      ];
    },
    getRig: () => 'Standard 9ft 5x leader with an indicator. Tie 18-24 inches of 6x tippet off the bend to your midge.'
  },
  'ozarks': {
    name: 'Missouri Ozarks (Freestone)',
    type: 'Freestone',
    packLabel: 'Ozark Freestone Pack',
    packId: 'ozark-freestone',
    getHatch: (month: string) => {
      if (['Jan', 'Feb', 'Mar'].includes(month)) return 'Winter Stoneflies, Blue Winged Olives';
      if (['Apr', 'May'].includes(month)) return 'Caddis, March Browns, Sulphurs';
      if (['Jun', 'Jul', 'Aug'].includes(month)) return 'Terrestrials (Hoppers, Beetles), Hexagenia';
      return 'October Caddis, Isonychia, BWO';
    },
    getFlies: (month: string) => {
      if (['Jun', 'Jul', 'Aug'].includes(month)) return [
        { name: 'Chubby Chernobyl', size: '#10-14', type: 'Dry', desc: 'Big meal that floats all day. Great indicator bug.' },
        { name: 'Copper John', size: '#14-18', type: 'Nymph', desc: 'Gets down fast and catches everything.' },
        { name: 'Elk Hair Caddis', size: '#14-18', type: 'Dry', desc: 'Skitter across the surface at dusk.' },
      ];
      return [
        { name: "Pat's Rubber Legs", size: '#8-12', type: 'Nymph', desc: 'Imitates large stoneflies common in the Ozarks.' },
        { name: 'Pheasant Tail', size: '#14-18', type: 'Nymph', desc: 'Classic profile for BWO and general mayfly nymphs.' },
        { name: "Griffith's Gnat", size: '#18-20', type: 'Dry', desc: 'When fish are sipping tiny bugs in the eddies.' },
      ];
    },
    getRig: () => 'Dry-Dropper: Tie a large Chubby or terrestrial on 4x, drop a tungsten nymph 2 feet below on 5x.'
  },
  'kc': {
    name: 'Kansas City Area (Urban Ponds)',
    type: 'Stillwater / Warmwater',
    packLabel: 'Urban Warmwater Pack',
    packId: 'warmwater-urban',
    getHatch: (month: string) => {
      if (['Dec', 'Jan', 'Feb'].includes(month)) return 'Minimal insect activity (Winter Trout Stocking in some lakes)';
      if (['Mar', 'Apr', 'May'].includes(month)) return 'Chironomids, Damselflies transitioning';
      return 'Dragonflies, Damselflies, Topwater Frogs/Bugs (Bass & Panfish)';
    },
    getFlies: (month: string) => {
      if (['Dec', 'Jan', 'Feb'].includes(month)) return [
        { name: 'Woolly Bugger', size: '#8-10', type: 'Streamer', desc: 'Perfect for stocked urban trout and sluggish bass.' },
        { name: 'Squirmy Worm', size: '#12', type: 'Nymph', desc: 'Stocked trout candy under a bobber.' },
        { name: 'Zebra Midge', size: '#16-18', type: 'Nymph', desc: 'When urban trout get pressured and picky.' },
      ];
      return [
        { name: 'Foam Spider / Popper', size: '#10-12', type: 'Dry (Topwater)', desc: 'Irresistible to bluegill and pond bass.' },
        { name: 'Clouser Minnow', size: '#4-8', type: 'Streamer', desc: 'Strips well for aggressive largemouth.' },
        { name: 'Damsel Nymph', size: '#12-14', type: 'Nymph', desc: 'Slow stripped near weedlines.' },
      ];
    },
    getRig: () => 'For warm water: 7.5ft 2x-4x leader stripping streamers. For winter trout: indicator with a small tungsten nymph suspended 3ft down.'
  },
  'oak-creek': {
    name: 'Oak Creek (AZ)',
    type: 'Freestone',
    packLabel: 'Southwest Freestone Pack',
    packId: 'southwest-freestone',
    getHatch: (month: string) => {
      if (['Dec', 'Jan', 'Feb'].includes(month)) return 'Winter Midges, Tiny Baetis';
      if (['Mar', 'Apr', 'May'].includes(month)) return 'Caddis, Blue Winged Olives, Pale Morning Duns';
      if (['Jun', 'Jul', 'Aug'].includes(month)) return 'Hoppers, Ants, Beetles, Summer Caddis';
      return 'Fall Baetis, Midges, October Caddis';
    },
    getFlies: (month: string) => {
      if (['Jun', 'Jul', 'Aug'].includes(month)) return [
        { name: 'Parachute Hopper', size: '#10-12', type: 'Dry', desc: 'Splash this down near the undercut banks.' },
        { name: 'Simi Seal Leech', size: '#10-12', type: 'Streamer/Nymph', desc: 'Arizona classic. Dead drift or strip.' },
        { name: 'Elk Hair Caddis', size: '#14-16', type: 'Dry', desc: 'Always keep one tied on in summer.' }
      ];
      return [
        { name: 'Zebra Midge', size: '#18-22', type: 'Nymph', desc: 'Deep and slow for canyon trout.' },
        { name: 'BWO Emerger', size: '#18-20', type: 'Emerger', desc: 'Grease the leader when you see sipping.' },
        { name: 'Arizona Peacock Lady', size: '#14-16', type: 'Nymph', desc: 'A local favorite searching pattern.' }
      ];
    },
    getRig: () => 'Dry-dropper works great most of the year. In winter, switch to a delicate indicator rig with 5x or 6x.'
  },
  'poudre': {
    name: 'Cache la Poudre (CO)',
    type: 'Freestone',
    packLabel: 'Colorado High Country Pack',
    packId: 'colorado-high-country',
    getHatch: (month: string) => {
      if (['Dec', 'Jan', 'Feb', 'Mar'].includes(month)) return 'Winter Midges (Minimal surface activity)';
      if (['Apr', 'May'].includes(month)) return 'Blue Winged Olives, Early Caddis (Watch for run-off)';
      if (['Jun', 'Jul', 'Aug'].includes(month)) return 'Green Drakes, PMDs, Yellow Sallies, Terrestrials';
      return 'Fall BWO, Midges, Terrestrials';
    },
    getFlies: (month: string) => {
      if (['Jun', 'Jul', 'Aug'].includes(month)) return [
        { name: 'Colorado Green Drake', size: '#10-12', type: 'Dry', desc: 'The most anticipated hatch of the year.' },
        { name: "Amy's Ant", size: '#10-12', type: 'Dry', desc: 'Floats high in pocket water and supports heavy nymphs.' },
        { name: 'Frenchie', size: '#14-16', type: 'Nymph', desc: 'Gets down fast in the tumbling freestone currents.' }
      ];
      return [
        { name: 'Rainbow Warrior', size: '#18-20', type: 'Nymph', desc: 'Flashy attractor nymph for deep pools.' },
        { name: 'Parachute Adams', size: '#18-20', type: 'Dry', desc: 'Mimics the small BWO hatches.' },
        { name: 'Black Beauty', size: '#20-22', type: 'Nymph', desc: 'Crucial for the slow winter months.' }
      ];
    },
    getRig: () => 'Heavy dry-dropper in the summer pocket water. Deep indicator nymphing in the winter pools.'
  },
  'mt-gallatin-madison': {
    name: 'Gallatin / Madison (MT)',
    type: 'Freestone / Tailwater Mix',
    packLabel: 'Montana Big River Pack',
    packId: 'big-river-montana',
    getHatch: (month: string) => {
      if (['Dec', 'Jan', 'Feb', 'Mar'].includes(month)) return 'Midges, Winter Baetis';
      if (['Apr', 'May'].includes(month)) return "Mother's Day Caddis, March Browns, BWO";
      if (['Jun', 'Jul', 'Aug'].includes(month)) return 'Salmonflies (June), Golden Stones, PMDs, Hoppers (Aug)';
      return 'Terrestrials, Fall Baetis (BWO), Midges';
    },
    getFlies: (month: string) => {
      if (['Jun', 'Jul', 'Aug'].includes(month)) return [
        { name: "Pat's Rubber Legs", size: '#4-8', type: 'Nymph', desc: 'The ultimate stonefly nymph.' },
        { name: 'Chubby Chernobyl', size: '#8-10', type: 'Dry', desc: 'Golden stone and hopper imitation.' },
        { name: 'Sparkle Dun PMD', size: '#16-18', type: 'Dry', desc: 'For technical slick water risers.' }
      ];
      if (['Apr', 'May'].includes(month)) return [
        { name: 'X-Caddis', size: '#14-16', type: 'Dry', desc: "Perfect for the famous Mother's Day hatch." },
        { name: "Guide's Choice Hare's Ear", size: '#12-14', type: 'Nymph', desc: "Buggier than a standard hare's ear." },
        { name: 'San Juan Worm', size: '#10-12', type: 'Nymph', desc: 'Essential during spring run-off spikes.' }
      ];
      return [
        { name: 'Zebra Midge', size: '#18-20', type: 'Nymph', desc: 'Madison river staple.' },
        { name: 'Baetis Cripple', size: '#18-20', type: 'Emerger', desc: 'Fool picky fall risers.' },
        { name: 'Ray Charles', size: '#14-16', type: 'Nymph', desc: 'Sowbug imitation deadly on the Madison.' }
      ];
    },
    getRig: () => "Summer: Big foam dry trailing a heavy nymph 3ft down. Run-off/Winter: Indicator with a worm/stonefly and a small midge/baetis dropper."
  }
};

export default function FindYourFly() {
  const [location, setLocation] = useState('taneycomo');
  const [month, setMonth] = useState(currentMonthAbbr);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  const locData = LOCATION_DATA[location as keyof typeof LOCATION_DATA];
  const hatchInfo = locData.getHatch(month);
  const recommendedFlies = locData.getFlies(month);
  const rig = locData.getRig();

  return (
    <div className="tool-page">
      <div className="container tool-container">
        <div className="tool-header text-center">
          <h1 className="tool-title">The Quiver</h1>
          <p className="tool-subtitle">
            Select your location and the time of year to get pinpoint accuracy on what's hatching and exactly what to tie on.
          </p>
        </div>

        {/* Month selector — clean wrap grid, no slider */}
        <div className="calendar-bar">
          <div className="months-grid">
            {MONTHS.map(m => (
              <button
                key={m}
                type="button"
                className={`month-btn ${month === m ? 'active' : ''}`}
                onClick={() => { setMonth(m); setHasSearched(false); }}
              >
                {m}
              </button>
            ))}
          </div>
          {/* Inline hatch timeline preview — updates as month changes */}
          <div className="timeline-preview">
            <span className="timeline-badge">
              <Bug size={13} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'middle' }} />
              <strong>{month} Hatch Activity:</strong> {hatchInfo}
            </span>
          </div>
        </div>

        {/* Location + Search form */}
        <form className="tool-form" onSubmit={handleSearch}>
          <div className="form-group flex-1">
            <label>
              <MapPin size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
              Fishery / Region
            </label>
            <select
              value={location}
              onChange={(e) => { setLocation(e.target.value); setHasSearched(false); }}
            >
              {Object.entries(LOCATION_DATA).map(([key, data]) => (
                <option key={key} value={key}>{data.name}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn-primary submit-btn">
            <Search size={17} style={{ display: 'inline', marginRight: '7px', verticalAlign: 'middle' }} />
            Equip My Setup
          </button>
        </form>

        {/* Results */}
        {hasSearched && (
          <div className="results-section">
            <div className="results-meta-header">
              <div>
                <h2 className="results-title">{month} at {locData.name}</h2>
                <p className="results-type">{locData.type}</p>
              </div>
            </div>

            <div className="hatch-intel-card">
              <Bug className="intel-icon" size={22} />
              <div>
                <h3>Hatch Intelligence</h3>
                <p>{hatchInfo}</p>
              </div>
            </div>

            <div className="rig-card">
              <h3>Recommended Rig</h3>
              <p>{rig}</p>
            </div>

            <h3 className="flies-title">The Arrows — High Confidence Flies</h3>
            <p className="flies-subtitle">Tap any fly to learn more and see the connected hatch guide.</p>
            <div className="flies-grid">
              {recommendedFlies.map((fly, idx) => {
                const flySlug = slugify(fly.name);
                return (
                  <Link key={idx} to={`/fly/${flySlug}?from=quiver`} className="fly-card">
                    <div className="fly-badge">{fly.type}</div>
                    <h4>{fly.name}</h4>
                    <p className="fly-size">Size: {fly.size}</p>
                    <p className="fly-desc">{fly.desc}</p>
                    <span className="fly-learn-more">Learn More →</span>
                  </Link>
                );
              })}
            </div>

            <div className="pack-upsell text-center mt-8">
              <h3>Need these flies?</h3>
              <p className="mb-4">Load your box with curated patterns specifically designed for this fishery.</p>
              <Link to={`/shop-packs#${locData.packId}`} className="btn-secondary">Shop the {locData.packLabel}</Link>
            </div>

            {/* Cross-link to hatch guide */}
            <div className="hatch-crosslink">
              <div>
                <h4>Want to go deeper?</h4>
                <p>The Hatch Guide breaks down every insect life stage with confidence ratings, specific tactics, and rig diagrams.</p>
              </div>
              <Link to="/hatch-guide" className="btn-secondary btn-sm">
                Open Hatch Guide
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .tool-page {
          padding: 6rem 0 8rem;
          min-height: calc(100vh - 80px);
        }

        .tool-header {
          margin-bottom: 3rem;
        }

        .tool-title {
          font-size: 3rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }

        .tool-subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
          max-width: 580px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        /* Month grid — wraps cleanly, no scroll */
        .calendar-bar {
          background: var(--bg-panel);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          padding: 1.5rem 0;
          margin-bottom: 3rem;
        }

        .months-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          max-width: 700px;
          margin: 0 auto 1.25rem;
          padding: 0 1rem;
        }

        .month-btn {
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.9rem;
          padding: 0.45rem 1rem;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.15s ease;
          white-space: nowrap;
          font-family: inherit;
        }

        .month-btn:hover {
          color: var(--text-primary);
          background: rgba(255,255,255,0.06);
        }

        .month-btn.active {
          background: var(--color-deep-red, #7b2226);
          color: #f5f0e8;
          border-color: rgba(255,255,255,0.1);
        }

        .timeline-preview {
          text-align: center;
          padding: 0 1rem;
          animation: fade-in 0.3s ease;
        }

        .timeline-badge {
          display: inline-block;
          background: rgba(74, 222, 128, 0.08);
          color: var(--accent-green);
          padding: 0.45rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          border: 1px solid rgba(74, 222, 128, 0.18);
          max-width: 100%;
        }

        /* Form */
        .tool-form {
          background: var(--bg-panel);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto 4rem auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .tool-form {
            flex-direction: row;
            align-items: flex-end;
          }
        }

        .form-group.flex-1 { flex: 1; }

        .form-group label {
          display: block;
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 600;
        }

        .form-group select {
          width: 100%;
          padding: 0.875rem 1rem;
          background: #0f1214;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          color: #e8e4dd;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
          font-family: inherit;
          cursor: pointer;
          appearance: auto;
        }

        .form-group select:focus {
          border-color: var(--color-deep-red, #7b2226);
        }

        .submit-btn {
          white-space: nowrap;
        }

        @media (min-width: 768px) {
          .submit-btn {
            height: 52px;
            padding: 0 2rem;
          }
        }

        /* Results */
        .results-section {
          max-width: 800px;
          margin: 0 auto;
          animation: fade-in 0.4s ease-out;
        }

        .results-meta-header {
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }

        .results-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .results-type {
          color: var(--accent-green);
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .hatch-intel-card {
          display: flex;
          gap: 1.25rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 1.5rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          align-items: flex-start;
        }

        .intel-icon {
          color: var(--text-secondary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .hatch-intel-card h3 {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-secondary);
          margin-bottom: 0.4rem;
          font-weight: 700;
        }

        .hatch-intel-card p {
          color: var(--text-primary);
          font-size: 1rem;
          line-height: 1.5;
          font-weight: 500;
          margin: 0;
        }

        .rig-card {
          background: rgba(74, 222, 128, 0.04);
          border: 1px solid rgba(74, 222, 128, 0.18);
          padding: 1.5rem;
          border-left: 4px solid var(--accent-green);
          border-radius: 4px;
          margin-bottom: 3rem;
        }

        .rig-card h3 {
          color: var(--accent-green);
          font-weight: 700;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.75rem;
        }

        .rig-card p { margin: 0; line-height: 1.7; }

        .flies-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .flies-subtitle {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .flies-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 640px) {
          .flies-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* Fly card — now a Link */
        .fly-card {
          background: var(--bg-panel);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 1.5rem;
          position: relative;
          transition: transform 0.2s, border-color 0.2s;
          display: block;
          text-decoration: none;
          color: inherit;
        }

        .fly-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.22);
        }

        .fly-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          background: rgba(255,255,255,0.08);
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
          color: var(--text-secondary);
        }

        .fly-card h4 {
          font-size: 1.05rem;
          font-weight: 700;
          margin: 0 0 0.4rem;
          padding-right: 3rem;
          color: var(--text-primary);
        }

        .fly-size {
          color: var(--accent-green);
          font-size: 0.8rem;
          margin: 0 0 0.75rem;
          font-weight: 600;
        }

        .fly-desc {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0 0 1rem;
        }

        .fly-learn-more {
          font-size: 0.75rem;
          color: var(--accent-green);
          font-weight: 600;
          letter-spacing: 0.05em;
          opacity: 0.8;
          transition: opacity 0.2s;
        }

        .fly-card:hover .fly-learn-more { opacity: 1; }

        .pack-upsell {
          background: var(--bg-panel);
          border: 1px solid var(--border-color);
          padding: 3rem 2rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
        }

        .pack-upsell h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .hatch-crosslink {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 8px;
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .hatch-crosslink h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0.35rem;
        }

        .hatch-crosslink p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0;
          max-width: 480px;
        }

        .btn-sm {
          font-size: 0.85rem;
          padding: 0.6rem 1.25rem;
          white-space: nowrap;
        }

        .text-center { text-align: center; }
        .mt-8 { margin-top: 2rem; }
        .mb-4 { margin-bottom: 1rem; }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
