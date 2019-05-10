import { clearResults } from "../actions/clear-results";
import { clearFavorites } from "../actions/clear-favorites";
import { clearSearchData } from "../actions/clear-search-data";
import { connect } from "react-redux";
import StartOverButton from "../components/StartOverButton";
import { clearSearchInput } from "../actions/clear-search-input";

export const mapDispatchToProps = dispatch => ({
  startOver: () => {
    dispatch(clearResults());
    dispatch(clearFavorites());
    dispatch(clearSearchData());
    dispatch(clearSearchInput());
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(StartOverButton);
