const mapClassData = classData => {
  return classData.map(
    ({
      name,
      slug,
      start,
      end,
      day,
      area,
      start_unix,
      duration,
      location
    }) => ({
      name,
      slug,
      start,
      end,
      day,
      area,
      start_unix,
      duration,
      location
    })
  );
};

// location null!

const filterByDay = (gymClasses, day) => {
  return gymClasses.filter(gymClass => day === gymClass.day);
};

const filterByLocation = (gymClasses, location) => {
  return gymClasses.filter(gymClass => location === gymClass.location);
};

const filterEarlier = gymClasses => {
  return gymClasses.filter(
    gymClass => new Date().getTime() > gymClass.start_unix
  );
};

const getCurrentDay = () => {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  return days[new Date().getDay()];
};

const getLocations = () => {
  return [
    { label: "Ballsbridge", value: "ballsbridge" },
    { label: "Rathfarnam", value: "rathfarnham" },
    { label: "Clarendon", value: "clarendon-street" },
    { label: "Ashbourne", value: "ashbourne" },
    { label: "Cork", value: "cork" },
    { label: "Drogheda", value: "drogheda" },
    { label: "Naas", value: "naas" },
    { label: "Swords", value: "swords" }
  ];
};

const getDays = () => {
  return [
    { label: "Monday", value: "monday" },
    { label: "Tuesday", value: "tuesday" },
    { label: "Wednesday", value: "wednesday" },
    { label: "Thursday", value: "thursday" },
    { label: "Friday", value: "friday" },
    { label: "Saturday", value: "saturday" },
    { label: "Sunday", value: "sunday" }
  ];
};

export {
  mapClassData,
  filterByDay,
  filterByLocation,
  filterEarlier,
  getCurrentDay,
  getLocations,
  getDays
};
