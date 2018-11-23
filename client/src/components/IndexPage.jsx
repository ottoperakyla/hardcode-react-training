import React from "react";
import PersonList from "./PersonList";
import AddPersonForm from "./AddPersonForm";
import personService from "../services/person";

const IndexPage = ({ persons, firePerson, hirePerson }) => {
  return (
    <>
      <AddPersonForm hirePerson={hirePerson} />

      <PersonList
        title="Good"
        persons={personService.getGoodPersons(persons)}
        firePerson={firePerson}
        showMetadata
      />

      <PersonList
        title="Bad"
        persons={personService.getEvilPersons(persons)}
        firePerson={firePerson}
      />
    </>
  );
};

export default IndexPage;
