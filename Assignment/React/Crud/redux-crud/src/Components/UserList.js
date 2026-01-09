import { useSelector, useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../Features/usersSlice";
import { useState } from "react";

export default function UserList() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // 1️⃣ Track which user is being edited
  const [editId, setEditId] = useState(null);

  // 2️⃣ Local input state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 3️⃣ When Edit is clicked
  const startEdit = (user) => {
    setEditId(user.id);        // remember WHO to update
    setName(user.name);        // pre-fill inputs
    setEmail(user.email);
  };

  // 4️⃣ When Update is clicked
  const saveEdit = () => {
    dispatch(
      updateUser({
        id: editId,            // REQUIRED
        name,
        email,
      })
    );

    // 5️⃣ Exit edit mode
    setEditId(null);
    setName("");
    setEmail("");
  };

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {editId === user.id ? (
            <>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={saveEdit}>Update</button>
            </>
          ) : (
            <>
              {user.name} - {user.email}
              <button onClick={() => startEdit(user)}>Edit</button>
              <button onClick={() => dispatch(deleteUser(user.id))}>
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
