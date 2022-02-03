import React from "react";

function QuestionItem({ question,changeQuestions }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function deleteHandle(){
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "DELETE",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      }
    });
    changeQuestions();
  }

  function updateQuestion(e){
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "PATCH",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          "correctIndex": e.target.value
        } )
    });

  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(e) => updateQuestion(e)}>{options}</select>
      </label>
      <button onClick={deleteHandle}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
