import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./actions/UserslistActions";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.usersList);
  const { loading, error, users } = usersList;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <>
        {loading
          ? "Loading...."
          : error
          ? error.message
          : users.map((x) => <h3>{x.name}</h3>)}
      </>
    </div>
  );
}
