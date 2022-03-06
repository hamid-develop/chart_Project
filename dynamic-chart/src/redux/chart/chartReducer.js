import { chartActionType } from "./chartActionType";

const initialState = {
  chartData: [],
};


export const chartReducer = (state = initialState, action) => {
  switch (action.payload) {
    case chartActionType.SET_CHART_DATA:
      return {
        ...state,
        chartData: action.payload,
      };
    default:
      return state;
  }
};
