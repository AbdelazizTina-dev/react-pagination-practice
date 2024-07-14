import { useEffect, useState } from "react";
import "./App.css";
import { Pagination } from "./Pagination";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecipes(data.recipes);
      });
  }, []);

  return <Pagination data={recipes} elementPerPage={5} />;
}

export default App;
