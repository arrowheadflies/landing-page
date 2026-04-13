export const REGIONS = [
  'Northeast', 'Southeast', 'Midwest', 'Rocky Mountain', 
  'Pacific Northwest', 'Southwest', 'Alaska', 'Other'
];

export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const WATER_TYPES = [
  'Tailwater', 'Freestone River', 'Spring Creek', 'Limestone Creek', 
  'Stillwater / Lake', 'Reservoir', 'Tidal / Brackish', 'Small Stream', 'Urban Fishery'
];

export interface Recommendation {
  hatch: string;
  flies: Array<{
    name: string;
    size: string;
    type: 'Dry' | 'Nymph' | 'Midge' | 'Streamer' | 'Emerger' | 'Terrestrial';
    bead: 'Bead' | 'Bare' | 'N/A';
    desc: string;
  }>;
  rig: string;
}

export const getRecommendation = (_region: string, month: string, waterType: string): Recommendation => {
  // Logic-based recommendation engine
  // This is a simplified version of a full database, but much more flexible than before.
  
  const isWinter = ['December', 'January', 'February'].includes(month);
  const isSpring = ['March', 'April', 'May'].includes(month);
  const isSummer = ['June', 'July', 'August'].includes(month);

  if (isWinter) {
    return {
      hatch: 'Minimal surface activity. Focus on Midges and Winter Stoneflies.',
      flies: [
        { name: 'Zebra Midge Black', size: '18-22', type: 'Midge', bead: 'Bead', desc: 'The winter staple for technical water.' },
        { name: 'RS2 Grey', size: '20-22', type: 'Emerger', bead: 'Bare', desc: 'Perfect for mid-day midge hatches.' },
        { name: 'Black Beauty', size: '20-22', type: 'Nymph', desc: 'A tiny midge larva that saves slow days.' , bead: 'Bare'}
      ],
      rig: 'Technical Indicator Rig: 9ft 6x leader to a single midge, or tandem rig with 12" separation.'
    };
  }

  if (isSpring) {
    return {
      hatch: 'Blue Winged Olives (BWO), Caddis, and early Stones.',
      flies: [
        { name: 'Parachute Adams', size: '16-20', type: 'Dry', bead: 'N/A', desc: 'The best general bwo/mayfly imitation ever.' },
        { name: 'Pheasant Tail Nymph', size: '14-18', type: 'Nymph', bead: 'Bead', desc: 'Standard mayfly nymph profile for all rivers.' },
        { name: 'Elk Hair Caddis', size: '14-16', type: 'Dry', bead: 'N/A', desc: 'Skitter this during the evening caddis clouds.' }
      ],
      rig: 'Dry-Dropper: High-vis dry with a 24" dropper to a beadhead nymph.'
    };
  }

  if (isSummer) {
    if (waterType === 'Tailwater') {
      return {
        hatch: 'Sulphurs, PMDs, and Midges. Technical flows.',
        flies: [
          { name: 'Sulphur Parachute', size: '16-18', type: 'Dry', bead: 'N/A', desc: 'Matches the most consistent summer tailwater hatch.' },
          { name: 'WD-40 Grey', size: '18-22', type: 'Emerger', bead: 'Bare', desc: 'Effective during the pre-hatch stage.' },
          { name: 'Zebra Midge Red', size: '18-20', type: 'Midge', bead: 'Bead', desc: 'Red adds visibility in deeper summer runs.' }
        ],
        rig: 'Light Indicator: 5x-6x fluorocarbon with small split shot to get tiny bugs down.'
      };
    }
    return {
      hatch: 'Terrestrials (Hoppers/Ants), PMDs, and Golden Stones.',
      flies: [
        { name: 'Chubby Chernobyl', size: '10-12', type: 'Dry', bead: 'N/A', desc: 'Floats high, supports nymphs, trout love it.' },
        { name: 'Copper John Red', size: '14-18', type: 'Nymph', bead: 'Bead', desc: 'Fast-sinking attractor. Use as a dropper.' },
        { name: 'Wooly Bugger Olive', size: '8-10', type: 'Streamer', bead: 'Bead', desc: 'Effective in the morning/evening big water.' }
      ],
      rig: 'Hopper-Dropper: Size 10 terrestrial with a heavy beadhead nymph 3ft below.'
    };
  }

  // default to fall
  return {
    hatch: 'October Caddis, BWO, and aggressive Brown Trout.',
    flies: [
      { name: 'October Caddis Orange', size: '8-12', type: 'Dry', bead: 'N/A', desc: 'Big dry for the last heavy hatch of the year.' },
      { name: 'Baetis Nymph', size: '18-20', type: 'Nymph', bead: 'Bead', desc: 'The most abundant insect in autumn waters.' },
      { name: 'Zebra Midge Black', size: '18-22', type: 'Midge', bead: 'Bead', desc: 'Reliable all year, but especially in clear fall water.' }
    ],
    rig: 'Versatile Setup: 9ft 5x leader adjusted based on surface activity.'
  };
};
