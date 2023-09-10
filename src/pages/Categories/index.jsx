import Layout from "../../components/Layout";
import CategoryList from "../../components/CategoryList";
import { useQuizContext } from "../../context/hooks";
import { useEffect } from "react";

export default function Categories() {
  const { resetQuiz } = useQuizContext();
  useEffect(() => {
    resetQuiz();
  }, []);
  return (
    <Layout>
      <h1>Seleccione una categoría</h1>
      <CategoryList />
    </Layout>
  );
}
