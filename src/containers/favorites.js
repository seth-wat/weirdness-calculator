import { connect } from "react-redux";
import { getFavorites } from "../reducers/favorite-gifs";
import { Favorites } from "../components/Favorites";

export const mapStateToProps = state => ({
  likedGifs: getFavorites(state)
});

export default connect(mapStateToProps)(Favorites);
