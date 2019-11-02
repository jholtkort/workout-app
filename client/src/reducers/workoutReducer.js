import {
  GET_WORKOUTS,
  ADD_WORKOUT,
  EDIT_WORKOUT,
  DELETE_WORKOUT,
  WORKOUTS_LOADING
} from "../actions/types";

const initialState = {
  workouts: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_WORKOUTS:
      return {
        ...state,
        workouts: action.payload,
        loading: false
      };
    case WORKOUTS_LOADING:
      return {
        ...state,
        loading: true
      };
    case ADD_WORKOUT:
      return {
        ...state,
        workouts: [...state.workouts, action.payload]
      };
    default:
      return state;
  }
}
