import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ItemList from "./components/item-list/item-list.component";
import AddEditItem from "./components/add-edit-item/add-edit-item.component";

import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/item-list" element={<ItemList />} />
        <Route path="/item-list/:id" element={<AddEditItem />} />
        <Route path="/" element={<Navigate replace to="/item-list" />} />
        <Route path="*" element={<Navigate replace to="/item-list" />} />
      </Routes>
    </div>
  );
};

export default App;
