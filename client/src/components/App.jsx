import React from "react";
import { List } from "immutable";
import posed from "react-pose";
import PersonList from "./PersonList";
import AddPersonForm from "./AddPersonForm";
import { TypographyStyle, GoogleFont } from "react-typography";
import typography from "../services/typography";
import personService from "../services/person";
import "./App.pcss";

const AnimatedWrapper = posed.div({
  left: { x: "-100%", opacity: 0 },
  right: { x: 0, delay: 1000, opacity: 1, transition: { duration: 0 } }
});

class App extends React.Component {
  state = {
    persons: List()
  };
  async componentDidMount() {
    const persons = await personService.getPersons();
    this.setState(() => ({ persons: List(persons) }));
  }

  // using arrow function keeps correct the same this value when function is passed to child
  // no need to use function.bind this way
  firePerson = id => {
    this.setState(state => ({
      persons: state.persons.filter(p => p.id !== id)
    }));
  };

  hirePerson = person => {
    this.setState(state => ({
      persons: state.persons.concat(person)
    }));
  };

  componentWillUnmount() {
    // this can be useful for cleanup
  }

  render() {
    const { persons } = this.state;

    return (
      <AnimatedWrapper initialPose="left" pose="right">
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />

        <h1>Fraktio ERP 6000</h1>

        <AddPersonForm hirePerson={this.hirePerson} />

        <PersonList
          title="Good"
          persons={personService.getGoodPersons(persons)}
          firePerson={this.firePerson}
          showMetadata
        />

        <PersonList
          title="Bad"
          persons={personService.getEvilPersons(persons)}
          firePerson={this.firePerson}
        />
      </AnimatedWrapper>
    );
  }
}

export default App;
