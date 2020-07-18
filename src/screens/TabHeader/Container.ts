import { connect } from 'react-redux';
import TabHeader from './TabHeader';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = {
  // ... normally is an object full of action creators
};

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);
