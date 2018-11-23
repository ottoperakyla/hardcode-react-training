import { Map } from "immutable";
import personService from "../services/person";

const GET_PERSONS = "GET_PERSONS";
const GET_PERSONS_FULFILLED = "GET_PERSONS_FULFILLED";

const FIRE_PERSON = "FIRE_PERSON";
const FIRE_PERSON_FULFILLED = "FIRE_PERSON_FULFILLED";
const FIRE_PERSON_PENDING = "FIRE_PERSON_PENDING";

const HIRE_PERSON = "HIRE_PERSON";
const HIRE_PERSON_FULFILLED = "HIRE_PERSON_FULFILLED";

const defaultState = Map({
  persons: Map()
});

export const getPersons = () => ({
  type: GET_PERSONS,
  payload: personService.getPersons()
});

export const firePerson = id => ({
  type: FIRE_PERSON,
  payload: {
    promise: personService.firePerson(id),
    data: id // data can be used to pass extra data to pending events
  }
});

export const hirePerson = person => ({
  type: HIRE_PERSON,
  payload: personService.hirePerson(person)
});

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PERSONS_FULFILLED:
      return state.set("persons", Map(payload.map(p => [p.id, p])));

    case HIRE_PERSON_FULFILLED:
      return state.setIn(["persons", payload.id], payload);

    case FIRE_PERSON_FULFILLED:
      return state.removeIn(["persons", payload]);

    case FIRE_PERSON_PENDING:
      return state.updateIn(["persons", payload], person => {
        return {
          ...person,
          firing: true
        };
      });

    default:
      return state;
  }
}
