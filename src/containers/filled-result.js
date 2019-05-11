import { connect } from "react-redux";
import { getResultTitle, getResultURL } from "../reducers/search-results";
import { FilledResult } from "../components/FilledResult";

export const mapStateToProps = state => ({
  title: getResultTitle(state),
  resultURL: getResultURL(state)
});

export default connect(mapStateToProps)(FilledResult);
