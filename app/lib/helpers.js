const mapClassData = classData => {
  return classData
    .map(({ name, start: time, day, start_unix }) => ({
      name,
      time,
      day,
      start_unix
    }))
};

const filterByDay = (gymClasses, day) => {
    return gymClasses
      .filter(gymClass => day === gymClass.day);
};

const filterEarlier = gymClasses => {
  return gymClasses
    .filter(gymClass => new Date().getTime() > gymClass.start_unix);
};

const getCurrentDay = () => {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  return days[new Date().getDay() - 1];
};

const getLocations = () => {
  return [
    { label: "Ballsbridge", value: 'ballsbridge' },
    { label: "Rathfarnam",  value: 'rathfarnham' },
    { label: "Clarendon",   value: 'clarendon-street' },
  ]
}

export { mapClassData, filterByDay, filterEarlier, getCurrentDay, getLocations };