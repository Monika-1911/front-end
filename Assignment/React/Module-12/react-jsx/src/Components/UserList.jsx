import React from "react";

function UserList() {
  const users = [
    { id: 1, name: "Monika" },
    { id: 2, name: "Charmi" },
    { id: 3, name: "Tisha" },
    { id: 4, name: "Poonam" }
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.id} - {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
