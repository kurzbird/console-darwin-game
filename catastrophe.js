const COLD = "cold"
const HOT = "hot"
const PREDATORS = "predators"
const TALL_PLANTS = "tall plants"
const VIRUS = "virus"
const VOLCANO = "volcano"

const CATASTROPHES = [COLD, HOT, PREDATORS, TALL_PLANTS, VIRUS, VOLCANO]

const SURVIVAL_CHANCE = {
    [COLD]: {
        legs: { [SHORT_LEGS]: 20, [MEDIUM_LEGS]: 10, [LONG_LEGS]: 0 },
        hair: { [NO_HAIR]: 0, [SHORT_HAIR]: 10, [MEDIUM_HAIR]: 15, [LONG_HAIR]: 20 },
        size: { [THIN]: -10, [MEDIUM]: 10, [BULKY]: 20 },
        neck: { [SHORT_NECK]: 20, [MEDIUM_NECK]: 10, [LONG_NECK]: 0 }
    },

    [HOT]: {
        legs: { [SHORT_LEGS]: 0, [MEDIUM_LEGS]: 10, [LONG_LEGS]: 20 },
        hair: { [NO_HAIR]: 20, [SHORT_HAIR]: 10, [MEDIUM_HAIR]: 0, [LONG_HAIR]: -10 },
        size: { [THIN]: 20, [MEDIUM]: 10, [BULKY]: 0 },
        neck: { [SHORT_NECK]: 0, [MEDIUM_NECK]: 10, [LONG_NECK]: 20 }
    },

    [PREDATORS]: {
        legs: { [SHORT_LEGS]: -10, [MEDIUM_LEGS]: 10, [LONG_LEGS]: 30 },
        size: { [THIN]: 20, [MEDIUM]: 10, [BULKY]: 0 },
        camo: { [STRIPES]: 30, [NO_STRIPES]: 0 }
    },

    [TALL_PLANTS]: {
        legs: { [SHORT_LEGS]: 0, [MEDIUM_LEGS]: 20, [LONG_LEGS]: 40 },
        neck: { [SHORT_NECK]: 0, [MEDIUM_NECK]: 20, [LONG_NECK]: 40 }
    },

    // 60% max survival
    [VIRUS]: {
        legs: { [SHORT_LEGS]: 20, [MEDIUM_LEGS]: 10, [LONG_LEGS]: 0 },
        size: { [THIN]: 20, [MEDIUM]: 10, [BULKY]: 0 },
        neck: { [SHORT_NECK]: 0, [MEDIUM_NECK]: 10, [LONG_NECK]: 20 }
    },

    // 60% max survival
    [VOLCANO]: {
        legs: { [SHORT_LEGS]: 20, [MEDIUM_LEGS]: 10, [LONG_LEGS]: 0 },
        size: { [THIN]: 20, [MEDIUM]: 10, [BULKY]: 0 },
        neck: { [SHORT_NECK]: 20, [MEDIUM_NECK]: 10, [LONG_NECK]: 0 }
    }
}
