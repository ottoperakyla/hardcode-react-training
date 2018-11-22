import React from "react";
import { List } from "immutable";
import personService from "../services/person";
import PersonList from "./PersonList";
import { TypographyStyle, GoogleFont } from "react-typography";
import typography from "../services/typography";
import "./App.pcss";
import posed from "react-pose";

const AnimatedWrapper = posed.div({
  left: { x: "-100%", opacity: 0 },
  right: { x: 0, delay: 1000, opacity: 1, transition: { duration: 2000 } }
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
