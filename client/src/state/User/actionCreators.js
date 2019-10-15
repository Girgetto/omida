  
import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';

export const login = createAction(actionTypes.LOGIN, user => ({ user }));