const images = {
    gymClasses: {
        abAttack: require('../assets/images/classes/ab-attack.png'),
        aquafit: require('../assets/images/classes/aquafit.png'),
        barbells: require('../assets/images/classes/barbells.png'),
        beauJack: require('../assets/images/classes/beau-jack-boxing.png'),
        bodySculpt: require('../assets/images/classes/bodysculpt.png'),
        bootcamp: require('../assets/images/classes/bootcamp.png'),
        default: require('../assets/images/classes/default.png'),
        boxfit: require('../assets/images/classes/boxfit.png'),
        bums: require('../assets/images/classes/bums-legs-core.png'),
        cardio: require('../assets/images/classes/cardio-combat.png'),
        circuits: require('../assets/images/classes/circuits.png'),
        combo: require('../assets/images/classes/combo0.png'),
        default: require('../assets/images/classes/default.png'),
        easytone: require('../assets/images/classes/easytone.png'),
        family: require('../assets/images/classes/family-fitness.png'),
        fitball: require('../assets/images/classes/fitball-2.png'),
        freestyle: require('../assets/images/classes/freestyle-training.png'),
        functional: require('../assets/images/classes/functional-fitness.png'),
        hiit: require('../assets/images/classes/hiit.png'),
        keiser: require('../assets/images/classes/your-guide-to-indoor-cycling.png'),
        kettlebells: require('../assets/images/classes/kettlebells.png'),
        kids: require('../assets/images/classes/kids-fit7yrs-12yrs.png'),
        pilates: require('../assets/images/classes/pilates.png'),
        rebounding: require('../assets/images/classes/rebounding-2.png'),
        rt: require('../assets/images/classes/rt24.png'),
        step: require('../assets/images/classes/step-aerobics-2.png'),
        stretch: require('../assets/images/classes/stretch-relax.png'),
        strongZumba: require('../assets/images/classes/strong-zumba.png'),
        suspension: require('../assets/images/classes/suspension-training.png'),
        teen: require('../assets/images/classes/teen-fit.png'),
        tempo: require('../assets/images/classes/tempo-lift.png'),
        xfit: require('../assets/images/classes/x-fit.png'),
        yoga: require('../assets/images/classes/yoga.png'),
        zumba: require('../assets/images/classes/zumba.png'),
    },
};

const getGymClassImage = (gymClass) => {
    const gymClasses = images.gymClasses;
    switch (gymClass) {
        case 'ab-attack':
            image = gymClasses.abAttack
            break;
        case 'aquafit':
            image = gymClasses.aquafit
            break;
        case 'barbells':
            image = gymClasses.barbells
            break;
        case 'beau-jack-boxing':
            image = gymClasses.beauJack
            break;
        case 'bodysculpt':
            image = gymClasses.bodySculpt
            break;
        case 'bootcamp':
            image = gymClasses.bootcamp
            break;
        case 'boxfit':
            image = gymClasses.boxfit
            break;
        case 'bums-legs-core':
            image = gymClasses.bums
            break;
        case 'cardio-combat':
            image = gymClasses.cardio
            break;
        case 'circuits':
            image = gymClasses.circuits
            break;
        case 'combo0':
            image = gymClasses.combo
            break;
        case 'easytone':
            image = gymClasses.easytone
            break;
        case 'family-fitness':
            image = gymClasses.family
            break;
        case 'fitball-2':
            image = gymClasses.fitball
            break;
        case 'freestyle-training':
            image = gymClasses.freestyle
            break;
        case 'functional-fitness':
            image = gymClasses.functional
            break;
        case 'hiit':
            image = gymClasses.hiit
            break;
        case 'your-guide-to-indoor-cycling':
            image = gymClasses.keiser
            break;
        case 'kettlebells':
            image = gymClasses.kettlebells
            break;
        case 'kids-fit7yrs-12yrs':
            image = gymClasses.kids
            break;
        case 'pilates':
            image = gymClasses.pilates
            break;
        case 'rebounding-2':
            image = gymClasses.rebounding
            break;
        case 'rt24':
            image = gymClasses.rt
            break;
        case 'step-aerobics-2':
            image = gymClasses.step
            break;
        case 'stretch-relax':
            image = gymClasses.stretch
            break;
        case 'strong-zumba':
            image = gymClasses.strongZumba
            break;
        case 'suspension-training':
            image = gymClasses.suspension
            break;
        case 'teen-fit':
            image = gymClasses.teen
            break;
        case 'tempo-lift':
            image = gymClasses.tempo
            break;
        case 'x-fit':
            image = gymClasses.xfit
            break;
        case 'yoga':
            image = gymClasses.yoga
            break;
        case 'zumba':
            image = gymClasses.zumba
            break;
        default:
            image = gymClasses.default
    }
    return image;
};

export { getGymClassImage };
