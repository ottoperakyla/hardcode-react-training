import { connect } from "react-redux";
import App from "../components/App";
import { getPersons, hirePerson, firePerson } from "../ducks/person";

const mapStateToProps = state => ({
  persons: state.person.get("persons")
});

const mapDispatchToProps = {
  getPersons,
  hirePerson,
  firePerson
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
