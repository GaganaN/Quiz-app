import React, { useEffect } from "react";
import {Link} from "react-router-dom"


const Four = ({Data, language, handleAnsCompletion, setAnswer, Answer, handleCrctAnswer,}: any) => {
  let qusion = "Q" + language;
  let ans = "A" + language;

  const handleAnsChange = (e: any) => {
    setAnswer(e.target.value);
    console.log(Data[ans]);
    if (Data[ans].toUpperCase().trim() === e.target.value.toUpperCase().trim()) {
      handleCrctAnswer(Data.id, true);
      console.log("caorrect answer");
    } else {
      handleCrctAnswer(Data.id, false);
    }
  };
  useEffect(() => {
    if (Answer.trim() !== "") {
      handleAnsCompletion(1, true);
    } else if (Answer.trim() === "") {
      handleAnsCompletion(1, false);
    }
  }, [Answer]);
  return (
    <div>
      {Data?.[qusion]}
      <br></br>
      <input
        type="text"
        value={Answer}
        className="AnsBox"
        onChange={handleAnsChange}
      ></input>
      <Link to="/five">
            <input type="submit" value={"next>"} ></input>
         </Link>
    </div>
  );
};

export default Four;