const SHORT_LEGS = "short legs"
const MEDIUM_LEGS = "medium legs"
const LONG_LEGS = "long legs"
const LEGS = [SHORT_LEGS, MEDIUM_LEGS, LONG_LEGS]

const THIN = "thin"
const MEDIUM = "medium"
const BULKY = "bulky"
const SIZE = [THIN, MEDIUM, BULKY]

const NO_HAIR = "no hair"
const SHORT_HAIR = "short hair"
const MEDIUM_HAIR = "medium hair"
const LONG_HAIR = "long hair"
const HAIR = [NO_HAIR, SHORT_HAIR, MEDIUM_HAIR, LONG_HAIR]

const STRIPES = "stripes"
const NO_STRIPES = "no stripes"
const CAMO = [STRIPES, NO_STRIPES]

class Traits {
    constructor(legs, size, hair, camo,) {
        this.legs = legs;
        this.size = size;
        this.hair = hair;
        this.camo = camo;
    }
}

function create_random_offspring() {
    return new Traits(
        random_element(LEGS),
        random_element(SIZE),
        random_element(HAIR),
        random_element(CAMO)
    )
}

function random_element(array) {
    return array[Math.floor(Math.random() * array.length)]
}
