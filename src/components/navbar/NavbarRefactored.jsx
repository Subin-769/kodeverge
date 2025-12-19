import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Book, FileText, Menu, X } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function NavbarRefactored() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // SCROLL DETECTION
    useEffect(() => {
        // Initial check on mount
        setScrolled(window.scrollY > 40);

        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // RESET SCROLL ON ROUTE CHANGE
    useEffect(() => {
        window.scrollTo(0, 0);
        setScrolled(false);
    }, [location.pathname]);

    // NAVBAR BACKGROUND LOGIC - Always white with shadow
    const navbarBackground = "bg-white/95 backdrop-blur-md shadow-md";

    // TEXT COLOR LOGIC - Always black
    const textColor = "text-gray-700";
    const logoColor = "text-black";
    const hoverColor = "hover:text-[#0067B0]";

    // NAV ITEM COMPONENT
    const NavItem = ({ to, children, end = false }) => (
        <NavLink
            to={to}
            end={end}
            className="relative cursor-pointer"
            onClick={() => setOpen(false)}
        >
            {({ isActive }) => (
                <span
                    className={cn(
                        "relative font-semibold transition-colors",
                        isActive
                            ? scrolled
                                ? "text-[#0067B0]"
                                : "text-[#4DADF0]"
                            : cn(textColor, hoverColor)
                    )}
                >
                    {children}
                    <span
                        className={cn(
                            "block h-[2px] mt-[3px] rounded-full transition-all duration-300",
                            isActive ? "w-[18px] bg-[#4DADF0]" : "w-0 bg-[#4DADF0]"
                        )}
                    />
                </span>
            )}
        </NavLink>
    );

    return (
        <header className="fixed top-0 inset-x-0 z-50 font-sans">
            {/* TOP NAVBAR */}
            <div
                className={cn(
                    "transition-all duration-300",
                    navbarBackground
                )}
                style={{ height: "80px" }}
            >
                <div className="container mx-auto px-6 h-full flex items-center justify-between">
                    {/* LOGO */}
                    <NavLink
                        to="/"
                        className={cn(
                            "text-2xl font-bold transition-colors duration-300",
                            logoColor
                        )}
                        onClick={() => setOpen(false)}
                    >
                        Logo
                    </NavLink>

                    {/* DESKTOP NAV - Using shadcn NavigationMenu */}
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            {/* Regular Nav Items */}
                            <NavigationMenuItem>
                                <NavLink to="/" end>
                                    {({ isActive }) => (
                                        <div className="relative flex flex-col items-center">
                                            <NavigationMenuLink
                                                className={cn(
                                                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                                                    isActive
                                                        ? scrolled
                                                            ? "text-[#0067B0]"
                                                            : "text-[#4DADF0]"
                                                        : cn(textColor, hoverColor)
                                                )}
                                            >
                                                Home
                                            </NavigationMenuLink>
                                            <span
                                                className={cn(
                                                    "absolute -bottom-1 h-[2px] rounded-full transition-all duration-300 bg-[#4DADF0]",
                                                    isActive ? "w-[18px]" : "w-0"
                                                )}
                                            />
                                        </div>
                                    )}
                                </NavLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavLink to="/services">
                                    {({ isActive }) => (
                                        <div className="relative flex flex-col items-center">
                                            <NavigationMenuLink
                                                className={cn(
                                                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                                                    isActive
                                                        ? scrolled
                                                            ? "text-[#0067B0]"
                                                            : "text-[#4DADF0]"
                                                        : cn(textColor, hoverColor)
                                                )}
                                            >
                                                Service
                                            </NavigationMenuLink>
                                            <span
                                                className={cn(
                                                    "absolute -bottom-1 h-[2px] rounded-full transition-all duration-300 bg-[#4DADF0]",
                                                    isActive ? "w-[18px]" : "w-0"
                                                )}
                                            />
                                        </div>
                                    )}
                                </NavLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavLink to="/about">
                                    {({ isActive }) => (
                                        <div className="relative flex flex-col items-center">
                                            <NavigationMenuLink
                                                className={cn(
                                                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                                                    isActive
                                                        ? scrolled
                                                            ? "text-[#0067B0]"
                                                            : "text-[#4DADF0]"
                                                        : cn(textColor, hoverColor)
                                                )}
                                            >
                                                About
                                            </NavigationMenuLink>
                                            <span
                                                className={cn(
                                                    "absolute -bottom-1 h-[2px] rounded-full transition-all duration-300 bg-[#4DADF0]",
                                                    isActive ? "w-[18px]" : "w-0"
                                                )}
                                            />
                                        </div>
                                    )}
                                </NavLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavLink to="/portfolio">
                                    {({ isActive }) => (
                                        <div className="relative flex flex-col items-center">
                                            <NavigationMenuLink
                                                className={cn(
                                                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                                                    isActive
                                                        ? scrolled
                                                            ? "text-[#0067B0]"
                                                            : "text-[#4DADF0]"
                                                        : cn(textColor, hoverColor)
                                                )}
                                            >
                                                Portfolio
                                            </NavigationMenuLink>
                                            <span
                                                className={cn(
                                                    "absolute -bottom-1 h-[2px] rounded-full transition-all duration-300 bg-[#4DADF0]",
                                                    isActive ? "w-[18px]" : "w-0"
                                                )}
                                            />
                                        </div>
                                    )}
                                </NavLink>
                            </NavigationMenuItem>

                            {/* Resources Dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger
                                    className={cn(
                                        "bg-transparent hover:bg-transparent data-[state=open]:bg-transparent focus:bg-transparent",
                                        scrolled
                                            ? "text-gray-700 hover:text-[#0067B0] data-[state=open]:text-[#0067B0]"
                                            : "text-white hover:text-[#4DADF0] data-[state=open]:text-[#4DADF0]"
                                    )}
                                >
                                    Resources
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-[400px] p-4 bg-[#0A0A0A]">
                                        {/* Circle Glows */}
                                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                            <div className="absolute -left-10 -top-10 w-64 h-64 bg-gradient-to-br from-[#40FF98] to-[#4DADF0] opacity-20 blur-3xl rounded-full"></div>
                                            <div className="absolute -right-10 -top-10 w-64 h-64 bg-gradient-to-br from-[#40FF98] to-[#4DADF0] opacity-20 blur-3xl rounded-full"></div>
                                        </div>

                                        {/* Dropdown Items */}
                                        <div className="relative z-10 space-y-3">
                                            <div
                                                className="flex items-start gap-4 cursor-pointer p-4 rounded-xl hover:bg-white/5 transition-all"
                                                onClick={() => navigate("/blogs")}
                                            >
                                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#40FF98] to-[#4DADF0] flex items-center justify-center shrink-0">
                                                    <Book className="w-5 h-5 text-[#111]" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-white">
                                                        Blogs
                                                    </h3>
                                                    <p className="text-white/70 text-sm">
                                                        Expert insights, guides, and trending topics.
                                                    </p>
                                                </div>
                                            </div>

                                            <div
                                                className="flex items-start gap-4 cursor-pointer p-4 rounded-xl hover:bg-white/5 transition-all"
                                                onClick={() => navigate("/case-study")}
                                            >
                                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#40FF98] to-[#4DADF0] flex items-center justify-center shrink-0">
                                                    <FileText className="w-5 h-5 text-[#111]" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-white">
                                                        Case Study
                                                    </h3>
                                                    <p className="text-white/70 text-sm">
                                                        Real stories showing impact and results.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavLink to="/career">
                                    {({ isActive }) => (
                                        <div className="relative flex flex-col items-center">
                                            <NavigationMenuLink
                                                className={cn(
                                                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                                                    isActive
                                                        ? scrolled
                                                            ? "text-[#0067B0]"
                                                            : "text-[#4DADF0]"
                                                        : cn(textColor, hoverColor)
                                                )}
                                            >
                                                Career
                                            </NavigationMenuLink>
                                            <span
                                                className={cn(
                                                    "absolute -bottom-1 h-[2px] rounded-full transition-all duration-300 bg-[#4DADF0]",
                                                    isActive ? "w-[18px]" : "w-0"
                                                )}
                                            />
                                        </div>
                                    )}
                                </NavLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavLink to="/contact">
                                    {({ isActive }) => (
                                        <div className="relative flex flex-col items-center">
                                            <NavigationMenuLink
                                                className={cn(
                                                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                                                    isActive
                                                        ? scrolled
                                                            ? "text-[#0067B0]"
                                                            : "text-[#4DADF0]"
                                                        : cn(textColor, hoverColor)
                                                )}
                                            >
                                                Contact
                                            </NavigationMenuLink>
                                            <span
                                                className={cn(
                                                    "absolute -bottom-1 h-[2px] rounded-full transition-all duration-300 bg-[#4DADF0]",
                                                    isActive ? "w-[18px]" : "w-0"
                                                )}
                                            />
                                        </div>
                                    )}
                                </NavLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* CTA BUTTON */}
                    <NavLink
                        to="/get-started"
                        className="px-6 py-2.5 rounded-lg font-bold text-white text-base hidden md:block"
                        style={{ background: "linear-gradient(90deg, #00A84E, #0067B0)" }}
                    >
                        Get Started
                    </NavLink>

                    {/* MOBILE TOGGLE */}
                    <button
                        className={cn(
                            "md:hidden p-2 transition-colors",
                            logoColor
                        )}
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <X className="w-7 h-7" />
                        ) : (
                            <Menu className="w-7 h-7" />
                        )}
                    </button>
                </div>
            </div>

            {/* MOBILE NAV */}
            {open && (
                <div className="md:hidden bg-[#0D0D0D] text-white border-t border-white/10">
                    <div className="flex flex-col px-6 py-4 space-y-3">
                        <NavItem to="/" end>
                            Home
                        </NavItem>
                        <NavItem to="/services">Service</NavItem>
                        <NavItem to="/about">About</NavItem>
                        <NavItem to="/portfolio">Portfolio</NavItem>

                        <div className="space-y-2 pl-4 border-l-2 border-white/20">
                            <p className="text-sm font-semibold text-gray-400">Resources</p>
                            <button
                                className="text-left font-medium hover:text-[#4DADF0] transition-colors block w-full"
                                onClick={() => {
                                    navigate("/blogs");
                                    setOpen(false);
                                }}
                            >
                                Blogs
                            </button>
                            <button
                                className="text-left font-medium hover:text-[#4DADF0] transition-colors block w-full"
                                onClick={() => {
                                    navigate("/case-study");
                                    setOpen(false);
                                }}
                            >
                                Case Study
                            </button>
                        </div>

                        <NavItem to="/career">Career</NavItem>
                        <NavItem to="/contact">Contact</NavItem>

                        <NavLink
                            to="/get-started"
                            className="px-4 py-2 rounded-lg font-semibold text-white mt-2"
                            style={{ background: "linear-gradient(90deg, #00A84E, #0067B0)" }}
                            onClick={() => setOpen(false)}
                        >
                            Get Started
                        </NavLink>
                    </div>
                </div>
            )}
        </header>
    );
}
