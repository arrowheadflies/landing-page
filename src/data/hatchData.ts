export interface FlyPattern {
    id: string;
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
    confidenceRating: number;
    whenItWorks: string;
    rigSuggestion: string;
}

export interface InsectCategory {
    id: string;
    name: string;
    overview: string;
    stages: LifeStage[];
    image?: string;
}

export const hatchData: Record<string, InsectCategory> = {
    midges: {
        id: "midges",
        name: "Midges (Chironomids)",
        overview: "Midges are the most abundant insect in most trout streams, hatching year-round. Mastering the midge program is the difference between a slow day and a net full of fish.",
        image: "https://images.unsplash.com/photo-1590001150463-2f8318cb5f9d?q=80&w=2070&auto=format&fit=crop",
        stages: [
            {
                id: "larva",
                name: "Larva Stage",
                description: "Midges spend most of their lives as worm-like larvae on the river bottom. They're often red (Bloodworms), olive, or cream — and scuds and other crustaceans are fished alongside them in the same zones.",
                tactics: [
                    "Fish deep, near the substrate.",
                    "Use a standard nymph rig with plenty of weight.",
                    "Dead drift is essential — larvae and scuds don't swim much.",
                    "In generation flows, scuds flush off the bottom and become even more available."
                ],
                confidenceRating: 5,
                whenItWorks: "Year-round, especially strong in winter or when nothing else is hatching on tailwaters.",
                rigSuggestion: "Standard indicator rig. Heavy tungsten point fly with an unweighted or lightly weighted midge larva 18-24 inches below. Scuds work well as the point fly.",
                flies: [
                    { id: "zebra-midge", name: "Zebra Midge", sizes: "18-22", description: "The gold standard tailwater midge. Thread body with a silver bead. Works year-round." },
                    { id: "red-zebra-midge", name: "Red Zebra Midge", sizes: "18-22", description: "The gold standard for bloodworm imitations. Red body with silver ribbing." },
                    { id: "ruby-midge", name: "Ruby Midge", sizes: "18-20", description: "Red-bodied midge larva with a tungsten bead. Stands out at depth." },
                    { id: "mercury-midge", name: "Mercury Midge", sizes: "20-24", description: "Features a silver bead for that extra 'pop' at depth." },
                    { id: "grey-scud", name: "Grey Scud", sizes: "14-16", description: "Imitates abundant scuds (freshwater shrimp) common in tailwaters. Fish near the bottom." },
                    { id: "crackback-scud", name: "Crackback Scud", sizes: "14-18", description: "Realistic scud pattern with a shellback that catches light. Deadly during generation flows." },
                    { id: "ray-charles", name: "Ray Charles", sizes: "14-16", description: "Sowbug (aquatic isopod) imitation. Essential on the Madison River and spring creeks." }
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
                confidenceRating: 4,
                whenItWorks: "During an active hatch when fish are bulging or porpoising just under the surface.",
                rigSuggestion: "Shallow indicator rig or a dry-dropper with a hi-vis dry fly and an unweighted pupa trailing 12-18 inches behind.",
                flies: [
                    { id: "black-beauty", name: "Black Beauty", sizes: "20-24", description: "A simple thread midge pupa that works everywhere. Winter and spring tailwater staple." },
                    { id: "rs2", name: "RS2", sizes: "18-22", description: "Rim Chung's classic emerger. A must-have transitional pattern between nymph and adult." },
                    { id: "gray-rs2", name: "Gray RS2", sizes: "18-22", description: "The ultimate transitional fly. Tailwater magic anywhere." },
                    { id: "rainbow-warrior", name: "Rainbow Warrior", sizes: "18-20", description: "Shiny, flashy and deadly. Mimics midge pupae and small nymphs in bright conditions." },
                    { id: "chocolate-midge", name: "Chocolate Midge", sizes: "20-22", description: "Brown and silver, mimicking the natural hue of San Juan midges." }
                ]
            },
            {
                id: "adult",
                name: "Adult Stage",
                description: "The delicate final stage. Adults hover over the water or cluster on the surface. When fish are sipping in glassy water, adults are what they're eating.",
                tactics: [
                    "Use 6x or 7x tippet for delicate presentations.",
                    "Look for 'sipping' rises in glassy water.",
                    "If you can't see your fly, use a larger 'sighter' dry fly with the midge trailing behind."
                ],
                confidenceRating: 3,
                whenItWorks: "Overcast winter days or early mornings when fish are actively rising to surface clusters.",
                rigSuggestion: "Double-dry rig: larger #16 Griffith's Gnat or parachute fly followed by a tiny #22 single adult.",
                flies: [
                    { id: "griffiths-gnat", name: "Griffith's Gnat", sizes: "18-22", description: "Replicates a cluster of midges. High visibility and always effective." },
                    { id: "morgans-midge", name: "Morgan's Midge", sizes: "20-24", description: "Low profile, high success rate in clear water." },
                    { id: "parachute-midge", name: "Parachute Midge", sizes: "20-22", description: "Enhanced visibility while maintaining a delicate footprint." }
                ]
            }
        ]
    },

    mayflies: {
        id: "mayflies",
        name: "Mayflies (Ephemeroptera)",
        overview: "The most iconic hatch in fly fishing. Known for their sail-like wings and elegant life cycle, the mayfly hatch is what most anglers dream about. Colorado Green Drakes, PMDs, BWOs — these are the centerpiece hatches.",
        image: "https://images.unsplash.com/photo-1571630435-7e5c7b0a6ecd?q=80&w=2070&auto=format&fit=crop",
        stages: [
            {
                id: "nymph",
                name: "Nymph Stage",
                description: "Mayfly nymphs are active swimmers or crawlers living among the rocks. They can stay in this stage for up to a year before emerging, making them a consistent food source year-round.",
                tactics: [
                    "Bottom bouncing with Czech or tight-line nymphing.",
                    "Active retrieves for swimmer species like Isonychia.",
                    "Match size and color precisely.",
                    "Attractor nymphs like Copper John and Arizona Peacock Lady cover multiple species."
                ],
                confidenceRating: 5,
                whenItWorks: "Pre-hatch, spring through fall, anytime water is warming up. Year-round searching pattern.",
                rigSuggestion: "Classic Czech or indicator nymphing rig keeping the flies near the bottom.",
                flies: [
                    { id: "pheasant-tail", name: "Pheasant Tail", sizes: "14-20", description: "The classic nymph pattern. Imitates virtually any small mayfly nymph." },
                    { id: "hares-ear", name: "Hare's Ear", sizes: "12-18", description: "Buggier profile for faster water. An all-time classic." },
                    { id: "frenchie", name: "Frenchie", sizes: "14-18", description: "Tungsten bead PT variant with a hotspot — gets down fast." },
                    { id: "copper-john", name: "Copper John", sizes: "14-18", description: "Beadhead attractor nymph with a wire body. Gets down fast and catches everything." },
                    { id: "guides-choice-hares-ear", name: "Guide's Choice Hare's Ear", sizes: "12-14", description: "Looser dubbed than a standard HE — buggier and more lifelike in faster water." },
                    { id: "arizona-peacock-lady", name: "Arizona Peacock Lady", sizes: "14-16", description: "Peacock herl body with a hen wing. Excellent searching nymph year-round." },
                    { id: "pmd-nymph", name: "PMD Nymph", sizes: "16-18", description: "Matches the Pale Morning Dun, a major western hatch." }
                ]
            },
            {
                id: "emerger",
                name: "Emerger Stage",
                description: "Stuck in the surface film, mayflies are highly vulnerable during emergence. This is when the biggest fish come up to feed. Emergers and cripples often outperform both nymphs and duns.",
                tactics: [
                    "Grease the leader to within 6 inches of the fly.",
                    "Damp drift in the film — don't treat your emerger.",
                    "Fish right at the head of feeding lanes during a hatch.",
                    "Cripples sit lower — use them when fish refuse standard duns."
                ],
                confidenceRating: 4,
                whenItWorks: "During an active hatch when you see aggressive, splashy rises or porpoising.",
                rigSuggestion: "Dry-dropper with a parachute dry fly and an emerger riding just 6-12 inches below.",
                flies: [
                    { id: "klinkhammer", name: "Klinkhammer", sizes: "14-18", description: "Sits deep in the film to trigger aggressive strikes." },
                    { id: "sparkle-dun", name: "Sparkle Dun", sizes: "16-18", description: "Trailing shuck imitates a just-emerging dun perfectly." },
                    { id: "sparkle-dun-pmd", name: "Sparkle Dun PMD", sizes: "16-18", description: "Craig Mathews' design for the PMD hatch. The trailing shuck matches the mid-hatch stage." },
                    { id: "bwo-emerger", name: "BWO Emerger", sizes: "18-20", description: "Essential for the Blue Winged Olive hatches on cold, overcast days." },
                    { id: "baetis-cripple", name: "Baetis Cripple", sizes: "18-20", description: "Rides low in the film, imitating a struggling emerging BWO. Works when standard duns get refused." }
                ]
            },
            {
                id: "dun",
                name: "Dun (Adult) Stage",
                description: "The 'Dun' stage — the iconic image of a mayfly with upright sail-like wings riding the surface. Fish target them when drifting helplessly. The Colorado Green Drake is the crown jewel of this stage on western freestone.",
                tactics: [
                    "Gentle upstream presentation on a slack leader.",
                    "Matching color and size precisely is critical.",
                    "Let it drift drag-free for as long as possible.",
                    "During Green Drake hatches, fish are selective — use the right pattern."
                ],
                confidenceRating: 4,
                whenItWorks: "Prime hatch hours when you can see bugs on the surface and fish actively rising.",
                rigSuggestion: "Single dry fly on a 9ft 5x leader, cast upstream, let it drift drag-free.",
                flies: [
                    { id: "parachute-adams", name: "Parachute Adams", sizes: "12-22", description: "The most versatile dry fly ever tied. Use it when you're not sure what they're eating." },
                    { id: "colorado-green-drake", name: "Colorado Green Drake", sizes: "10-12", description: "The most anticipated hatch of the Colorado summer — large, sail-winged, unmistakable." },
                    { id: "elk-hair-bwo", name: "Blue Winged Olive", sizes: "18-22", description: "The iconic small mayfly. Critical for overcast spring and fall days." },
                    { id: "comparadun-pmd", name: "PMD Comparadun", sizes: "16-18", description: "Low-riding imitation for technical PMD hatches." }
                ]
            },
            {
                id: "spinner",
                name: "Spinner Stage",
                description: "After mating, female spinners return to the water to lay eggs and die, falling flat on the surface. Spinner falls often trigger evening feeding frenzies on otherwise slow days.",
                tactics: [
                    "Fish at dusk when spinners fall.",
                    "Use flush-floating patterns with spent wings.",
                    "Look for rises in flat water downstream of riffles."
                ],
                confidenceRating: 3,
                whenItWorks: "Evening during and after major hatches. Look for the spinner fall 30-60 minutes after the main hatch ends.",
                rigSuggestion: "Single flush-floating spinner on 6x tippet in glassy tail-outs.",
                flies: [
                    { id: "rusty-spinner", name: "Rusty Spinner", sizes: "16-20", description: "The go-to PMD and BWO spinner imitation." },
                    { id: "mahogany-spinner", name: "Mahogany Spinner", sizes: "14-16", description: "For Isonychia and large fall mayfly spinner falls." }
                ]
            }
        ]
    },

    caddis: {
        id: "caddis",
        name: "Caddis (Trichoptera)",
        overview: "Caddis are the most widespread aquatic insect, found on nearly every trout stream in North America. Their case-building larvae and explosive hatches make them essential knowledge for any angler.",
        image: "https://images.unsplash.com/photo-1516900448138-08149ef3879a?q=80&w=2070&auto=format&fit=crop",
        stages: [
            {
                id: "larva",
                name: "Larva Stage",
                description: "Caddis larvae build portable cases or nets from sand, gravel, or plant material. They are found in nearly all water types and are a constant food source.",
                tactics: [
                    "Dead drift along the bottom.",
                    "Use heavier weight than you think — they live deep.",
                    "Green and tan body colors are universal."
                ],
                confidenceRating: 4,
                whenItWorks: "Year-round searching pattern. Especially effective in early spring before the hatch begins.",
                rigSuggestion: "Czech nymphing or deep indicator rig with a heavy point fly.",
                flies: [
                    { id: "green-rock-worm", name: "Green Rock Worm", sizes: "12-16", description: "Bright green caddis larva pattern — the classic western searching fly." },
                    { id: "caddis-larva-tan", name: "Tan Caddis Larva", sizes: "14-16", description: "Neutral tan body matches most cased caddis." }
                ]
            },
            {
                id: "pupa",
                name: "Pupa Stage",
                description: "Caddis pupae swim aggressively to the surface during the hatch, creating a dramatic rise form. The swing is critical here.",
                tactics: [
                    "The 'wet fly swing' — swing your fly across and downstream.",
                    "Rising retrieve as fly swings: lift the rod tip slowly.",
                    "Fish during the hatch, not before."
                ],
                confidenceRating: 5,
                whenItWorks: "During an evening hatch — look for swirling, chasing rise forms as fish intercept ascending pupae.",
                rigSuggestion: "Wet fly swing on a 10-12ft leader. No indicator. Let the fly swing naturally across current seams.",
                flies: [
                    { id: "x-caddis", name: "X-Caddis", sizes: "14-16", description: "Z-lon trailing shuck imitates the emerging pupa perfectly. Mother's Day Caddis staple." },
                    { id: "soft-hackle-caddis", name: "Soft Hackle Partridge", sizes: "14-16", description: "Classic wet fly that works on the swing throughout the hatch." },
                    { id: "olive-caddis-pupa", name: "Olive Caddis Pupa", sizes: "14-18", description: "Realistic translucent body. Fish it on the drop and swing." }
                ]
            },
            {
                id: "adult",
                name: "Adult Stage",
                description: "Adult caddis skitter across the surface on take-off, triggering explosive strikes. The Elk Hair Caddis is one of the most universally effective dry flies ever created.",
                tactics: [
                    "Skitter the fly across the surface — drag is good here!",
                    "Dead drift first, then animate at the end of the drift.",
                    "Fish into the evening and after dark for best results."
                ],
                confidenceRating: 5,
                whenItWorks: "Spring through fall evenings. The Mother's Day Caddis hatch is legendary in May across the western US.",
                rigSuggestion: "Single dry fly or double-dry setup. Skitter and twitch for aggressive takes.",
                flies: [
                    { id: "elk-hair-caddis", name: "Elk Hair Caddis", sizes: "12-18", description: "The definitive caddis adult pattern. Tie it in tan, olive, and black." },
                    { id: "stimulator-orange", name: "Orange Stimulator", sizes: "10-14", description: "Attractor caddis that also imitates stoneflies. Floats forever." },
                    { id: "goddard-caddis", name: "Goddard Caddis", sizes: "12-16", description: "All-deer-hair pattern. Virtually unsinkable." }
                ]
            }
        ]
    },

    stoneflies: {
        id: "stoneflies",
        name: "Stoneflies (Plecoptera)",
        overview: "Stoneflies are the giants of the aquatic insect world. Salmonflies and Golden Stones trigger some of the most explosive dry fly fishing of the year on big western rivers. Their nymphs — like Pat's Rubber Legs — are year-round staples.",
        stages: [
            {
                id: "nymph",
                name: "Nymph Stage",
                description: "Stonefly nymphs are among the largest aquatic insects — some taking 2-3 years to mature. They are a major food source year-round for large trout.",
                tactics: [
                    "Fish heavy — use tungsten beads and extra weight.",
                    "Target fast water, riffles, and rocky runs.",
                    "Bounce the bottom aggressively."
                ],
                confidenceRating: 5,
                whenItWorks: "Year-round. One of the most reliable nymph patterns in any river with stoneflies.",
                rigSuggestion: "Heavy tandem nymph rig. Stonefly on the point, smaller dropper 18 inches above. Fished tight-line or deep indicator.",
                flies: [
                    { id: "pats-rubber-legs", name: "Pat's Rubber Legs", sizes: "4-10", description: "The most versatile stonefly nymph. Black or brown, always in the box." },
                    { id: "tungsten-pats", name: "Tungsten Pat's", sizes: "6-10", description: "Heavier version for deep and fast water." },
                    { id: "black-stonefly", name: "Black Stonefly Nymph", sizes: "8-12", description: "Imitates the smaller winter/early spring stoneflies." },
                    { id: "20-incher", name: "20 Incher", sizes: "6-10", description: "Montana staple. Rubber legs move constantly in current." }
                ]
            },
            {
                id: "adult",
                name: "Adult Stage",
                description: "The adult stonefly hatch is one of the most anticipated events of the fly fishing calendar. Giant insects on the surface mean giant fish throwing caution to the wind.",
                tactics: [
                    "Fish big foam flies near the banks.",
                    "Dead drift, then skitter at the end.",
                    "Focus on morning and evening when fish are most active.",
                    "Fish the edges — adults crawl out on rocks and trees."
                ],
                confidenceRating: 5,
                whenItWorks: "Late May through July for Salmonflies. June-August for Golden Stones. Watch for adult bugs in streamside vegetation.",
                rigSuggestion: "Single large dry fly on 3x-4x tippet close to banks. Drop a stonefly nymph off the bend if action is slow.",
                flies: [
                    { id: "chubby-chernobyl", name: "Chubby Chernobyl", sizes: "6-10", description: "The modern gold standard for stonefly and hopper fishing. Floats all day." },
                    { id: "salmonfly-dry", name: "Adult Salmonfly", sizes: "2-6", description: "Imitates the giant orange Pteronarcys californica — king of western dry fly hatches." },
                    { id: "golden-stimulator", name: "Golden Stimulator", sizes: "8-12", description: "Imitates the smaller Golden Stonefly. Works throughout the summer." },
                    { id: "schroeder-pmx", name: "Schroeder's PMX", sizes: "8-12", description: "Colorado-style foam attractor stonefly." }
                ]
            }
        ]
    },

    terrestrials: {
        id: "terrestrials",
        name: "Terrestrials",
        overview: "Ants, beetles, grasshoppers, and other land-based insects fall into streams throughout summer and fall, often triggering the best dry fly fishing of the season. Big fish that ignore tiny hatches will crush a terrestrial.",
        image: "https://images.unsplash.com/photo-1626548307434-9e91e8aa8b44?q=80&w=2070&auto=format&fit=crop",
        stages: [
            {
                id: "ant",
                name: "Ants",
                description: "Ants are the most consistently productive terrestrial. Flying ant falls in late summer trigger explosive feeding frenzies even on pressured fish.",
                tactics: [
                    "Fish tight to the bank.",
                    "Flush-floating presentation — no floatant on the fly.",
                    "During a flying ant fall, match the swarm size and color exactly."
                ],
                confidenceRating: 5,
                whenItWorks: "Late June through October. Flying ant falls in August-September are especially potent.",
                rigSuggestion: "Single ant pattern on 5x-6x tippet with slack line presentation near banks.",
                flies: [
                    { id: "amys-ant", name: "Amy's Ant", sizes: "10-14", description: "Foam ant that floats high and supports large nymph droppers." },
                    { id: "flying-ant", name: "Flying Ant (Black)", sizes: "14-18", description: "Match flying ant swarms during the massive late summer falls." },
                    { id: "foam-ant", name: "Foam Ant (Cinnamon)", sizes: "16-18", description: "Cinnamon ants are extremely common and fish see them regularly." }
                ]
            },
            {
                id: "beetle",
                name: "Beetles",
                description: "Beetles are the most diverse insect group on earth. They fall into streams throughout summer and are taken eagerly — a sleeper pick that many overlook.",
                tactics: [
                    "Fish near overhanging branches and bankside vegetation.",
                    "Dead drift with zero movement — beetles don't swim.",
                    "A beetle under an ant or small dry fly is devastatingly effective."
                ],
                confidenceRating: 4,
                whenItWorks: "June through September wherever there's streamside vegetation. Cloudy days are especially productive.",
                rigSuggestion: "Double-dry: #14 foam beetle as the main fly, a #18 ant or midge 12 inches below.",
                flies: [
                    { id: "foam-beetle", name: "Black Foam Beetle", sizes: "12-16", description: "Flush floating with a foam back. A secret weapon on pressured fish." },
                    { id: "peacock-beetle", name: "Peacock Beetle", sizes: "14-16", description: "Peacock herl body with a shellback. Gorgeous and effective." }
                ]
            },
            {
                id: "hopper",
                name: "Grasshoppers",
                description: "Late summer hopper fishing on banks and meadow streams is as exciting as fly fishing gets. Big bugs, big fish, explosive strikes. The Parachute Hopper and Chubby Chernobyl are the two must-carry patterns.",
                tactics: [
                    "Slap the fly down hard near the bank — grasshoppers land with force.",
                    "Fish within 2 feet of the bank.",
                    "Don't be afraid of drag — hoppers kick and struggle.",
                    "Fish mid-day when hoppers are most active."
                ],
                confidenceRating: 5,
                whenItWorks: "August and September on freestone streams near meadows and grassy banks. The hotter and windier, the better.",
                rigSuggestion: "Single large hopper on 3x-4x with occasional twitching. Or hopper-dropper with a heavy nymph below.",
                flies: [
                    { id: "chubby-hopper", name: "Chubby Chernobyl", sizes: "8-12", description: "The king of hopper-dropper rigs. Floats enormous nymphs." },
                    { id: "parachute-hopper", name: "Parachute Hopper", sizes: "8-12", description: "More realistic profile with high-visibility post." },
                    { id: "dave-hopper", name: "Dave's Hopper", sizes: "8-12", description: "The classic deer hair hopper. Still catches massive fish." },
                    { id: "fat-albert", name: "Fat Albert", sizes: "8-12", description: "Thick foam body that lands with authority and floats forever." }
                ]
            },
            {
                id: "surface",
                name: "Surface & Warmwater Patterns",
                description: "Foam poppers, foam spiders, and surface bugs dominate warmwater fly fishing for bass and panfish. These patterns work anywhere fish feed aggressively near the surface — ponds, lakes, and warmwater rivers.",
                tactics: [
                    "Strip aggressively then let it sit — the pause triggers strikes.",
                    "Fish tight to structure: lily pads, fallen logs, dock pilings.",
                    "Poppers create noise and commotion. Spiders sit quietly.",
                    "Use a short, stiff 2x-3x leader for casting large bugs."
                ],
                confidenceRating: 4,
                whenItWorks: "May through September for warmwater species. Best in early morning and evening on calm days.",
                rigSuggestion: "Short 7.5ft leader in 2x-3x. Cast within a foot of structure and let it sit for 10-15 seconds before stripping.",
                flies: [
                    { id: "foam-spider-popper", name: "Foam Spider / Popper", sizes: "10-12", description: "Creates a commotion that panfish and bass can't resist. Easy to see, easy to strike." },
                    { id: "damsel-nymph", name: "Damsel Nymph", sizes: "12-14", description: "Slender olive nymph slow-stripped near aquatic vegetation. Deadly in stillwater." }
                ]
            }
        ]
    },

    streamers: {
        id: "streamers",
        name: "Streamers & Wet Flies",
        overview: "Streamers imitate baitfish, leeches, and large nymphs. They are the most effective way to target large, trophy trout — especially in the fall, during high water, or on low-light days. The Woolly Bugger is the most versatile fly ever tied.",
        image: "https://images.unsplash.com/photo-1567092736706-3d49f0f3e9a8?q=80&w=2070&auto=format&fit=crop",
        stages: [
            {
                id: "baitfish",
                name: "Baitfish Patterns",
                description: "Sculpin, dace, chubs, and shiners make up a huge part of a trophy trout's diet. Large streamers trigger the predatory instinct of the biggest fish in the river.",
                tactics: [
                    "Strip aggressively, then pause — hits often come on the pause.",
                    "Dead drift a streamer through deep pools for passive fish.",
                    "Fish the inside seam of bends where baitfish stack up.",
                    "Bump the bottom on the strip."
                ],
                confidenceRating: 5,
                whenItWorks: "Fall, early spring, high water, low light. When you want the biggest fish in the river, throw a streamer.",
                rigSuggestion: "7.5-9ft leader in 1x-3x. Strip retrieve with variable speed and frequent pauses.",
                flies: [
                    { id: "woolly-bugger", name: "Woolly Bugger (Olive/Black)", sizes: "4-10", description: "The most important fly ever tied. Leech, baitfish, big nymph — it's everything." },
                    { id: "clouser-minnow", name: "Clouser Minnow", sizes: "4-8", description: "Dives head-first on the strip — deadly for bass and trout alike." },
                    { id: "simi-seal-leech", name: "Simi Seal Leech", sizes: "10-12", description: "Arizona staple. Long fibers pulse on every movement. Dead-drifted or stripped." },
                    { id: "circus-peanut", name: "Circus Peanut", sizes: "2-4", description: "Articulated streamer that swims with incredible action." },
                    { id: "muddler-minnow", name: "Muddler Minnow", sizes: "4-8", description: "Classic sculpin imitation. Dead drift or strip aggressively." }
                ]
            },
            {
                id: "leeches",
                name: "Leeches & Worms",
                description: "Leeches are abundant in lakes and still water, and worm patterns are one of the most effective nymphs ever designed for high water. Confidence basics that produce in any condition.",
                tactics: [
                    "Slow strip retrieve for leeches — they undulate naturally.",
                    "Dead drift worms near the bottom on tailwaters.",
                    "Dead drift in lakes at moderate depth."
                ],
                confidenceRating: 4,
                whenItWorks: "Year-round. Especially effective after rain or high water when worms flush into the river.",
                rigSuggestion: "Indicator rig with a worm suspended near the bottom. Or stripped on a floating line in stillwater.",
                flies: [
                    { id: "san-juan-worm", name: "San Juan Worm (Red)", sizes: "10-12", description: "The most consistently effective fly in most tailwaters." },
                    { id: "squirmy-worm", name: "Squirmy Worm", sizes: "10-12", description: "Silicone worm that wiggles on every current variation." },
                    { id: "olive-leech-bugger", name: "Olive Leech Bugger", sizes: "6-10", description: "Marabou tail pulses in every current. Deadly in stillwater." }
                ]
            }
        ]
    }
};
