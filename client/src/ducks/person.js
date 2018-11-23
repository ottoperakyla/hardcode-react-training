import { Map, List } from "immutable";
import personService from "../services/person";

const GET_PERSONS_PENDING = "GET_PERSONS_PENDING";
const GET_PERSONS_REJECTED = "GET_PERSONS_REJECTED";
const GET_PERSONS_FULLFILLED = "GET_PERSONS_FULLFILLED";
const FIRE_PERSON = "FIRE_PERSON";
const HIRE_PERSON = "HIRE_PERSON";

const defaultState = Map({
  persons: List()
});

export const getPersons = () => {
  return async dispatch => {
    dispatch({ type: GET_PERSONS_PENDING });
    try {
      const payload = await personService.getPersons();
      dispatch({ type: GET_PERSONS_FULLFILLED, payload });
    } catch (e) {
      dispatch({ type: GET_PERSONS_REJECTED, payload: e, error: true });
    }
  };
};

export const firePerson = id => ({
  type: FIRE_PERSON,
  payload: id
});

export const hirePerson = person => ({
  type: HIRE_PERSON,
  payload: person
});

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PERSONS_FULLFILLED:
      return state.set("persons", List(payload));

    case FIRE_PERSON:
      return state.update("persons", persons =>
        persons.filter(p => p.id !== payload)
      );

    case HIRE_PERSON:
      return state.update("persons", persons => persons.concat(payload));

    default:
      return state;
  }
}
