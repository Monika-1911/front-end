import { useState } from "react";

function ClickButton() {
  const [text, setText] = useState("Not Clicked");

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setText("Clicked!")}>
       <h1>Click me</h1>
      </button>
    </div>
  );
}

export default ClickButton;
