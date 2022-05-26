import { combineReducers } from 'redux';
import { peopleReducer } from './modules/people/reducer';
import { filmReducer } from './modules/film/reducer';
import { drawerReducer } from './modules/drawer/reducer';
import { loadingReducer } from './modules/loading/reducer';

export default combineReducers({
  people: peopleReducer,
  film: filmReducer,
  drawer: drawerReducer,
  loading: loadingReducer
})
