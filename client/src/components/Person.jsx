import React from "react";
import Button from "./Button";
import styles from "./Person.pcss";
import personService from "../services/person";
import cx from "classnames";

const Person = props => {
  const { person, firePerson } = props;

  const classes = cx(styles.person, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <div className={classes}>
      <strong>{person.lastName}</strong>, {person.firstName} (age:{" "}
      {personService.formatAge(person.age)} years)
      <div>
        <Button
          block
          disabled={person.relatedToCEO}
          onClick={() => firePerson(person.id)}
        >
          Vapauta{" "}
          <span role="img" aria-label="Vapauta">
            💩
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Person;
