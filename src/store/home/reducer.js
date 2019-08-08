import * as home from "./action-type";

let defaultState = {
  count: 0
};

export const HomeData = (state=defaultState,action)=>{
  switch (action.type) {
    case home.ADDCOUNT:
      return {...state,...{count:state.count+action.data}};
    case home.REDUCECOUNT:
      return {...state,...{count:state.count-action.data}};
    default:
      return state;
  }
};
