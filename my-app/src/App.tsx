import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import fetchUsers from "./api/userApi";

function App() {
  useEffect(() => {
    fetchUsers();
  });
  return (
    <div className="App">
      <p> User Table</p>
    </div>
  );
}

export default App;
