"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { account } from "../_lib/store";
import { useStore } from "@nanostores/react";

function Header() {
  const user = useStore(account);

  return (
    <header className={styles.nav}>
      <div className={styles.navbar}>
        <div>
          <Link href="/posts">Task project</Link>
        </div>
        {user ? (
          <div>
            <span>Logged as</span>
            <>{user}</>
          </div>
        ) : (
          <div>
            <span>You are not logged in</span>
            <Link href="/">Log in</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
