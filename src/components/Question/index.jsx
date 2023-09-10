import "./question.css";
import { useQuizContext } from "../../context/hooks";
import { useState } from "react";

export default function Question({ handleStart }) {
  const [value, setValue] = useState(false);
  const {
    categoryQuiz,
    index,
    answers,
    resetIndexScore,
    nextQuizIndex,
    incrementScore,
  } = useQuizContext();
  function reset() {
    resetIndexScore();
    handleStart();
  }
  function selectResponse(e) {
    if (categoryQuiz[index]["correct_answer"] === e.target.innerText) {
      incrementScore();
      e.target.id = "correct";
    } else {
      e.target.id = "incorrect";
    }
    setValue(true);
  }
  function nextOrFinallyQuiz() {
    if (index < categoryQuiz.length - 1) {
      nextQuizIndex();
      setValue(false);
    } else {
      // Mostrar resultado
    }
  }
  return (
    <section className="question_section">
      <article className="question_article-1">
        <div>
          <h3>
            {index + 1} / {categoryQuiz?.length}
          </h3>
          <h3>
            Dificultad: <span>{categoryQuiz[index]?.difficulty}</span>
          </h3>
        </div>
        <button onClick={reset}>Reiniciar</button>
      </article>
      <article className="question_article-2">
        <h4>{categoryQuiz[index]?.question}</h4>
        <div>
          {answers.map((res) => (
            <button
              key={res}
              onClick={selectResponse}
              disabled={value ? true : false}
            >
              {res}
            </button>
          ))}
        </div>
        <button
          className="button"
          onClick={nextOrFinallyQuiz}
          disabled={index < categoryQuiz.length ? false : true}
        >
          {index < categoryQuiz.length - 1 ? "Siguiente Pregunta" : "Finalizar"}
        </button>
      </article>
    </section>
  );
}
