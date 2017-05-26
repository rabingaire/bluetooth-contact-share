
import type { Action } from '../actions/types';
import { OPEN_DRAWER, CLOSE_DRAWER, TAB_VALUE } from '../actions/drawer';

export type State = {
    drawerState: string,
    drawerDisabled: boolean
}

const initialState = {
  drawerState: 'closed',
  drawerDisabled: true,
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === OPEN_DRAWER) {
    return {
      ...state,
      drawerState: 'opened',
    };
  }

  if (action.type === CLOSE_DRAWER) {
    return {
      ...state,
      drawerState: 'closed',
    };
  }

  if (action.type === TAB_VALUE) {
    return {
      ...state,
      tabState: action.payload,
    };
  }
  return state;
}
