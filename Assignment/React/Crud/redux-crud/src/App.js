import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";


function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Redux CRUD</h1>
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
