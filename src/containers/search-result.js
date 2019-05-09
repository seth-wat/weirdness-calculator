import { isResultEmpty } from "../reducers/search-results";
import { connect } from "react-redux";
import { SearchResult } from "../components/SearchResult";

export const mapStateToProps = state => ({
  isResultEmpty: isResultEmpty(state)
});

export default connect(mapStateToProps)(SearchResult);
