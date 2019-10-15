import { handleActions } from 'redux-actions';
import initialState from './initial.state';
import * as actions from './actionCreators';

const ui = handleActions(
  {},
  initialState,
);

export default ui;