import {combineReducers} from 'redux';
import {ReducerMovie} from './ReducerMovie';
import {ReducerCalc} from './ReducerCalc';

const rootReducer = combineReducers({
  Calc: ReducerCalc,
  Movie: ReducerMovie,
});
export default rootReducer;
