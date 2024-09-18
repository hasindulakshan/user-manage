import { Link, useNavigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <a href="">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="" >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Enter Button For Operations</h1>

      {/* Link to Users route */}

      <button className="users-button" onClick={() => navigate("/users")}>
        Click Here
      </button>
    </>
  );
}

export default App;
