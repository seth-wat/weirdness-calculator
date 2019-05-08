import { setWeirdnessLevel } from "../actions/set-weirdness-level";
import { connect } from "react-redux";
import { WeirdnessSlider } from "../components/WeirdnessSlider";

export const mapStateToProps = state => ({
  weirdnessLevel: state.searchData.weirdnessLevel
});

export const mapDispatchToProps = dispatch => ({
  onSlide: level => {
    dispatch(setWeirdnessLevel(level));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeirdnessSlider);
