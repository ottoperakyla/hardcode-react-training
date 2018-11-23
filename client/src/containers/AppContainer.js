import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getPersons, hirePerson, firePerson } from "../ducks/person";
import App from "../components/App";
import { compose } from "recompose";

const mapStateToProps = state => ({
  persons: state.person.get("persons"),
  loading: Boolean(state.ui.get("loading"))
});

const mapDispatchToProps = {
  getPersons,
  hirePerson,
  firePerson
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(App);
