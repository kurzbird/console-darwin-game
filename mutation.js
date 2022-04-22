const SHORT_LEGS = "short legs"
const MEDIUM_LEGS = "medium legs"
const LONG_LEGS = "long legs"
const LEGS = [SHORT_LEGS, MEDIUM_LEGS, LONG_LEGS]

const THIN = "thin"
const MEDIUM = "medium"
const BULKY = "bulky"
const SIZE = [THIN, MEDIUM, BULKY]

const SHORT_HAIR = "short hair"
const MEDIUM_HAIR = "medium hair"
const LONG_HAIR = "long hair"
const HAIR = [SHORT_HAIR, MEDIUM_HAIR, LONG_HAIR]

const STRIPES = "stripes"
const STRIPELESS = "stripeless"
const CAMOUFLAGE = [STRIPES, STRIPELESS]

class Mutation {
    constructor(legs, size, hair, camouflage,) {
        this.legs = legs;
        this.size = size;
        this.hair = hair;
        this.camouflage = camouflage;
    }

}

function get_random_mutation() {
    return new Mutation(
        random_element(LEGS),
        random_element(SIZE),
        random_element(HAIR),
        random_element(CAMOUFLAGE)
    )
}

function random_element(array) {
    return array[Math.floor(Math.random() * array.length)]
}
