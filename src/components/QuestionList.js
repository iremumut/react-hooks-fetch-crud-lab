import React from "react";
import QuesitonItem from "./QuestionItem"

function QuestionList({questions, changeQuestions}) {

  const questionsItems = questions.map((q) => {
    return <QuesitonItem question={q} key={q.id} changeQuestions={changeQuestions} /> 
  })
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsItems}</ul>
    </section>
  );
}

export default QuestionList;
