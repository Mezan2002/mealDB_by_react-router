import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <h2>Hello World</h2> },
    { path: "/home", element: <h2>This is from Home</h2> },
    { path: "/Countries", element: <h2>This is from Countries</h2> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
