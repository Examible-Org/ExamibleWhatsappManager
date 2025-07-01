import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/notifyPopUp.css";

const NotifyPopUp = ({ message, time, onClose }) => {
  const location = useLocation();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="notification-popup">
      <div className="popup-content">
        <h2>Notification</h2>
        <p>{message}</p>
        <span>{time}</span>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default NotifyPopUp;
