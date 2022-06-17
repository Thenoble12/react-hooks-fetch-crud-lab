import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((items) => setQuestions(items));
  }, []);
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{ questions.map((question, index) => {
           <QuestionItem key={index} question={(question)}/>
      })}</ul>
    </section>
  );
}

export default QuestionList;
