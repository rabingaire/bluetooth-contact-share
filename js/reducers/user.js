import type { Action } from '../actions/types';
import { ADD_USER } from '../actions/userActionCreator';

export type State = {
    user: object,
    drawerDisabled: boolean
}

const defaultState = {
  user: null
};

export default function (state:State = defaultState, action:Action): State {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload
      }
      break;
    default:
      return state;
  }
}
