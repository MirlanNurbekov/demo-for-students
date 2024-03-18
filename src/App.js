import { useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";
import { LoginModal } from "./components/LoginModal"; // Updated import

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  // This will be called when the user attempts to log in
  const handleLogin = (username, password) => {
    console.log("Logging in with", username, password); // Placeholder for actual login logic
    setModalOpen(false);
    setMessage(`Login attempt with username: ${username}`);
  };

  // Handles cancel or close actions
  const handleClose = (value) => {
    setModalOpen(false);
    setMessage(value);
  };

  return (
    <div className="App">
      {message && <div>{message}</div>}
      <button className="btn btn-open" onClick={() => setModalOpen(true)}>
        Open Login Modal
      </button>
      {modalOpen &&
        createPortal(
          <LoginModal
            onLogin={handleLogin}
            onCancel={() => handleClose("Login cancelled")}
            closeModal={() => handleClose("Modal was closed")}
          />,
          document.body
        )}
    </div>
  );
}

export default App;
