import React, { memo } from "react";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import personService from "../services/person";
import Person from "./Person";

const PersonList = props => {
  const { persons, title, firePerson, showMetadata } = props;

  if (persons.length === 0) {
    return <div>No one here.</div>;
  }

  const averageAge =
    persons.reduce((acc, p) => acc + p.age, 0) / persons.count();

  return (
    <div>
      <h2>{title}</h2>
      {showMetadata && (
        <h3>Average age: {personService.formatAge(averageAge)} years</h3>
      )}

      {persons.map(person => (
        <Person key={person.id} person={person} firePerson={firePerson} />
      ))}
    </div>
  );
};

PersonList.propTypes = {
  showMetadata: PropTypes.bool,
  title: PropTypes.string.isRequired,
  persons: ImmutablePropTypes.list.isRequired,
  firePerson: PropTypes.func.isRequired
};

PersonList.defaultProps = {
  showMetadata: false
};

export default memo(PersonList);
