import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import styles from "./Person.pcss";
import personService from "../services/person";
import cx from "classnames";
import posed from "react-pose";

const FadeOut = posed.div({
  visible: { opacity: 1 },
  firing: { opacity: 0.5, transition: { duration: 500 } }
});

const Person = props => {
  const { person, firePerson } = props;
  const classes = cx(styles.person, {
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <FadeOut className={classes} pose={person.firing ? "firing" : "visible"}>
      <Link to={`persons/${person.id}`}>
        <strong>{person.lastName}</strong>, {person.firstName} (age:{" "}
        {personService.formatAge(person.age)} years){" "}
      </Link>
      <div>
        <Button
          block
          disabled={person.relatedToCEO || person.firing}
          onClick={() => firePerson(person.id)}
        >
          Vapauta{" "}
          <span role="img" aria-label="Vapauta">
            💩
          </span>
        </Button>
      </div>
    </FadeOut>
  );
};

export default Person;
