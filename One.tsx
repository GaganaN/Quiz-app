import React, { useEffect } from "react";

const One = ({Data, language, handleAnsCompletion, setAnswer, Answer, handleCrctAnswer,}: any) => {
  let qusion = "Q" + language;
  let ans = "A" + language;
  let option = "O" + language;
  let count = 0;

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
    } else if (Answer === "") {
      handleAnsCompletion(Data.id, false);
    }
  }, [Answer]);
  return (
    <div>
      {Data?.[qusion]}
      <br/>
      {console.log("Data 7", Data[option])}
      {Data[option].map((item: any) => {
        count = count + 1;
        return (
          <div key={item}>
            <input name="option" type="radio" value={item} onChange={handleAnsChange} checked={Answer === item ? true : false}>
            </input>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default One;