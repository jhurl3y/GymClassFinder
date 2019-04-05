import axios from 'axios';

const ROOT_URL = 'https://gymplus.ie/wp-json/timtables/v1/timetable';

const GetClasses = params => {
  const url = `${ROOT_URL}`;

  return axios
    .get(url, { params })
    .then(({ data }) => data)
    .catch(error => console.error(error));
};

export { GetClasses };
