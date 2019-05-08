import { setWeirdnessLevel } from "../actions/set-weirdness-level";
import { connect } from "react-redux";
import { WeirdnessSlider } from "../components/WeirdnessSlider";
import { getWeirdnessLevel } from "../reducers/search-data";
import { search } from "../thunks/search";

export const mapStateToProps = state => ({
  weirdnessLevel: getWeirdnessLevel(state)
});

export const mapDispatchToProps = dispatch => ({
  onSlide: level => {
    dispatch(setWeirdnessLevel(level));
    dispatch(search);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeirdnessSlider);
