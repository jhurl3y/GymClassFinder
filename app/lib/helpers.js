const massageClassData = classData =>
  classData
    .map(({ name, start: time, day, start_unix }) => ({
      name,
      time,
      day,
      start_unix
    }))


const filterByDay = (gymClasses, day) => {
    return gymClasses
      .filter(gymClass => day === gymClass.day);
};

const filterEarlier = (gymClasses) => {
  return gymClasses
    .filter(gymClass => new Date().getTime() > gymClass.start_unix);
};

const getCurrentDay = () => {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  return days[new Date().getDay() - 1];
};

export { massageClassData, filterByDay, filterEarlier, getCurrentDay };