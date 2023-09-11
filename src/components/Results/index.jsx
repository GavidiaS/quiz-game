import "./results.css";
import { useQuizContext } from "../../context/hooks";
import { Link } from "react-router-dom";

export default function Results({ close, handleStart }) {
  const { score, categoryQuiz, resetIndexScore } = useQuizContext();
  const result = Math.floor((score / categoryQuiz.length) * 100);
  function reset() {
    resetIndexScore();
    handleStart();
    close();
  }
  return (
    <aside className="results_aside">
      <article className="results_article">
        <h2>Resultados</h2>
        <div className="results_div">
          <h4>{result}%</h4>
          <span>
            Respuestas correctas: {score} / {categoryQuiz.length}
          </span>
        </div>
        <div className="results_div">
          <button onClick={reset}>Volver a intentar</button>
          <Link to="/" onClick={close}>
            Volver al Inicio
          </Link>
        </div>
      </article>
    </aside>
  );
}
