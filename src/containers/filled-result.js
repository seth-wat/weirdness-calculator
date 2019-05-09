import { connect } from "react-redux";
import { getResultURL } from "../reducers/search-results";
import { getSubmittedTerm } from "../reducers/search-data";
import { FilledResult } from "../components/FilledResult";

export const mapStateToProps = state => ({
  searchTerm: getSubmittedTerm(state),
  resultURL: getResultURL(state)
});

export default connect(mapStateToProps)(FilledResult);
