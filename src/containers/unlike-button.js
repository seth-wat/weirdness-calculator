import { UnlikeButton } from "../components/UnlikeButton";

import { connect } from "react-redux";
import { removeFavorite } from "../actions/remove-favorite";

export const mapDispatchToProps = dispatch => ({
  unlike: term => dispatch(removeFavorite(term))
});

export default connect(
  undefined,
  mapDispatchToProps
)(UnlikeButton);
