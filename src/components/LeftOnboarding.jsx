import styles from "../styles/leftOnboarding.module.css";
import LockImg from "../assets/public/createPasswordImg.png";

const LeftOnboarding = () => {
  return (
    <div className={styles.left}>
      <img src={LockImg} alt="Create Password" />
      <footer>
        <svg
          width="57"
          height="25"
          viewBox="0 0 57 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12.5" cy="12.5" r="12.5" fill="#F2AE30" />
          <circle cx="28.5" cy="12.5" r="12.5" fill="#F2AE30" />
          <circle cx="44.5" cy="12.5" r="12.5" fill="#F2AE30" />
        </svg>
      </footer>
    </div>
  );
};

export default LeftOnboarding;
