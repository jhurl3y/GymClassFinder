const mapClassData = classData => {
  return classData
    .map(({ name, slug, start, end, day, area, start_unix, duration }) => ({
        name,
        slug,
        start,
        end,
        day,
        area,
        start_unix,
        duration
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
  const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ];

  return days[new Date().getDay()];
};

const getLocations = () => {
  return [
    { label: "Ballsbridge", value: 'ballsbridge' },
    { label: "Rathfarnam",  value: 'rathfarnham' },
    { label: "Clarendon",   value: 'clarendon-street' },
    { label: "Ashbourne",   value: 'ashbourne' },
    { label: "Cork",        value: 'cork' },
    { label: "Drogheda",   value: 'drogheda' },
    { label: "Naas",        value: 'naas' },
    { label: "Swords",      value: 'swords' },
  ]
};

export { 
  mapClassData,
  filterByDay,
  filterEarlier,
  getCurrentDay,
  getLocations,
};
