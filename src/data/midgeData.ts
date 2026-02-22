export interface LifeStage {
    name: string;
    description: string;
    tactics: string[];
    flies: Fly[];
    image: string;
}

export interface Fly {
    name: string;
    sizes: string;
    description: string;
}

export const midgeData = {
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
            image: "https://images.unsplash.com/photo-1590001150463-2f8318cb5f9d?q=80&w=2070&auto=format&fit=crop",
            flies: [
                { name: "Zebra Midge", sizes: "18-22", description: "The gold standard. Red, Black, or Olive." },
                { name: "Mercury Midge", sizes: "20-24", description: "Features a silver bead for that extra 'pop'." }
            ]
        },
        {
            id: "pupa",
            name: "Pupa / Emerger Stage",
            description: "As they prepare to hatch, pupae travel through the water column. They often have gas bubbles trapped in their shucks, creating a metallic sheen.",
            tactics: [
                "Focus on the middle to upper water column.",
                "Use a 'Leisenring Lift' or 'swing' at the end of your drift to mimic upward movement.",
                "Watch for 'bulging' rises where fish eat just under the surface."
            ],
            image: "https://images.unsplash.com/photo-1549449852-7cd54e0c463f?q=80&w=2070&auto=format&fit=crop",
            flies: [
                { name: "Black Beauty", sizes: "20-24", description: "A simple thread midge pupa that works everywhere." },
                { name: "RS2", sizes: "18-22", description: "The ultimate transitional fly. Tailwater magic." },
                { name: "Chocolate Midge", sizes: "20-22", description: "Brown and silver, mimicking the natural hue of San Juan midges." }
            ]
        },
        {
            id: "adult",
            name: "Adult / Dry Stage",
            description: "The delicate final stage. Adults hover over the water or cluster on the surface (Midge Clusters).",
            tactics: [
                "Use 6x or 7x tippet for delicate presentations.",
                "Look for 'sipping' rises in glassv water.",
                "If you can't see your fly, use a larger 'sighter' dry fly with the midge trailing behind."
            ],
            image: "https://images.unsplash.com/photo-1516900448138-08149ef3879a?q=80&w=2070&auto=format&fit=crop",
            flies: [
                { name: "Griffith's Gnat", sizes: "18-22", description: "Replicates a cluster of midges. High visibility." },
                { name: "Morgan's Midge", sizes: "20-24", description: "Low profile, high success rate in clear water." }
            ]
        }
    ]
};
