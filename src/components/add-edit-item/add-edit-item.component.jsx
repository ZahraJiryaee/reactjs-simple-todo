import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { setItems } from "../../redux/item-list/item-list.action";

import { selectItems } from "../../redux/item-list/item-list.selectors";

import generateUniqueId from "../../services/unique-id-generator.service";

const AddEditItem = () => {
  const { id: itemId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const listItem = useSelector(selectItems);

  const [mode, setMode] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [isItemIdValid, setIsItemIdValid] = useState(true);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    if (itemId === "new") {
      setMode("add");
      setTitleValue("");
      setDateValue("");
      setIsItemIdValid(true);
    } else {
      setMode("edit");
      const item = listItem.find((i) => i.id.toString() === itemId);
      if (item) {
        setTitleValue(item.title);
        setDateValue(item.date);
        setIsItemIdValid(true);
        setEditItem(item);
      } else {
        setIsItemIdValid(false);
      }
    }
  }, [itemId, listItem]);

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };
  const handleDateChange = (e) => {
    setDateValue(e.target.value);
  };

  const onSaveClick = () => {
    if (mode === "add") {
      const result = [
        ...listItem,
        { id: generateUniqueId(), title: titleValue, date: dateValue },
      ];
      dispatch(setItems(result));
    } else {
      const clone = [...listItem];
      const targetEditIndex = clone.indexOf(editItem);
      clone[targetEditIndex].title = titleValue;
      clone[targetEditIndex].date = dateValue;
      dispatch(setItems(clone));
    }
    navigate("/");
  };

  const onCancelClick = () => {
    navigate("/");
  };

  const handleSaveDisable = () => {
    return titleValue.trim().length === 0 || dateValue.trim().length === 0
      ? true
      : false;
  };

  return (
    <div>
      {isItemIdValid ? (
        <>
          title:{" "}
          <input
            value={titleValue}
            type="text"
            name=""
            id=""
            onChange={(e) => handleTitleChange(e)}
          />
          date:{" "}
          <input
            value={dateValue}
            type="date"
            name=""
            id=""
            onChange={(e) => handleDateChange(e)}
          />
          <button onClick={onSaveClick} disabled={handleSaveDisable()}>
            save
          </button>
          <button onClick={onCancelClick}>cancel</button>{" "}
        </>
      ) : (
        <p>this id is not valid</p>
      )}
    </div>
  );
};

export default AddEditItem;
