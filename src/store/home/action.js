import * as home from './action-type';

export const addCount = (data) => {
  console.log(data);
  return{
    type: home.ADDCOUNT,
    data,
  }
};

export const reduceCount = (data) => {
  console.log(data);
  return {
    type: home.REDUCECOUNT,
    data
  }
};
