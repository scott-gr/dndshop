import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./password-reset.module.css"

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };
  const sendResetEmail = event => {
    event.preventDefault();
  };
  return (
    <div>
      <h2>Reset your password!</h2>
      <main>
        <form action="">
          {emailHasBeenSent && (
            <div className={styles.notification} id="emailsentpop">
              An email has been sent to you!
            </div>
          )}
          {error !== null && (
            <div className={styles.errors}>
              {error}
            </div>
          )}
          <label htmlFor="userEmail">
            Email:
          </label>
        </form>
      </main>
    </div>
  );
};

export default PasswordReset;