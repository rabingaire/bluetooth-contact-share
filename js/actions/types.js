export type Action =
  { type: 'OPEN_DRAWER'}
    | { type: 'CLOSE_DRAWER'}
    | { type: 'TAB_VALUE'}
    
export type Dispatch = (action:Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch:Dispatch, getState:GetState) => any;
export type PromiseAction = Promise<Action>;
