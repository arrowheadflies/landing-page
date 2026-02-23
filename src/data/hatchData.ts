export interface FlyPattern {
    id: string; // Used for unique linking and tracking
    name: string;
    sizes: string;
    description: string;
    image?: string;
}

export interface LifeStage {
    id: string;
    name: string;
    description: string;
    tactics: string[];
    flies: FlyPattern[];
}

export interface InsectCategory {
    id: string;
    name: string;
    overview: string;
    stages: LifeStage[];
}

export const hatchData: Record<string, InsectCategory> = {
    midges: {
        id: "midges",
        name: "Midges (Chironomids)",
        overview: "Midges are the most abundant insect in most trout streams, hatching year-round. Mastering the midge program is the difference between a slow day and a net full of fish.",
        stages: [
            {
                id: "larva",
                name: "Larva Stage",
                description: "Midges spend most of their lives as worm-like larvae on the river bottom. They are often red (Bloodworms), olive, or cream.",
                tactics: [
                    "Fish deep, near the substrate.",
                    "Use a standard nymph rig with plenty of weight.",
                    "Dead drift is essential; larvae don't swim much."
                ],
                flies: [
                    { id: "zebra-midge-red", name: "Red Zebra Midge", sizes: "18-22", description: "The gold standard for bloodworm imitations." },
                    { id: "mercury-midge", name: "Mercury Midge", sizes: "20-24", description: "Features a silver bead for that extra 'pop'." },
                    { id: "tube-midge", name: "Tube Midge", sizes: "22-26", description: "Ultra-slim profile for pressured tailwater fish." },
                    { id: "disco-midge", name: "Disco Midge", sizes: "20-22", description: "Flashy body for slightly off-color water." }
                ]
            },
            {
                id: "pupa",
                name: "Pupa Stage",
                description: "As they prepare to hatch, pupae travel through the water column. They often have gas bubbles trapped in their shucks, creating a metallic sheen.",
                tactics: [
                    "Focus on the middle to upper water column.",
                    "Use a 'Leisenring Lift' or 'swing' at the end of your drift to mimic upward movement.",
                    "Watch for 'bulging' rises where fish eat just under the surface."
                ],
                flies: [
                    { id: "black-beauty", name: "Black Beauty", sizes: "20-24", description: "A simple thread midge pupa that works everywhere." },
                    { id: "rs2-gray", name: "Gray RS2", sizes: "18-22", description: "The ultimate transitional fly. Tailwater magic." },
                    { id: "chocolate-midge", name: "Chocolate Midge", sizes: "20-22", description: "Brown and silver, mimicking the natural hue of San Juan midges." },
                    { id: "rims-midge", name: "Rim's Midge Pupa", sizes: "20-24", description: "Highly realistic silhouette for selective trout." }
                ]
            },
            {
                id: "adult",
                name: "Adult Stage",
                description: "The delicate final stage. Adults hover over the water or cluster on the surface (Midge Clusters).",
                tactics: [
                    "Use 6x or 7x tippet for delicate presentations.",
                    "Look for 'sipping' rises in glassy water.",
                    "If you can't see your fly, use a larger 'sighter' dry fly with the midge trailing behind."
                ],
                flies: [
                    { id: "griffiths-gnat", name: "Griffith's Gnat", sizes: "18-22", description: "Replicates a cluster of midges. High visibility." },
                    { id: "morgans-midge", name: "Morgan's Midge", sizes: "20-24", description: "Low profile, high success rate in clear water." },
                    { id: "parachute-midge", name: "Parachute Midge", sizes: "20-22", description: "Enhanced visibility while maintaining a delicate footprint." }
                ]
            }
        ]
    },
    mayflies: {
        id: "mayflies",
        name: "Mayflies (Ephemeroptera)",
        overview: "The most iconic hatch in fly fishing. Known for their sail-like wings and elegant life cycle.",
        stages: [
            {
                id: "nymph",
                name: "Nymph Stage",
                description: "Mayfly nymphs are active swimmers or crawlers living among the rocks.",
                tactics: ["Bottom bouncing", "Active retrieves for swimmers"],
                flies: [
                    { id: "pheasant-tail", name: "Pheasant Tail", sizes: "14-20", description: "The classic nymph pattern." },
                    { id: "hare-sear", name: "Hare's Ear", sizes: "12-18", description: "Buggier profile for faster water." }
                ]
            },
            {
                id: "emerger",
                name: "Emerger Stage",
                description: "Stuck in the surface film, mayflies are highly vulnerable during emergence.",
                tactics: ["Grease the leader", "Damp drift in the film"],
                flies: [
                    { id: "klinkhammer", name: "Klinkhammer", sizes: "14-18", description: "Sits deep in the film to trigger aggressive strikes." }
                ]
            },
            {
                id: "adult",
                name: "Adult Stage",
                description: "The 'Dun' stage. Sail-like wings and upright posture.",
                tactics: ["Gentle upstream presentation", "Matching the color precisely"],
                flies: [
                    { id: "adams", name: "Parachute Adams", sizes: "12-22", description: "The most versatile dry fly ever tied." }
                ]
            }
        ]
    }
};
