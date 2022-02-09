import React, { useEffect, useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import styles from "./Quiz.module.css";
import { Link } from "react-router-dom";
import One from "./Question/One";
import Two from "./Question/Two";
import Three from "./Question/Three";
import Four from "./Question/Four";
import Five from "./Question/Five";

const Quiz = ({
  language,
  Data,
  setFinalResultTotal,
  finalResultTotal,
}: any) => {
  const [ManageQ, setManageQ] = useState<any>([]);
  const Qstnvsbl: any = [];
  const [Answer1, setAnswer1] = useState<any>("");
  const [Answer2, setAnswer2] = useState<any>("");
  const [Answer3, setAnswer3] = useState<any>("");
  const [Answer4, setAnswer4] = useState<any>("");
  const [Answer5, setAnswer5] = useState<any>("");

  Data.map((itm: any) => {
    Qstnvsbl[itm.id - 1] = {
      Ans: false,
      completion: false,
      visibility: true,
      id: itm.id,
    };
  });

  const handleQstnBtnClick = (id: any) => {
    let arr = ManageQ.map((itm: any) => {
      if (itm.id !== id) {
        itm.visibility = false;
      } else {
        itm.visibility = true;
      }

      return itm;
    });
    setManageQ(arr);
  };

  const handleCrctAns = (id: any, correctAnswer: any) => {
    let arr = ManageQ.map((itm: any) => {
      if (itm.id == id) {
        itm.Ans = correctAnswer;
      }
      return itm;
    });
    setManageQ(arr);
  };

  const handleAnsCompletion = (id: any, completion: any) => {
    let arr = ManageQ.map((itm: any) => {
      if (itm.id == id) {
        itm.completion = completion;
      }

      return itm;
    });
    setManageQ(arr);
  };

  useEffect(() => {
    Qstnvsbl[0].visibility = true;

    setManageQ(Qstnvsbl);
  }, []);

  useEffect(() => {
    let countCrctAns = 0;
    console.log(ManageQ);
    ManageQ.map((itm: any) => {
      if (itm.Ans) {
        countCrctAns = countCrctAns + 1;

        console.log("ans", countCrctAns);
      }
    });

    setFinalResultTotal(countCrctAns);
  }, []);

  const [completed, setCompleted] = useState<any>(false);
  let completion = false;
  useEffect(() => {
    ManageQ.map((itm: any) => {
      if (!itm.completion) {
        completion = true;
      }
    });
    if (completion) {
      setCompleted(false);
    } else {
      setCompleted(true);
    }
  }, []);

  useEffect(() => {
    console.log(finalResultTotal);
  }, [finalResultTotal]);
  return (
    <div>
      <div className={styles.contain}>
        {Data.map((itm: any) => {
          return (
            <button
              key={itm.id}
              className={
                ManageQ[itm.id - 1]?.completion
                  ? styles.redans
                  : styles.grayans
              }
              onClick={() => handleQstnBtnClick(itm.id)}>{itm.id}</button>
          );
        })}
      </div>
      <div className={styles.qstn}>
        <div className={styles.content}>
          <div>
          <BrowserRouter>
          <Routes>
            <div>
              {ManageQ[0].visibility = true}
              <Route path="/one" element={
              <One
                data={Data[0]}
                language={language}
                handleAnsCompletion={handleAnsCompletion}
                setInputAnswer={setAnswer1}
                inputAnswer={Answer1}
                handleCrctAns={handleCrctAns}>
                </One>}></Route>
            </div>
            <div>
              {ManageQ[1].visibility = true}
              <Route path="/two" element={
              <Two
                data={Data[1]}
                language={language}
                handleAnsCompletion={handleAnsCompletion}
                setInputAnswer={setAnswer1}
                inputAnswer={Answer1}
                handleCrctAns={handleCrctAns}>
                </Two>}></Route>
            </div>
            <div>
              {ManageQ[2].visibility = true}
              <Route path="/three" element={
              <Three
                data={Data[2]}
                language={language}
                handleAnsCompletion={handleAnsCompletion}
                setInputAnswer={setAnswer1}
                inputAnswer={Answer1}
                handleCrctAns={handleCrctAns}>
                </Three>}></Route>
            </div>
            <div>
              {ManageQ[3].visibility = true}
              <Route path="/four" element={
              <Four
                data={Data[3]}
                language={language}
                handleAnsCompletion={handleAnsCompletion}
                setInputAnswer={setAnswer1}
                inputAnswer={Answer1}
                handleCrctAns={handleCrctAns}>
                </Four>}></Route>
            </div>
          {ManageQ[4].visibility = true}
           <div>
           <Route path="/five" element={
           <Five
             data={Data[4]}
             language={language}
             handleAnsCompletion={handleAnsCompletion}
             setInputAnswer={setAnswer1}
             inputAnswer={Answer1}
             handleCrctAns={handleCrctAns}>
             </Five>}></Route>
         </div>
         </Routes>
         </BrowserRouter>
         </div>
          <div className="btnAnswer">
            <Link to="/result">
              <input
                type="button"
                value="submit"
                disabled={completed ? false : true}></input>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
