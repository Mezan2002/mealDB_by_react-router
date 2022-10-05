import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Meal from "./components/Meal/Meal";
import Meals from "./components/Meals/Meals";
import SingleMealCard from "./components/SingleMealCard/SingleMealCard";
import Main from "./layout/Main/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/home", element: <h2>This is from Home</h2> },
        {
          path: "/meals",
          loader: async () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
            );
          },
          element: <Meals></Meals>,
        },
        {
          path: "/meals/:mealsId",
          loader: async ({ params }) => {
            return fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealsId}`
            );
          },
          element: <SingleMealCard></SingleMealCard>,
        },
        { path: "/about", element: <h2>This is from about us</h2> },
        { path: "/contact", element: <h2>This is from contact page</h2> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
