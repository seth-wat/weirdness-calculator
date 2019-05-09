import { connect } from "react-redux";
import { DefaultResult } from "../components/DefaultResult";
import { isResultLoading } from "../reducers/search-results";

export const mapStateToProps = state => ({
  isResultLoading: isResultLoading(state)
});

export default connect(mapStateToProps)(DefaultResult);
