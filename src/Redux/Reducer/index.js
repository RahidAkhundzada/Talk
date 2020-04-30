import {combineReducers} from 'redux';
import {ReducerMovie} from './ReducerMovie';
import {ReducerCalc} from './ReducerCalc';
import {ReducerNote} from './ReducerNote';

const rootReducer = combineReducers({
  Calc: ReducerCalc,
  Movie: ReducerMovie,
  Note: ReducerNote,
});
export default rootReducer;
