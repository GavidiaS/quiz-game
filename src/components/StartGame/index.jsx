import "./start.css";
import { useQuizContext } from "../../context/hooks";

export default function StartGame({ category, handleStart }) {
  const { categories } = useQuizContext();
  const isCategory = categories.find((cat) => cat.category === category);
  return (
    <section className="start_section">
      <article className="start_article">
        <figure>
          <img src={isCategory?.img} alt={category} />
          <span>{isCategory?.category.toUpperCase()}</span>
        </figure>
        <button onClick={handleStart}>Iniciar Quiz</button>
      </article>
    </section>
  );
}
