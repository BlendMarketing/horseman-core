import * as types from '../constants/ActionTypes';

const initialState = {};

export default function paginations(state = initialState, action) {
  switch (action.type) {
    case types.SET_PAGE_TOTAL: {
      return {
        ...state,
        [action.handle]: { ...action.data },
      };
    }
    case types.SET_CURRENT_PAGE: {
      return {
        ...state,
        [action.handle]: { ...action.data },
      };
    }
    default: {
      return state;
    }
  }
}
