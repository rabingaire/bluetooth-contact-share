
import type { Action } from './types';

export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';
export const TAB_VALUE = 'TAB_VALUE';

export function openDrawer():Action {
  return {
    type: OPEN_DRAWER,
  };
}

export function closeDrawer():Action {
  return {
    type: CLOSE_DRAWER,
  };
}

export function selectTab(data):Action {
  return {
    type: TAB_VALUE,
    payload: data,
  };
}
