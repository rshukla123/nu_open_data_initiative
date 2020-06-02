import React, { useEffect, createContext, useState } from "react";
import { getCategories, getDataTypes } from "./client";

const AppState = createContext(null);
const { Provider } = AppState;

const StateProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [dataTypes, setDataTypes] = useState([]);
  const [query, setQuery] = useState("");
  const setSearch = (value) => {
    setQuery(value);
  };
  useEffect(() => {
    getCategories(setCategories);
    getDataTypes(setDataTypes);

    // once a GET for datasets exists:
    //getDatasets(query);
  });

  const api = { categories, dataTypes, setSearch, query };
  return <Provider value={api}>{children}</Provider>;
};

export { AppState, StateProvider };