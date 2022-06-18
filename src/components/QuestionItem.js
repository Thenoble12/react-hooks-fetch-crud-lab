import React from "react";

function QuestionItem({ order, question, deleteQuestion, updateAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  )); 

   
  return (
    <li>
      <h4>Question {order}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={(e)=>{updateAnswer(id, e.target.value)}} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={()=>{deleteQuestion(id)}}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
