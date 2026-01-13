import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteRegistration } from "../redux/registrationSlice";
import { openEditModal } from "../context/ModalContext";

const ITEMS_PER_PAGE = 5;

const Cart = () => {
  const dispatch = useDispatch();
  const { registrations, status } = useSelector(
    (state) => state.registrations
  );

  const { openModal } = openEditModal();

  const [search, setSearch] = useState("");
  const [sessionFilter, setSessionFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // 🔍 Search + Filter Logic
  const filteredData = useMemo(() => {
    return registrations.filter((item) => {
      const matchesSearch =
        item.fullName.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase());

      const matchesSession =
        sessionFilter === "All" || item.session === sessionFilter;

      return matchesSearch && matchesSession;
    });
  }, [registrations, search, sessionFilter]);

  // 📄 Pagination
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // 📊 Attendance Summary
  const onlineCount = registrations.filter(
    (r) => r.attendanceType === "Online"
  ).length;

  const offlineCount = registrations.filter(
    (r) => r.attendanceType === "Offline"
  ).length;

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(deleteRegistration(id));
    }
  };

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="cart-container">
      <h2>📋 Event Registrations</h2>

      {/* 🔢 Attendance Summary */}
      <div className="summary">
        <span>🟢 Online: {onlineCount}</span>
        <span>🔵 Offline: {offlineCount}</span>
      </div>

      {/* 🔍 Search & Filter */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={sessionFilter}
          onChange={(e) => setSessionFilter(e.target.value)}
        >
          <option value="All">All Sessions</option>
          <option value="React">React</option>
          <option value="Redux">Redux</option>
          <option value="Node">Node</option>
        </select>
      </div>

      {/* 📊 Table */}
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Session</th>
            <th>Type</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.session}</td>
              <td>{item.attendanceType}</td>
              <td>{item.tags?.join(", ")}</td>
              <td>
                <button onClick={() => openModal(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ⏭ Pagination Controls */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prev
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cart;
