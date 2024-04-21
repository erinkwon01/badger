import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/feed">
                  <p>Feed</p>
                </Link>
              </li>
              <li>
                <Link href="/challenges">
                  <p>Challenges</p>
                </Link>
              </li>
              <li>
                <Link href="/badges">
                  <p>Badges</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;