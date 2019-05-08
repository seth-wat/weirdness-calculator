import { updateSearchInput } from "../actions/update-search-input";
import { connect } from "react-redux";
import { GifSearch } from "../components/GifSearch";
import { submit } from "../thunks/submit";
import { getSearchInput } from "../reducers/search-input";

export const mapStateToProps = state => ({
  searchTerm: getSearchInput(state)
});

export const mapDispatchToProps = dispatch => ({
  handleChange: e => {
    const action = updateSearchInput(e.target.value);
    dispatch(action);
  },
  search: () => {
    dispatch(submit);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GifSearch);
