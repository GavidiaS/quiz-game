import { useRoutes } from "react-router-dom";
import Categories from "../Categories";
import Questions from "../Questions";

export default function AppRoutes() {
  const routes = useRoutes([
    { path: "/", Component: Categories },
    { path: "/category/:category", Component: Questions },
  ]);
  return routes;
}
