import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import itemReducer from "./item-list/item-list.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["itemList"],
};

const rootReducer = combineReducers({
  itemList: itemReducer,
});

export default persistReducer(persistConfig, rootReducer);
