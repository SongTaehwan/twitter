import { connect } from 'react-redux';
import TabHeader from '../TabHeader';
import { Store } from '@models/store';
import { getLoadingState, getLoadingStatus } from '@selectors/loading';

const mapStateToProps = (state: Store) => getLoadingStatus(state);

const mapDispatchToProps = {
  // ... normally is an object full of action creators
};

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);
