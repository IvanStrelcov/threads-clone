'use client';

// import { Button } from "@/components/ui/button";
// import { logout } from "@/lib/actions/auth.actions";
import Image from "next/image";

export default function Dashboard() {
  const handleLogout = async () => {
    // await logout();
  }
  return (
    <main>
      <header>
        {/* <Button onClick={handleLogout}>Log out</Button> */}
      </header>
      <h1 className="">Home</h1>
    </main>
  );
}
