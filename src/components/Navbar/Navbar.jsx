import Link from "next/link";
import React from "react";

const Navbar = () => {
  
  return (
    <div>
      <nav className=" w-full flex justify-between">
        <div></div>
        <div>
          <ul className="flex gap-3">
            <li>
              <Link href={"/"}>Home</Link>
            </li>

            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-3">
          <Link href={"/signUp"}>
            <button>Get Started</button>
          </Link>
          <Link href={"/signIn"}>
            <button>Sign In</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
