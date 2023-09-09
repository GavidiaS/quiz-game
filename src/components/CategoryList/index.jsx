import "./list.css";
import { useQuizContext } from "../../context/hooks";
import CategoryCard from "../CategoryCard";

export default function CategoryList() {
  const { categories } = useQuizContext();
  return (
    <section className="list_section">
      {categories?.map((category) => (
        <CategoryCard
          key={category?.id}
          category={category?.category}
          src={category?.img}
          alt={`Categoría ${category?.category}`}
          gradientColor={category?.category?.toLowerCase()}
        />
      ))}
    </section>
  );
}
