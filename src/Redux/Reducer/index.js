import {combineReducers} from 'redux';
import {ReducerMovie} from './ReducerMovie';
import {ReducerCalc} from './ReducerCalc';
import {ReducerNote} from './ReducerNote';
import {ReducerLogin} from './ReducerLogin';

const rootReducer = combineReducers({
  Calc: ReducerCalc,
  Movie: ReducerMovie,
  Note: ReducerNote,
  isLogged: ReducerLogin,
});
export default rootReducer;
