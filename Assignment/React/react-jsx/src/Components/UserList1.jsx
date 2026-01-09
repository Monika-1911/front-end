import React, { Component } from "react";

class UserList1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    console.log("Component mounted");

    fetch("http://localhost:3001/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API response failed");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          users: data,
          loading: false
        });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        this.setState({
          loading: false,
          error: error.message
        });
      });
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    const { users, loading, error } = this.state;

    if (loading) {
      return <h3>Loading...</h3>;
    }

    if (error) {
      return <h3 style={{ color: "red" }}>Error: {error}</h3>;
    }

    return (
      <div>
        <h2>User List</h2>
        <ul>
          {users.length === 0 ? (
            <li>No users found</li>
          ) : (
            users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))
          )}
        </ul>
      </div>
    );
  }
}

export default UserList1;
