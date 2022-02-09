import React, { useEffect } from "react";
import {Link} from 'react-router-dom'

const Three = ({Data, language, handleAnsCompletion, setAnswer, Answer, handleCrctAnswer,}: any) => {
  let qusion = "Q" + language;
  let ans = "A" + language;
  let option = "O" + language;

  const handleAnsChange = (e: any) => {
    setAnswer(e.target.value);
    localStorage.setItem("yseOrNo", e.target.value);
    if (Data[ans] === e.target.value) {
      handleCrctAnswer(Data.id, true);
    } else {
      handleCrctAnswer(Data.id, false);
    }
  };
  useEffect(() => {
    if (Answer !== "") {
      handleAnsCompletion(Data.id, true);
    }
    else if (Answer === "") {
      handleAnsCompletion(Data.id, false);
    }
  }, [Answer]);
  return (
    <div>
      {Data?.[qusion]}
      <br></br>
      <input name="Yes-Or-NO" type="radio" value={Data[option][0]} onChange={handleAnsChange} checked={Answer === Data[option][0] ? true : false}>
      </input>
      {Data[option][0]}
      <br/>
      <input name="Yes-Or-NO" type="radio" value={Data[option][1]} onChange={handleAnsChange} checked={Answer === Data[option][1] ? true : false}>
      </input>
      {Data[option][1]}

      <Link to="/four">
            <input type="submit" value={"next>"} ></input>
         </Link>
    </div>
  );
};

export default Three;