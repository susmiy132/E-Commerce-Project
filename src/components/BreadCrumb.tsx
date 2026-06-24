import React from "react";
import { Link } from "react-router";

export default function BreadCrumb() {
  return (
    <div className="bg-primary-lighter">
      <div className="container  py-[40px] sm:py-[48px] md:py-[56px] lg:py-[64px] xl:py-[80px] 2xl:py-[96px]">
        <p className="font-josefin text-4xl font-bold text-primary-dark">
          My Account
        </p>
        <ul className="flex gap-4 mt-2">
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/pages">Pages </Link>
          </li>
          <li>
            <Link to="/login" className="text-secondary">My Account </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}