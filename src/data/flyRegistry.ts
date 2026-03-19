/**
 * Fly Registry
 * Central lookup table linking fly names (from The Quiver) to their
 * Hatch Guide category + stage, plus additional detail for the fly detail page.
 *
 * Keys are slugified fly names to match against Quiver fly card names.
 */

export interface FlyEntry {
    id: string;
    name: string;
    type: string;
    sizes: string;
    description: string;
    whenItWorks: string;
    hatchCategory?: string;   // e.g. 'midges', 'mayflies' — links to hatch guide
    hatchStage?: string;       // e.g. 'larva', 'pupa', 'adult'
    colors?: { name: string; hex: string }[];
}

// Helper to slugify a fly name for URL/lookup use
export function slugify(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

export const flyRegistry: Record<string, FlyEntry> = {
    'zebra-midge': {
        id: 'zebra-midge',
        name: 'Zebra Midge',
        type: 'Nymph',
        sizes: '#18-22',
        description: 'The gold standard tailwater midge. Thread body with a silver bead. Works year-round wherever trout live.',
        whenItWorks: 'Any time, any season. When all else fails, tie on a Zebra Midge.',
        hatchCategory: 'midges',
        hatchStage: 'larva',
        colors: [
            { name: 'Black', hex: '#000000' },
            { name: 'Red', hex: '#8B0000' },
            { name: 'Olive', hex: '#556B2F' },
            { name: 'Cream', hex: '#FFFDD0' }
        ]
    },
    'grey-scud': {
        id: 'grey-scud',
        name: 'Grey Scud',
        type: 'Nymph',
        sizes: '#14-16',
        description: 'Imitates the abundant scuds (freshwater shrimp) common in many tailwaters. Fish near the bottom.',
        whenItWorks: 'Year-round on tailwaters, especially effective during generation flows.',
        hatchCategory: 'midges',
        hatchStage: 'larva',
    },
    'rs2': {
        id: 'rs2',
        name: 'RS2',
        type: 'Emerger',
        sizes: '#20-22',
        description: 'Rim Chung\'s classic emerger. A must-have transitional pattern between nymph and adult.',
        whenItWorks: 'During active hatches when fish are feeding in the film.',
        hatchCategory: 'midges',
        hatchStage: 'pupa',
        colors: [
            { name: 'Gray', hex: '#808080' },
            { name: 'Black', hex: '#000000' },
            { name: 'Olive', hex: '#556B2F' }
        ]
    },
    'ruby-midge': {
        id: 'ruby-midge',
        name: 'Ruby Midge',
        type: 'Nymph',
        sizes: '#18-20',
        description: 'Red-bodied midge larva with a tungsten bead. Stands out at depth.',
        whenItWorks: 'Spring and fall when midge activity ramps up.',
        hatchCategory: 'midges',
        hatchStage: 'larva',
    },
    'crackback-scud': {
        id: 'crackback-scud',
        name: 'Crackback Scud',
        type: 'Nymph',
        sizes: '#14-18',
        description: 'Realistic scud pattern with a shellback that catches light.',
        whenItWorks: 'Deadly during high water generation when scuds flush off the bottom.',
        hatchCategory: 'midges',
        hatchStage: 'larva',
    },
    'parachute-adams': {
        id: 'parachute-adams',
        name: 'Parachute Adams',
        type: 'Dry',
        sizes: '#16-20',
        description: 'The most versatile dry fly ever tied. Covers BWO, PMD, and general mayfly hatches.',
        whenItWorks: 'Any time fish are rising. Use it when you\'re not sure what they\'re eating.',
        hatchCategory: 'mayflies',
        hatchStage: 'adult',
    },
    'griffiths-gnat': {
        id: 'griffiths-gnat',
        name: "Griffith's Gnat",
        type: 'Dry',
        sizes: '#18-22',
        description: 'Peacock herl body with fine hackle. Imitates a cluster of adult midges on the surface.',
        whenItWorks: 'Winter sipping risers. Great when fish are on midge clusters.',
        hatchCategory: 'midges',
        hatchStage: 'adult',
    },
    'woolly-bugger': {
        id: 'woolly-bugger',
        name: 'Woolly Bugger (Olive/Black)',
        type: 'Streamer',
        sizes: '#8-10',
        description: 'The Swiss Army knife of fly fishing. Imitates leeches, baitfish, big nymphs — everything.',
        whenItWorks: 'Cold water, low light, after rain. Never leave home without one.',
        hatchCategory: 'streamers',
        hatchStage: 'baitfish',
    },
    'foam-spider-popper': {
        id: 'foam-spider-popper',
        name: 'Foam Spider / Popper',
        type: 'Dry (Topwater)',
        sizes: '#10-12',
        description: 'Creates a commotion on the surface that panfish and bass can\'t resist.',
        whenItWorks: 'Warm evenings, May through September, near lily pads and weed edges.',
    },
    'clouser-minnow': {
        id: 'clouser-minnow',
        name: 'Clouser Minnow',
        type: 'Streamer',
        sizes: '#4-8',
        description: 'The most effective freshwater and saltwater fly ever tied. Dives deep on the strip.',
        whenItWorks: 'Any time you\'re targeting bass, pike, or trophy trout on the swing.',
    },
    'damsel-nymph': {
        id: 'damsel-nymph',
        name: 'Damsel Nymph',
        type: 'Nymph',
        sizes: '#12-14',
        description: 'Slender olive nymph that does well slow-stripped near aquatic vegetation.',
        whenItWorks: 'Late spring through summer in still or slow water.',
    },
    'squirmy-worm': {
        id: 'squirmy-worm',
        name: 'Squirmy Worm',
        type: 'Nymph',
        sizes: '#12',
        description: 'Wiggling silicone tail that drives all trout absolutely crazy. Love it or hate it — it works.',
        whenItWorks: 'During and after rain when real worms flush into the water.',
    },
    'parachute-hopper': {
        id: 'parachute-hopper',
        name: 'Parachute Hopper',
        type: 'Dry',
        sizes: '#10-12',
        description: 'Realistic grasshopper pattern with a foam body and hi-vis parachute wing.',
        whenItWorks: 'August and September on freestone streams near grassy banks.',
    },
    'simi-seal-leech': {
        id: 'simi-seal-leech',
        name: 'Simi Seal Leech',
        type: 'Streamer/Nymph',
        sizes: '#10-12',
        description: 'Arizona staple. Long fibers pulse on every movement. Great dead-drifted or stripped.',
        whenItWorks: 'Year-round in flowing water, especially during higher flows on Oak Creek.',
    },
    'elk-hair-caddis': {
        id: 'elk-hair-caddis',
        name: 'Elk Hair Caddis',
        type: 'Dry',
        sizes: '#14-18',
        description: 'Classic elk hair wing over a dubbed body. The definitive caddis adult imitation.',
        whenItWorks: 'Evening caddis hatches spring through fall. Skitter it on the surface.',
        colors: [
            { name: 'Tan', hex: '#D2B48C' },
            { name: 'Olive', hex: '#556B2F' },
            { name: 'Black', hex: '#000000' }
        ]
    },
    'bwo-emerger': {
        id: 'bwo-emerger',
        name: 'BWO Emerger',
        type: 'Emerger',
        sizes: '#18-20',
        description: 'Low riding emerger pattern matching the Blue Winged Olive mid-hatch.',
        whenItWorks: 'Overcast, cool days in spring and fall when BWOs are hatching.',
        hatchCategory: 'mayflies',
        hatchStage: 'emerger',
    },
    'arizona-peacock-lady': {
        id: 'arizona-peacock-lady',
        name: 'Arizona Peacock Lady',
        type: 'Nymph',
        sizes: '#14-16',
        description: 'Peacock herl body with a hen feather wing. Local Arizona favorite that searches water well.',
        whenItWorks: 'Year-round searching pattern when the hatch is unclear.',
    },
    'colorado-green-drake': {
        id: 'colorado-green-drake',
        name: 'Colorado Green Drake',
        type: 'Dry',
        sizes: '#10-12',
        description: 'Celebrates the most dramatic and exciting hatch of Colorado summer. Large, sailwinged and unmistakable.',
        whenItWorks: 'June and July on Poudre and other Colorado freestone streams.',
        hatchCategory: 'mayflies',
        hatchStage: 'adult',
    },
    'amys-ant': {
        id: 'amys-ant',
        name: "Amy's Ant",
        type: 'Dry',
        sizes: '#10-12',
        description: 'Foam ant that rides high and floats all day. One of the most versatile terrestrials on Rocky Mountain streams.',
        whenItWorks: 'Mid-summer through September near bankside vegetation.',
    },
    'frenchie': {
        id: 'frenchie',
        name: 'Frenchie',
        type: 'Nymph',
        sizes: '#14-16',
        description: 'Tungsten-beaded pheasant tail variant with a hotspot collar. Sinks fast and triggers strikes.',
        whenItWorks: 'Year-round in tumbling pocket water.',
        hatchCategory: 'mayflies',
        hatchStage: 'nymph',
    },
    'rainbow-warrior': {
        id: 'rainbow-warrior',
        name: 'Rainbow Warrior',
        type: 'Nymph',
        sizes: '#18-20',
        description: 'Shiny, flashy, and deadly. Mimics midge pupae and small nymphs in bright conditions.',
        whenItWorks: 'Overcast days and deep pools where flash triggers reaction strikes.',
        hatchCategory: 'midges',
        hatchStage: 'pupa',
    },
    'black-beauty-pupa': {
        id: 'black-beauty-pupa',
        name: 'Black Beauty Pupa',
        type: 'Nymph',
        sizes: '#20-22',
        description: 'Classic thread midge pupa. Dead simple, devastatingly effective.',
        whenItWorks: 'Winter and early spring on tailwaters.',
        hatchCategory: 'midges',
        hatchStage: 'pupa',
    },
    'pats-rubber-legs': {
        id: 'pats-rubber-legs',
        name: "Pat's Rubber Legs",
        type: 'Nymph',
        sizes: '#4-8',
        description: 'The definitive stonefly nymph for big western rivers. Tons of movement.',
        whenItWorks: 'Year-round in the Gallatin, Madison, and other large western rivers.',
        hatchCategory: 'stoneflies',
        hatchStage: 'nymph',
        colors: [
            { name: 'Black', hex: '#000000' },
            { name: 'Brown', hex: '#5C4033' },
            { name: 'Coffee/Black', hex: '#3B2F2F' }
        ]
    },
    'chubby-chernobyl': {
        id: 'chubby-chernobyl',
        name: 'Chubby Chernobyl',
        type: 'Dry',
        sizes: '#8-10',
        description: 'Foam monster that imitates golden stoneflies and hoppers. Can float a heavy nymph dropper.',
        whenItWorks: 'Late June through August on big western freestone rivers.',
        hatchCategory: 'stoneflies',
        hatchStage: 'adult',
        colors: [
            { name: 'Golden', hex: '#FFD700' },
            { name: 'Royal', hex: '#4169E1' },
            { name: 'Purple', hex: '#800080' },
            { name: 'Red', hex: '#FF0000' }
        ]
    },
    'sparkle-dun-pmd': {
        id: 'sparkle-dun-pmd',
        name: 'Sparkle Dun PMD',
        type: 'Dry',
        sizes: '#16-18',
        description: 'Craig Mathews\' design for the PMD hatch. The trailing shuck suggests a just-emerging dun.',
        whenItWorks: 'PMD hatches in July on the Madison and slick-water sections of the Gallatin.',
        hatchCategory: 'mayflies',
        hatchStage: 'emerger',
    },
    'x-caddis': {
        id: 'x-caddis',
        name: 'X-Caddis',
        type: 'Dry',
        sizes: '#14-16',
        description: 'Z-lon trailing shuck imitates an emerging caddis. Simple and effective during heavy hatches.',
        whenItWorks: 'The Mother\'s Day Caddis hatch in May on the Madison.',
    },
    'san-juan-worm': {
        id: 'san-juan-worm',
        name: 'San Juan Worm',
        type: 'Nymph',
        sizes: '#10-12',
        description: 'Simple red or pink chenille worm — deadly during high water and after rain.',
        whenItWorks: 'Spring run-off, after rain, or anytime the water is slightly elevated.',
        colors: [
            { name: 'Red', hex: '#FF0000' },
            { name: 'Pink', hex: '#FFC0CB' },
            { name: 'Tan', hex: '#D2B48C' }
        ]
    },
    'baetis-cripple': {
        id: 'baetis-cripple',
        name: 'Baetis Cripple',
        type: 'Emerger',
        sizes: '#18-20',
        description: 'Rides low in the film, imitating a struggling emerging BWO.',
        whenItWorks: 'Fall BWO hatches on the Madison and tailwaters.',
        hatchCategory: 'mayflies',
        hatchStage: 'emerger',
    },
    'ray-charles': {
        id: 'ray-charles',
        name: 'Ray Charles',
        type: 'Nymph',
        sizes: '#14-16',
        description: 'Sowbug (aquatic isopod) imitation. Essential for the Madison River.',
        whenItWorks: 'Year-round on sowbug-heavy tailwaters and spring creeks.',
    },
    'pheasant-tail': {
        id: 'pheasant-tail',
        name: 'Pheasant Tail',
        type: 'Nymph',
        sizes: '#14-18',
        description: 'Frank Sawyer\'s masterpiece. Imitates virtually any small mayfly nymph.',
        whenItWorks: 'Year-round wherever mayflies live.',
        hatchCategory: 'mayflies',
        hatchStage: 'nymph',
    },
    'guides-choice-hares-ear': {
        id: 'guides-choice-hares-ear',
        name: "Guide's Choice Hare's Ear",
        type: 'Nymph',
        sizes: '#12-14',
        description: 'More loosely dubbed than a standard Hare\'s Ear — buggier and more lifelike in faster water.',
        whenItWorks: 'Searching faster riffles and pocket water during spring and fall.',
        hatchCategory: 'mayflies',
        hatchStage: 'nymph',
    },
    'copper-john': {
        id: 'copper-john',
        name: 'Copper John',
        type: 'Nymph',
        sizes: '#14-18',
        description: 'Beadhead attractor nymph with a wire body. Gets down fast and catches virtually anything.',
        whenItWorks: 'Year-round in faster water. Especially effective in spring and fall searching runs.',
        hatchCategory: 'mayflies',
        hatchStage: 'nymph',
    },
    'black-beauty': {
        id: 'black-beauty',
        name: 'Black Beauty',
        type: 'Nymph',
        sizes: '#20-22',
        description: 'Classic thread midge pupa. Dead simple and devastatingly effective on tailwaters.',
        whenItWorks: 'Winter and early spring on tailwaters when midges dominate.',
        hatchCategory: 'midges',
        hatchStage: 'pupa',
    },
};
