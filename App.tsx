import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Component/Form";
import Quiz from "./Component/Quiz";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [isFormFill, setIsFormFill] = useState(false);

  const [Result] = useState<any>(0);

  const handleFirstName = (e: any) => {
    // console.log(e.target.value);
    setFirstName(e.target.value);
  };

  const handleOnRadioGenderSelect = (e: any) => {
    // console.log(e.target.value);
    setGender(e.target.value);
  };
  const handleLanguage = (e: any) => {
    // console.log(e.target.value, "fsdf");
    setLanguage(e.target.value);
  };
  useEffect(() => {
    if (gender !== "" && language !== "" && firstName !== "" && lastName !== "") {
      setIsFormFill(true);
    } else {
      setIsFormFill(false);
    }
  }, [gender, language, firstName, lastName]);

  useEffect(() => {
    console.log("ans", Result);
  }, [Result]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Form/>
          }
        ></Route>
        <Route
          path="/quizPage"
          element={
            <Quiz/>
          }
        ></Route>
        <Route
          path="/result"
          element={
            <div className="result">
              <div>Result: 
              {Result}</div>
              <div>
                <span className="green">Write answer:
                {Result}</span>
              </div>
              
              <div>
                <span className="red">wrong answer:
                {5 - Result}</span>
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
