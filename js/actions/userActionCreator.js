import type { Action } from './types';
export const ADD_USER = 'ADD_USER';

export function addUser(payload):Action {
  return {
    type: ADD_USER,
    payload
  }
}
