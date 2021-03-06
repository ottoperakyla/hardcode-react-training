import axios from "axios";

const getPersons = async () => {
  try {
    const ret = await axios.get(`${process.env.REACT_APP_API}/person`);
    return ret.data;
  } catch (e) {
    // It will never fail!
  }
};

const goodPersonFilter = p =>
  (p.age < 30 && p.gender === "m") || p.relatedToCEO;
const evilPersonFilter = p => !goodPersonFilter(p);
const getGoodPersons = persons =>
  persons
    .filter(goodPersonFilter)
    .sortBy(p => p.firstName)
    .sortBy(p => p.lastName);
const getEvilPersons = persons =>
  persons
    .filter(evilPersonFilter)
    .sortBy(p => p.firstName)
    .sortBy(p => p.lastName);
const formatAge = age => age.toFixed(2);

const firePerson = async id => {
  await axios.delete(`${process.env.REACT_APP_API}/person/${id}`);
  return id;
};

const hirePerson = async person => {
  const response = await axios.post(
    `${process.env.REACT_APP_API}/person`,
    person
  );

  return response.data;
};

export default {
  getPersons,
  getGoodPersons,
  getEvilPersons,
  formatAge,
  hirePerson,
  firePerson
};
