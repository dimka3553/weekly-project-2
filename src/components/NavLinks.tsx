"use client";

import Link from "next/link";
import Search from "@/components/Search";
import Login from "@/components/Login";
import { useEffect, useState } from "react";

// check if "email" is present in the localStorage to determine if the user is logged in

export default function NavLinks() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="flex items-center gap-5">
      <Search />
      {loggedIn && <Link href="/my-lists">My Lists</Link>}
      <Login setLoggedIn={setLoggedIn}>Log in</Login>
    </div>
  );
}
