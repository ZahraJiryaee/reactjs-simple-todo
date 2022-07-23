import { ItemActionTypes } from "./item-list.types";

export const setItems = (data) => ({
  type: ItemActionTypes.SET_ITEMS,
  payload: data,
});

export const deleteItem = (dataList, id) => (dispatch) => {
  let deleteTarget = dataList.find((i) => i.id === id);
  dataList.splice(dataList.indexOf(deleteTarget), 1);
  dispatch({
    type: ItemActionTypes.SET_ITEMS,
    payload: dataList,
  });
};
