import { getWeirdnessScore } from "../reducers/favorite-gifs";
import { connect } from "react-redux";
import { WeirdnessScore } from "../components/WeirdnessScore";

export const mapStateToProps = state => ({
  score: getWeirdnessScore(state)
});

export default connect(mapStateToProps)(WeirdnessScore);
