import styles from "../styles/createPassword.module.css";
import LockImg from "../assets/public/createPasswordImg.png";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

const CreatePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleOnchange = (e) => {
    const { value, name } = e.target;
    const newValue = value.trim();
    setPasswords((prev) => ({ ...prev, [name]: newValue }));
    validateField(name, value);
  };

  function validatePassword(inputValue) {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#;:_^'\(\)<>=+/"|,{}[\]¬`£~-])[A-Za-z\d@$!%*?&.#;:_^'\(\)<>=+/"|,{}[\]¬`£~-]{8,}$/;
    return passwordRegex.test(inputValue);
  }

  const validateField = (name, value) => {
    let error = "";

    if (name === "newPassword") {
      if (!value.trim()) {
        error = "Password is required";
      } else if (value.length < 8 || value.length > 60) {
        error = "Password should be between 8 and 60 characters";
      } else if (!validatePassword(value)) {
        error =
          "Your password must contain an upper case, a lowercase, a special character and a number";
      } else if (value === passwords.confirmPassword) {
        setErrorMessage((prev) => ({ ...prev, confirmPassword: "" }));
      } else {
        error = "";
      }
    } else if (name === "confirmPassword") {
      if (value !== passwords.newPassword) {
        error = "Password do not match";
      }
    }
    setErrorMessage((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      errorMessage.confirmPassword ||
      errorMessage.newPassword ||
      !passwords.newPassword ||
      !passwords.confirmPassword
    ) {
      return;
    }
    console.log("run api calls");
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={LockImg} alt="Create Password" />
        <footer>
          <svg
            width="57"
            height="25"
            viewBox="0 0 57 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.5" cy="12.5" r="12.5" fill="#F2AE30" />
            <circle cx="28.5" cy="12.5" r="12.5" fill="#F2AE30" />
            <circle cx="44.5" cy="12.5" r="12.5" fill="#F2AE30" />
          </svg>
        </footer>
      </div>
      <div className={styles.right}>
        <div className={styles.firstSmallCircle}></div>
        <div className={styles.secondSmallCircle}></div>
        <div className={styles.firstBigCircle}>
          <aside />
        </div>
        <div className={styles.secondBigCircle}>
          <aside />
        </div>
        <form onSubmit={handleSubmit}>
          <h4>Create Password</h4>
          <main>
            <section>
              <label>New password</label>
              <article>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="New password"
                  name="newPassword"
                  onChange={handleOnchange}
                />
                <nav>
                  {showPassword ? (
                    <FaRegEyeSlash
                      size={20}
                      cursor="pointer"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <FaRegEye
                      size={20}
                      cursor="pointer"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </nav>
              </article>
              <small>{errorMessage.newPassword}</small>
            </section>
            <section>
              <label>Confirm password</label>
              <article>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  name="confirmPassword"
                  onChange={handleOnchange}
                />
                <nav>
                  {showPassword ? (
                    <FaRegEyeSlash
                      size={20}
                      cursor="pointer"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <FaRegEye
                      size={20}
                      cursor="pointer"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </nav>
              </article>
              <small>{errorMessage.confirmPassword}</small>
            </section>
          </main>
          <button>Done</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePassword;
