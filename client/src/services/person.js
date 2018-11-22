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
const getGoodPersons = persons => persons.filter(goodPersonFilter);
const getEvilPersons = persons => persons.filter(evilPersonFilter);
const formatAge = age => age.toFixed(2);

export default {
  getPersons,
  getGoodPersons,
  getEvilPersons,
  formatAge
};
