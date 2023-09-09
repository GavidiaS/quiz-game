import "./layout.css";
import Header from "../Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="layout_main">{children}</main>
    </>
  );
}
