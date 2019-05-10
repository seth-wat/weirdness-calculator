import { favoritesRemaining } from "../reducers/favorite-gifs";
import { connect } from "react-redux";
import { CalculationStatus } from "../components/CalculationStatus";

export const mapStateToProps = state => ({
  gifsRemaining: favoritesRemaining(state)
});

export default connect(mapStateToProps)(CalculationStatus);
