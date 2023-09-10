import { useEffect, useState } from "react";
import { useQuizContext } from "../../context/hooks";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import Question from "../../components/Question";
import StartGame from "../../components/StartGame";

export default function Questions() {
  const { category } = useParams();
  const { filteredQuiz } = useQuizContext();
  const [start, setStart] = useState(false);
  function handleStart() {
    setStart(!start);
  }
  useEffect(() => {
    filteredQuiz(category);
  }, []);
  return (
    <Layout>
      <h1>Start Game</h1>
      {start ? (
        <Question handleStart={handleStart} />
      ) : (
        <StartGame category={category} handleStart={handleStart} />
      )}
    </Layout>
  );
}
