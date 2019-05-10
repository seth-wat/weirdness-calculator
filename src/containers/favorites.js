import { connect } from "react-redux";
import { getFavorites } from "../reducers/favorite-gifs";
import { Favorites } from "../components/Favorites";
import { ScoreFavorites } from "../components/ScoreFavorites";

export const mapStateToProps = state => ({
  likedGifs: getFavorites(state)
});

export default connect(mapStateToProps)(Favorites);
export const ScoredFavorites = connect(mapStateToProps)(ScoreFavorites);
