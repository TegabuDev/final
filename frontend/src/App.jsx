import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <h1>Willing App</h1>
      <NavLink to={"/add"}>Add</NavLink>
      <NavLink to={"/find"}>find</NavLink>
    </div>
  );
}

export default App;
