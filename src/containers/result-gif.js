import { getSelectedURL } from "../reducers/search-results";
import { Gif } from "../components/Gif";
import { connect } from "react-redux";

export const mapStateToProps = state => ({
  url: getSelectedURL(state)
});

export default connect(mapStateToProps)(Gif);
