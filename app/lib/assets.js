const images = {
  gymClasses: {
      abAttack: require('../assets/images/classes/ab-attack.png'),
      aquafit: require('../assets/images/classes/ab-attack.png'),
      barbells: require('../assets/images/classes/barbells.png'),
  },
};

const getGymClassImage = (gymClass) => {
  const gymClasses = images.gymClasses;
  switch (gymClass) {
      case 'ab-attack':
          image = gymClasses.abAttack
          break;
      case 'barbells':
          image = gymClasses.barbells
          break;
      default:
          image = gymClasses.abAttack
  }
  return image;
};

export { getGymClassImage };
