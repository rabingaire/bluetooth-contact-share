import type { Action } from './types';
export const ADD_USER = 'ADD_USER';
export const LOGOUT = 'LOGOUT';


export function addUser(payload):Action {
  return {
    type: ADD_USER,
    payload
  }
}

export function logout(): Action {
  return {
    type: LOGOUT
  }
}
