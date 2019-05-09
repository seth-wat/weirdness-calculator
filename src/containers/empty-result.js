import { connect } from "react-redux";
import { EmptyResult } from "../components/EmptyResult";
import { didResultError } from "../reducers/search-results";

export const mapStateToProps = state => ({
  didResultError: didResultError(state)
});

export default connect(mapStateToProps)(EmptyResult);
