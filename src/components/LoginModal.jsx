import React, { useState } from "react";
import "./Modal.css";

export const LoginModal = ({ onLogin, onCancel, closeModal }) => {
  // State to hold username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    onLogin(username, password); // Pass username and password up for login processing
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal("Modal was closed");
      }}
    >
      <div className="modal">
        <div
          className="modal-header"
          onClick={() => closeModal("Modal was closed")}
        >
          <p className="close">&times;</p>
        </div>
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-submit">
              Login
            </button>
            <button
              type="button"
              className="btn btn-cancel"
              onClick={() => onCancel("Cancel button was clicked")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
