import React from "react";
import "./App.css";
import Forms from "./Forms";
import FormSpiner from "./FormSpiner";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/Forms"
          element={
            <React.Fragment>
              <Forms />
            </React.Fragment>
          }
        />
        <Route
          path="/FormSpiner"
          element={
            <React.Fragment>
              <FormSpiner />
            </React.Fragment>
          }
        />
      </Routes>
    </>
  );
}

export default App;
