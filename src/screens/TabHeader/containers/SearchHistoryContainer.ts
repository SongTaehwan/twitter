import { connect } from 'react-redux';
import SearchHistory from '../SearchHistory';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
  };
};

const mapDispatchToProps = {
  // ... normally is an object full of action creators
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchHistory);
