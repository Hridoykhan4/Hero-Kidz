'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, exact = false, className = "" }) => {
    const pathname = usePathname();
    // Home ("/") এর জন্য Exact Match এবং অন্যান্য Sub-routes এর জন্য startsWith Check
    const isActive = exact || href === "/"
        ? pathname === href
        : pathname.startsWith(href);

    return (
        <Link
            href={href}
            className={`font-medium transition-colors duration-200 ${isActive ? 'text-primary   font-semibold' : 'hover:text-primary'
                } ${className}`}
        >
            {children}
        </Link>
    );
};

export default NavLink;