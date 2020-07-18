import { connect } from 'react-redux';
import SearchHistory from '../SearchHistory';
import { getHistory } from '@selectors/history';
import { Store } from '@models/store';

const mapStateToProps = (state: Store) => ({ history: getHistory(state) });

export default connect(mapStateToProps, {})(SearchHistory);
