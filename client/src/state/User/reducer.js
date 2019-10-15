import { handleActions } from 'redux-actions';
import initialState from './initial.state';

const user = handleActions(
  {},
  initialState,
);

export default user;
