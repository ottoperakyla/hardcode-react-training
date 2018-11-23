import React from "react";
import posed from "react-pose";
import { Route, Switch } from "react-router";
import IndexPage from "./IndexPage";
import PersonPage from "./PersonPage";
import Loading from "./Loading";
import "./App.pcss";

const AnimatedContainer = posed.div({
  left: { x: "-100%", opacity: 0 },
  right: { x: 0, delay: 1000, opacity: 1, transition: { duration: 1000 } }
});

class App extends React.Component {
  componentDidMount() {
    this.props.getPersons();
  }

  render() {
    const { persons, loading, hirePerson, firePerson } = this.props;

    return (
      <AnimatedContainer initialPose="left" pose="right">
        {loading && <Loading />}

        <h1>Fraktio ERP 6000</h1>

        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return (
                <IndexPage
                  persons={persons.toList()}
                  hirePerson={hirePerson}
                  firePerson={firePerson}
                />
              );
            }}
          />

          <Route
            exact
            path="/persons/:id"
            render={props => {
              const person = persons.get(props.match.params.id);
              return <PersonPage person={person} />;
            }}
          />
        </Switch>
      </AnimatedContainer>
    );
  }
}

export default App;
