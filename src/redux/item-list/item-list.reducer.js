import { ItemActionTypes } from "./item-list.types";

import itemListMock from "../../mock/item-list.mock";

const INITIAL_STATE = {
  items: itemListMock,
};

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemActionTypes.SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default itemReducer;
