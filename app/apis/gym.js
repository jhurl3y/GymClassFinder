import axios from 'axios';

const ROOT_URL = 'https://gymplus.ie/wp-json/timtables/v1/timetable';

const GetClasses = location => {
  const url = `${ROOT_URL}`;
  const params = {
    location: location,
  };

  return axios
    .get(url, { params })
    .then(({ data }) => data)
    .catch(error => console.error(error));
};

export { GetClasses };