"use client";
import styles from "./page.module.css";

import { useState } from "react";
import { logIn } from "./_lib/store";
import { redirect } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState<string>("");

  const handleLogIn = () => {
    logIn(email);
    redirect("/posts");
  };

  return (
    <main className={styles.main}>
      <h2>Log in to start using app</h2>
      <div className={styles.card}>
        <form className={styles.form} action={handleLogIn}>
          <div>
            <label>Email address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              name="email"
            />
          </div>

          <div>
            <label>Password</label>
            <input required name="password" type="password" />
          </div>

          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </main>
  );
}
