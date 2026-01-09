import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Welcome() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome User 🎉</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Welcome;
