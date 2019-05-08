import { setSearchTerm } from "../actions/set-search-term";
import { connect } from "react-redux";
import { GifSearch } from "../components/GifSearch";

export const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export const mapDispatchToProps = dispatch => ({
  handleChange: e => {
    const action = setSearchTerm(e.target.value);
    dispatch(action);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GifSearch);
