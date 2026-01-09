import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { AuthContext } from "./context/AuthContext";
import ThemeToggle from "./components/ThemeToggle";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  const { theme } = useContext(ThemeContext);
  const { isLoggedIn } = useContext(AuthContext);

  const style = {
    backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={style}>
      <h1>React Context API Demo</h1>

      <ThemeToggle />

      <hr />

      {isLoggedIn ? <Welcome /> : <Login />}
    </div>
  );
}

export default App;
