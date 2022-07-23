import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteItem } from "../../redux/item-list/item-list.action";

import { selectItems } from "../../redux/item-list/item-list.selectors";

const ItemList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const listItem = useSelector(selectItems);

  const handleAddItem = () => {
    return navigate("/item-list/new");
  };

  const handleEditItem = (item) => {
    return navigate(`/item-list/${item.id}`);
  };

  const handleDeleteItem = (item) => {
    const clone = [...listItem];
    dispatch(deleteItem(clone, item.id));
  };

  return (
    <div>
      {listItem.map((item) => (
        <div key={item.id}>
          {item.title} - {item.date} -{" "}
          <button onClick={() => handleEditItem(item)}>edit</button> -{" "}
          <button onClick={() => handleDeleteItem(item)}>delete</button>
        </div>
      ))}
      <button onClick={handleAddItem}>add new item</button>
    </div>
  );
};

export default ItemList;
