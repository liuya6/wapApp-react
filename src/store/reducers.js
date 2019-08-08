import { combineReducers } from 'redux';
import { HomeData } from "./home/reducer";
const rootReducer = combineReducers({
  HomeData
});
// 导出统一的reducer
export default rootReducer;
