import { connect } from "react-redux";
import { isFavoritesRemaining } from "../reducers/favorite-gifs";
import CalculateButton from "../components/CalculateButton";

export const mapStateToProps = state => ({
  isFavoritesRemaining: isFavoritesRemaining(state)
});

export default connect(mapStateToProps)(CalculateButton);
