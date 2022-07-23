import { createSelector } from "reselect";

const selectItemList = (state) => state.itemList;

export const selectItems = createSelector(
  [selectItemList],
  (itemList) => itemList.items
);
