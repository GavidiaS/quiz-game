import { useContext } from "react";
import { QuizContext } from "..";

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  return context;
};
