
import Link from "next/link";
import React from "react";

interface NavListProps {
    href: string;
    title: string;
}

const NavList = ({ href, title }: NavListProps) => {

    return (
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-[#558344] sm: text-xl rounded md:p-0 font-semibold"
      >
        {title}
      </Link>
    );


}
export default NavList;
