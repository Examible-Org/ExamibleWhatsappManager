import { useState } from "react";
import "@styles/dashboard.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import refimage from "../../assets/public/referralpic.jpg";
import prev from "../../assets/public/prev.svg";
import next from "../../assets/public/next.svg";
import { RxDoubleArrowRight } from "react-icons/rx";

const Dashboard = () => {
  const plan = ["Monthly", "Yearly", "Freemium"];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const togledropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const referralsData = [
    {
      id: 1,
      name: "Peace Paul",
      plan: "Monthly",
      date: "17/06/2025",
      avatar: refimage, // Use the imported image
    },
    {
      id: 2,
      name: "Great Moses",
      plan: "Yearly",
      date: "17/06/2025",
      avatar: refimage,
    },
    {
      id: 3,
      name: "Amos Lola",
      plan: "Freemium",
      date: "17/06/2025",
      avatar: refimage,
    },
    {
      id: 4,
      name: "Vicky Saint",
      plan: "Yearly",
      date: "17/06/2025",
      avatar: refimage,
    },
    {
      id: 5,
      name: "John Doe",
      plan: "Monthly",
      date: "17/06/2025",
      avatar: refimage,
    },
    {
      id: 6,
      name: "Tunde Winners",
      plan: "Yearly",
      date: "17/06/2025",
      avatar: refimage,
    },
    {
      id: 7,
      name: "Mary Patrick",
      plan: "Freemium",
      date: "17/06/2025",
      avatar: refimage,
    },
    {
      id: 8,
      name: "Joy Abraham",
      plan: "Yearly",
      date: "17/06/2025",
      avatar: refimage,
    },
    {
      id: 9,
      name: "Daniel Godwin",
      plan: "Monthly",
      date: "17/06/2025",
      avatar: refimage,
    },
    {
      id: 10,
      name: "George David",
      plan: "Yearly",
      date: "17/06/2025",
      avatar: refimage,
    },
    {
      id: 11,
      name: "Daniella Vincent",
      plan: "Freemium",
      date: "17/06/2025",
      avatar: refimage,
    },
    {
      id: 1,
      name: "Peace Paul",
      plan: "Monthly",
      date: "17/06/2025",
      avatar: refimage, // Use the imported image
    },
    {
      id: 2,
      name: "Great Moses",
      plan: "Yearly",
      date: "17/06/2025",
      avatar: refimage,
    },
    {
      id: 3,
      name: "Amos Lola",
      plan: "Freemium",
      date: "17/06/2025",
      avatar: refimage,
    },
    {
      id: 4,
      name: "Vicky Saint",
      plan: "Yearly",
      date: "17/06/2025",
      avatar: refimage,
    },
    {
      id: 5,
      name: "John Doe",
      plan: "Monthly",
      date: "17/06/2025",
      avatar: refimage,
    },
    {
      id: 6,
      name: "Tunde Winners",
      plan: "Yearly",
      date: "17/06/2025",
      avatar: refimage,
    },
    {
      id: 7,
      name: "Mary Patrick",
      plan: "Premium",
      date: "17/06/2025",
      avatar: refimage,
    },
    {
      id: 8,
      name: "Joy Abraham",
      plan: "Yearly",
      date: "17/06/2025",
      avatar: refimage,
    },
    {
      id: 9,
      name: "Daniel Godwin",
      plan: "Monthly",
      date: "17/06/2025",
      avatar: refimage,
    },
    {
      id: 10,
      name: "George David",
      plan: "Yearly",
      date: "17/06/2025",
      avatar: refimage,
    },
    {
      id: 11,
      name: "Daniella Vincent",
      plan: "Freemium",
      date: "17/06/2025",
      avatar: refimage,
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState("All");
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageWindowStart, setPageWindowStart] = useState(1);
  const totalPages = Math.ceil(referralsData.length / itemsPerPage);
  const windowSize = 5;
  const pageWindowEnd = Math.min(pageWindowStart + windowSize - 1, totalPages);

  return (
    <main className="dashboard-main">
      <div className="dashboard-header">
        <div className="dashboard-header-title">
          <h1>Dashboard</h1>
        </div>
        <div className="dashboard-notify">
          <div className="notify-count">
            <IoMdNotificationsOutline className="notification-icon" />
            <div className="notification-count"></div>
          </div>
          <div className="dashboard-info">
            <span className="user-name">Amos yentonyon</span>
            <span className="user-email">myname@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="dashboard-welcome">
        <h1>Welcome, Lola</h1>
        <span>
          Manage your team members and their account <br /> now
        </span>
      </div>
      <div className="dashboard-hero">
        <div className="topHero">
          <div className="homeDashboard">
            <AiOutlineHome className="homeIcon" />

            <span>Dasboard</span>
          </div>
          <h1>Your Referrals</h1>
          <span className="referral-link">
            https://www.referral/br3VTb768/ggbtihj?hssjhfwe
          </span>
        </div>
        <div className="bottomHero">
          <div className="search-div">
            <CiSearch className="search-icon" size={20} />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
          <div className="dropdown-container1">
            <span className="plan-text">Plan</span>
            <div className="plan-div">
              <div
                className="dropdown-button"
                onClick={() => togledropdown("plan")}
              >
                <span className="plan-selected">
                  {selectedPlan === "All" ? "Select Plan" : selectedPlan}
                </span>
                {activeDropdown === "plan" ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </div>
              {activeDropdown === "plan" && (
                <ul className="dropdown-list1">
                  {plan.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedPlan(item), setActiveDropdown(null);
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="dropdown-container2">
            <span className="plan-text">Month</span>
            <div className="plan-div">
              <div className="dropdown-container2">
                <div
                  className="dropdown-button"
                  onClick={() => togledropdown("month")}
                >
                  <span className="plan-selected">
                    {selectedMonth === "All" ? "Select Month" : selectedMonth}
                  </span>
                  {activeDropdown === "month" ? (
                    <MdOutlineKeyboardArrowUp />
                  ) : (
                    <MdOutlineKeyboardArrowDown />
                  )}
                </div>
                {activeDropdown === "month" && (
                  <ul className="dropdown-list2">
                    {month.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSelectedMonth(item), setActiveDropdown(null);
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="referral-section">
        <div className="referral-data">
          <thead className="referral-header-container">
            <tr className="referral-header">
              <th className="name-header">Name</th>
              <th className="plan-header">Plan</th>
              <th className="date-header">Date</th>
            </tr>
          </thead>
          <tbody className="referral-info">
            {referralsData
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((referral) => (
                <tr key={referral.id}>
                  <td className="name-column">
                    <img src={referral.avatar} className="avatar" />
                    <span className="name-text">{referral.name}</span>
                  </td>
                  <td
                    className="plan-column"
                    style={{
                      background:
                        referral.plan === "Yearly"
                          ? "#804bf2"
                          : referral.plan === "Monthly"
                          ? "transparent"
                          : referral.plan === "Freemium"
                          ? "#D9CAFA"
                          : "transparent",
                    }}
                  >
                    {referral.plan}
                  </td>
                  <td className="date-column">{referral.date}</td>
                </tr>
              ))}
          </tbody>
          <div className="bottom-radius"></div>
          <div className="pagination-container">
            <div className="pagination">
              <div
                className="pagination-button"
                onClick={() => {
                  setCurrentPage((prev) => Math.max(prev - 1, 1));
                  if (currentPage - 1 < pageWindowStart) {
                    setPageWindowStart(
                      Math.max(pageWindowStart - windowSize, 1)
                    );
                  }
                }}
                disabled={currentPage === 1}
              >
                <img src={prev} />
                <span>Prev</span>
              </div>
              <div className="page-number">
                {Array.from(
                  { length: pageWindowEnd - pageWindowStart + 1 },
                  (_, index) => {
                    const pageNumber = pageWindowStart + index;
                    return (
                      <span
                        key={pageNumber}
                        className={`current-page ${
                          currentPage === pageNumber ? "active" : ""
                        }`}
                        onClick={() => setCurrentPage(pageNumber)}
                        style={{
                          backgroundColor:
                            currentPage === pageNumber
                              ? "#804BF2"
                              : "transparent",
                          color: currentPage === pageNumber ? "#fff" : "#000",
                        }}
                      >
                        {pageNumber}
                      </span>
                    );
                  }
                )}

                {pageWindowEnd < totalPages && (
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setPageWindowStart(pageWindowStart + windowSize);
                      setCurrentPage(pageWindowEnd + 1);
                    }}
                  >
                    <RxDoubleArrowRight size={30} />
                  </span>
                )}
              </div>
              <div
                className="pagination-button"
                onClick={() => {
                  setCurrentPage((prev) =>
                    prev < totalPages ? prev + 1 : prev
                  );
                  if (
                    currentPage + 1 > pageWindowEnd &&
                    pageWindowEnd < totalPages
                  ) {
                    setPageWindowStart(pageWindowStart + windowSize);
                  }
                }}
                disabled={currentPage === totalPages}
              >
                <span>Next</span>
                <img src={next} />
              </div>
            </div>
          </div>
        </div>
        <div className="right-description">
          <div className="text-container">
            <p>
              Track your referral progress and rewards all in one place. Share <br />
              your unique referral code with <br /> friends preparing for {" "}
               <span className="highlight">JAMB</span> and earn points each time someone <br /> signs up and
              start learning. The <br /> more you refer, the more you earn from bonus <br />
              quiz access <br />
              <span className="highlight">Examiable</span> boosts. <br /> <br /> Start inviting now and help others
              succeed while you grow!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
