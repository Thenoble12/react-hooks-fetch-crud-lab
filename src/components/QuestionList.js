import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState([]);

  const handleDelete = (id) => {
    const remaining = questions.filter((e) => e.id !== id)     
   
      fetch(`http://localhost:4000/questions/${id}`, {
        method: "DELETE",
      })
      .then((r) => r.json())
      .then(() => setQuestions(remaining));      
  }

  const handleAnswerChange = (id, index) => {
    const updatedQuestions = questions.map((question) => (question.id === id) ? (question.correctIndex = index) : (null))
     
    //  let targetQuestion = questions.find((question) => (question.id === id)) 
    //  targetQuestion.correctIndex = index;
    //  let changed =  


      fetch(`http://localhost:4000/questions/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correctIndex: index,
        })
      })
        .then((r) => r.json())
        .then((d) => console.log(questions))

  }  
  
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((items) => setQuestions(items));
  }, []);
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{ questions.map((question, index) => {            
           return <QuestionItem order={index+1} question={question} deleteQuestion={handleDelete} updateAnswer={handleAnswerChange} />         
      })}</ul>
    </section>
  );
}

export default QuestionList;
