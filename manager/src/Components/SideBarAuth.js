import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import SignedInSidebar from "./SignedInSideBar";
import { auth } from "../Context/Firebase";

export default function NavigationBarFinal() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (user) {
    return (
      <>
        <SignedInSidebar />
      </>
    );
  } else {
    return (
      <>
        <Sidebar />
      </>
    );
  }
}
