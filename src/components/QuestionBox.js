import React, { useState } from "react";

const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className=" kb-btn kb-btn-round kb-btn-2"
          onClick={() => {
            setAnswer([text]); //every button will have the onclick option, but the question has the setstate method, so we will set that one clicked answer.
            //setanswer will be an array where the only element will be the text
            selected(text);
          }}
        >
          <span>{text}</span>
        </button>
      ))}
    </div>
  );
};
export default QuestionBox;
