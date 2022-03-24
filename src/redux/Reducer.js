import { DECREMENT, INCREMENT } from "./types";

const initialeState = {
  count: 0,
  show: false,
};

function Reducer(state = initialeState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return {
        ...state,
        count: state.count > 0 ? state.count - action.payload : 0,
      };
    default:
      return state;
  }
}
export default Reducer;
