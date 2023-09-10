import { createContext, useState } from "react";
import { categories, questions } from "./data";
import { arraySliceSort, arrayRandomSort } from "./logic";

const initialState = {
  categories,
  score: 0,
  index: 0,
  categoryQuiz: [],
  answers: [],
};

export const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  function nextQuizIndex() {
    setState((prevState) => ({ ...prevState, index: prevState.index + 1 }));
    answersQuiz();
  }
  function resetIndexScore() {
    setState((prevState) => ({ ...prevState, index: 0, score: 0 }));
  }
  function incrementScore() {
    setState((prevState) => ({ ...prevState, score: prevState.score + 1 }));
  }
  function resetQuiz() {
    setState((prevState) => ({
      ...prevState,
      index: 0,
      score: 0,
      categoryQuiz: [],
      answers: [],
    }));
  }
  function filteredQuiz(category) {
    setState((prevState) => ({
      ...prevState,
      categoryQuiz: arraySliceSort(
        questions.filter((quiz) => quiz.category === category)
      ),
    }));
    answersQuiz();
  }
  function answersQuiz() {
    setState((prevState) => ({
      ...prevState,
      answers: arrayRandomSort([
        ...prevState.categoryQuiz[prevState.index]["incorrect_answers"],
        prevState.categoryQuiz[prevState.index]["correct_answer"],
      ]),
    }));
  }
  return (
    <QuizContext.Provider
      value={{
        ...state,
        nextQuizIndex,
        resetIndexScore,
        resetQuiz,
        filteredQuiz,
        answersQuiz,
        incrementScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
