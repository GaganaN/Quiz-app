import React, { useEffect } from "react";
import {Link} from "react-router-dom"



const Five = ({Data, language, handleAnsCompletion, handleCrctAns, setAnswer, Answer,}: any) => {
  console.log("Data 10", Data);
  let qusion = "Q" + language;
  let option = "O" + language;
  let answerArr = "A" + language;

  const handleOptionChange = (e: any) => {
    console.log(e.target.value);
    let isValueRepited = false;
    for (let i = 0; i < Answer.length; i++) {
      if (Answer[i] === e.target.value) {
        isValueRepited = true;
      }
    }
    if (!isValueRepited) {
      let arry = [e.target.value, ...Answer];
      setAnswer(arry);
    }
    if (isValueRepited) {
      let arryDeleted = Answer.filter((item: any) => {
        return item !== e.target.value;
      });
      console.log("removedValue", arryDeleted);
      setAnswer(arryDeleted);
    }
  };

  useEffect(() => {
    console.log(Answer);

    if (Answer.length !== 0) {
      handleAnsCompletion(Data.id, true);
    } else {
      handleAnsCompletion(Data.id, false);
    }

    if (Answer.length !== Data[answerArr].length) {
      handleCrctAns(Data.id, false);
    } else {
      let isAnsCorrect = true;
      for (let i = 0; i < Data[answerArr].length; i++) {
        if (!Answer.includes(Data[answerArr][i])) {
          isAnsCorrect = false;
        }
      }
      if (isAnsCorrect) {
        handleCrctAns(Data.id, true);
      } else {
        handleCrctAns(Data.id, false);
      }
    }
  }, [Answer]);
  return (
    <div>
      {Data[qusion]}
      <br/>
      {Data[option].map((item: any) => {
        return (
          <div key={item}>
            <input type="checkbox" onChange={handleOptionChange} value={item} checked={Answer.includes(item)}>
            </input>
            {item}
          </div>
        );
      })}
         <Link to="/four">
            <input type="submit" value={"<prev"} ></input>
         </Link>
         <Link to="/result">
            <input type="submit" value={"submit-test"} ></input>
         </Link>
    </div>
  );
};
export default Five;