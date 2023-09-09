import { createContext, useState } from "react";
import { categories, questions } from "./data";

const initialState = {
  categories: [],
  questions: [],
};

export const QuizContext = createContext(initialState);

export const QuizProvider = ({ children }) => {
  const [state, setState] = useState({
    categories,
    questions,
  });
  return (
    <QuizContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
