import { useState } from "react";
import "../../styles/notifications-center.css";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation } from "react-router-dom";
import NotifyPopUp from "../../components/NotifyPopUp";

const Notifications = () => {
  const [popupData, setPopupData] = useState(null);
  const notifications = [
    {
      id: 1,
      message: "Congrats! Jane just joined Examible using your referral link",
      time: "15min",
    },
    {
      id: 2,
      message:
        "Share your referral code to earn rewards and help friends study smarter",
      time: "14min",
    },
    {
      id: 3,
      message: "Congrats! Jane just joined Examible using your referral link",
      time: "13min",
    },
    {
      id: 4,
      message:
        "Share your referral code to earn rewards and help friends study smarter",
      time: "12min",
    },
    {
      id: 5,
      message: "Congrats! Jane just joined Examible using your referral link",
      time: "11min",
    },
    {
      id: 6,
      message:
        "Share your referral code to earn rewards and help friends study smarter",
      time: "10min",
    },
    {
      id: 7,
      message: "Congrats! Jane just joined Examible using your referral link",
      time: "11min",
    },
  ];
  return (
    <main className="notifications-main">
      <div className="notifications-header">
        <div className="top-notifications-header">
          <div className="left-header">
            <IoIosArrowBack
              size={35}
              style={{ color: "#764AD5" }}
              cursor="pointer"
              onClick={() => window.history.back()}
            />
            <h1 className="headertext">Notification Center</h1>
          </div>
          <div className="right-header">
            <button>Mark as read</button>
          </div>
        </div>
        <div className="notifications-header-title">
          <span>All messages</span>
        </div>
      </div>
      <div className="notifications-body">
        <span>Today</span>
        {notifications.map((notification) => (
          <div
            className="notification-item"
            onClick={() => setPopupData(notification)}
            key={notification.id}
          >
            <div className="notification-message">{notification.message}</div>
            <div className="notification-time">{notification.time}</div>
          </div>
        ))}
      </div>
      {popupData && (
        <NotifyPopUp
          message={popupData.message}
          time={popupData.time}
          onClose={() => setPopupData(null)}
        />
      )}
    </main>
  );
};

export default Notifications;
