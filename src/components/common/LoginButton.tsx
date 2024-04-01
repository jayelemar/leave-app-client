"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { buttonVariants } from "@/components/ui/button"

const LoginButton = () => {
  const { data: session } = useSession();

  //delete after login user is done
  useEffect(() => {
    console.log("Session:", session);
  }, [session]); // Log session whenever it changes

  if (session && session.user) {
    return (
      <div className="flex justify-center items-center text-center gap-4 ml-auto">
        <p className="text-sky-600">{session?.user?.email}</p>
        <Link
          className={`${buttonVariants({ variant: "default" })} flex gap-4 ml-auto  cursor-pointer`}
          href={"/api/auth/signout"}
        >
          Log Out
        </Link>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center text-center  gap-4 ml-auto">
        <Link
          href={"/login"}
          className={`${buttonVariants({ variant: "default" })} cursor-pointer`}
        >
          Login
        </Link>
        <Link
          href={"/register"}
          className={`${buttonVariants({ variant: "default" })} cursor-pointer`}
        >
          Register
        </Link>
      </div>
    );
  }
};
export default LoginButton;
