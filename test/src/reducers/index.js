import { combineReducers } from 'redux';

import suggestedReducer from './suggested';
import starredReducer from './starred';

export default combineReducers({
  suggested: suggestedReducer,
  starred: starredReducer
});
