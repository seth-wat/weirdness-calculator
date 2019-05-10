import { isTermLikeable } from "../reducers/favorite-gifs";
import { likeTerm } from "../thunks/like-term";
import { connect } from "react-redux";
import { LikeButton } from "../components/LikeButton";

export const mapStateToProps = state => ({
  isTermLikeable: isTermLikeable(state)
});

export const mapDispatchToProps = dispatch => ({
  likeTerm: () => dispatch(likeTerm)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeButton);
