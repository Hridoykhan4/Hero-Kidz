import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import Logo from "./Logo";
import NavLink from "../buttons/NavLink";

// 1. Navigation items extracted outside component to prevent unnecessary re-creations
const NAV_ITEMS = [
    { label: "Home", href: "/", exact: true },
    { label: "Products", href: "/products" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];  

const Navbar = () => {
    return (
        <header className="bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" aria-label="Open Menu" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <NavLink href={item.href} exact={item.exact}>
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Logo />
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <NavLink href={item.href} exact={item.exact}>
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end space-x-3">
                    <Link href="/cart" aria-label="View Shopping Cart" className="btn btn-primary btn-circle btn-sm md:btn-md">
                        <FiShoppingCart className="text-lg" />
                    </Link>
                    <Link href="/login" className="btn btn-primary btn-outline btn-sm md:btn-md">
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;