import styles from "../styles/createPassword.module.css";
import LeftOnboarding from "../components/LeftOnboarding";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const VerifyEmail = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      return;
    }
    setLoading(true);

    try {
      const res = await axios.post(
        "https://www.server.examible.com/api/v1/ambassador-password-link-send",
        {
          email,
        }
      );
      if (res.status === 200) {
        if (
          res.data.message ===
          "User already has an account. Please use your existing password to activate ambassador role."
        ) {
          toast.success(
            "Email verified, Please login with your Examible password"
          );
          setTimeout(() => {
            location.href = "https://www.examible.com/login";
          }, 4000);
          return;
        }
        toast.success(
          "Email verified, Please create a password to activate ambassador role"
        );
        setTimeout(() => {
          location.href = res.data.link;
        }, 4000);
      }
    } catch (error) {
      if (error.response.data.message === "Ambassador already activated") {
        setTimeout(() => {
          location.href = "https://www.examible.com/login";
        }, 4000);
      }
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.container}>
      <LeftOnboarding />
      <div className={styles.right}>
        <div className={styles.firstSmallCircle}></div>
        <div className={styles.secondSmallCircle}></div>
        <div className={styles.firstBigCircle}>
          <aside />
        </div>
        <div className={styles.secondBigCircle}>
          <aside />
        </div>
        <form onSubmit={onSubmit}>
          <h4>Verify your email</h4>
          <main>
            <section>
              <label>Please enter your email</label>
              <input
                type="email"
                placeholder="Enter email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </section>
          </main>
          <button disabled={loading}>
            {loading ? "Verifying..." : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
