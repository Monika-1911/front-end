import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../Features/usersSlice";

export default function UserForm({ editingUser, stopEdit }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
    }
  }, [editingUser]);

  const submit = (e) => {
    e.preventDefault();

    if (!name || !email) return;

    if (editingUser) {
      dispatch(
        updateUser({
          id: editingUser.id,
          name,
          email,
        })
      );
      stopEdit();
    } else {
      dispatch(addUser({ name, email }));
    }

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button>{editingUser ? "Update" : "Add"}</button>
    </form>
  );
}
