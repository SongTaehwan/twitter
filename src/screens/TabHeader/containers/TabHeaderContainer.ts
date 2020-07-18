import { connect } from 'react-redux';
import { addHistory } from '@actions/searchHistoryAction';
import { getLoadingStatus } from '@selectors/loading';
import { Store } from '@models/store';
import TabHeader from '../TabHeader';

const mapStateToProps = (state: Store) => ({
  isLoading: getLoadingStatus(state),
});

export default connect(mapStateToProps, { addHistory })(TabHeader);
