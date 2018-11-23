import React, { Suspense, lazy } from "react";
import posed from "react-pose";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "./App.pcss";

const IndexPage = lazy(() => import("./IndexPage"));
const PersonPage = lazy(() => import("./PersonPage"));

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

        <Link to="/">
          <h1>Fraktio ERP 6000</h1>
        </Link>

        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return (
                <Suspense fallback={<Loading />}>
                  <IndexPage
                    persons={persons.toList()}
                    hirePerson={hirePerson}
                    firePerson={firePerson}
                  />
                </Suspense>
              );
            }}
          />

          <Route
            exact
            path="/persons/:id"
            render={props => {
              const person = persons.get(props.match.params.id);
              return (
                <Suspense fallback={<Loading />}>
                  <PersonPage person={person} />
                </Suspense>
              );
            }}
          />
        </Switch>
      </AnimatedContainer>
    );
  }
}

export default App;
