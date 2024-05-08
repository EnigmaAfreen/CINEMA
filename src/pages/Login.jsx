//import { FunctionComponent } from "react";
import styles from "./MacBookAir.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.macbookAir1}>
      <div className={styles.bookTicketsWrapper}>
        <b className={styles.bookTickets}>Book Tickets</b>
      </div>
      {/* <img className={styles.macbookAir1Child} alt="" src="/rectangle-1.svg" /> */}
      <div className={styles.pleaseLogin}>Please Login</div>

      <input className={styles.macbookAir1Item} placeholder="username" />
      <input className={styles.macbookAir1Inner} placeholder="password" />
      <div className={styles.container}>
        <button
          className={styles.bottom}
          onClick={() => navigate("/selectSeat")}
        >
          Button
        </button>
      </div>
    </div>
  );
};
export default Login;
