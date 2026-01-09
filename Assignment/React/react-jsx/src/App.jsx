// src/App.jsx

// Import React (optional in React 17+, required for JSX in some setups)
import React from "react";

// Import all components
import ClassCompo from "./Components/ClassCompo.jsx";
import Hello from "./Components/Hello.jsx";
import UserCard from "./Components/UserCard.jsx";
import Counter from "./Components/Counter.jsx";           // Make sure file name matches
import ClickButton from "./Components/ClickButton.jsx";
import InputForm from "./Components/InputForm.jsx";
import AuthButton from "./Components/AuthButton.jsx";
import VotingEligibility from "./Components/VotingEligibility.jsx";
import FruitList from "./Components/FruitList.jsx";
import UserList from "./Components/UserList.jsx";
import UserForm from "./Components/UserForm.jsx";
import InCounter from "./Components/InCounter.jsx";
import UserList1 from "./Components/UserList1.jsx";



export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Hello />
      <ClassCompo />
      <UserCard name="Monika" age={28} location="Ahmedabad" />
      <Counter />
      <ClickButton />
      <InputForm />
      <AuthButton />
      <VotingEligibility />
      <FruitList />
      <UserList />
      <UserForm />
    <UserList1/>
      <InCounter />
      </div>
  );
}
