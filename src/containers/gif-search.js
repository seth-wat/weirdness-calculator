import { updateSearchInput } from "../actions/update-search-input";
import { connect } from "react-redux";
import { GifSearch } from "../components/GifSearch";
import { submit } from "../thunks/submit";

export const mapStateToProps = state => ({
  searchTerm: state.searchInput.value
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
