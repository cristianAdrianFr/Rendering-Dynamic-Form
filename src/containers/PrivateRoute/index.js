import { connect } from 'react-redux';
import PrivateRoute from '../../components/PrivateComponent';
const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};

export default connect(mapStateToProps)(PrivateRoute);