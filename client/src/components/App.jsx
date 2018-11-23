import React from "react";
import posed from "react-pose";
import PersonList from "./PersonList";
import AddPersonForm from "./AddPersonForm";
import { TypographyStyle, GoogleFont } from "react-typography";
import typography from "../services/typography";
import personService from "../services/person";
import "./App.pcss";

const AnimatedContainer = posed.div({
  left: { x: "-100%", opacity: 0 },
  right: { x: 0, delay: 1000, opacity: 1, transition: { duration: 0 } }
});

class App extends React.Component {
  componentDidMount() {
    this.props.getPersons();
  }

  render() {
    const { persons, hirePerson, firePerson } = this.props;

    return (
      <AnimatedContainer initialPose="left" pose="right">
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />

        <h1>Fraktio ERP 6000</h1>

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
      </AnimatedContainer>
    );
  }
}

export default App;
