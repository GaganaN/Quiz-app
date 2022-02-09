import React, { useEffect } from "react";

const Two = ({Data, language, handleAnsCompletion, setAnswer, Answer, handleCrctAnswer,}: any) => {
    let count = 0;
    let qusion = "Q" + language;
  let ans = "A" + language;
  let option = "O" + language;

  const handleAnsChange = (e: any) => {
    setAnswer(e.target.value);
    localStorage.setItem("Yse Or No", e.target.value);

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

      {console.log("Data 75", Data[option])}
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

export default Two;