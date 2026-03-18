import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/siteData";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { label: "Home", path: "/Home" },
    { label: "Rooms", path: "/Rooms" },
    { label: "Gallery", path: "/Gallery" },
    { label: "About", path: "/About" },
    { label: "Location", path: "/Location" },
    { label: "FAQ", path: "/FAQ" },
    { label: "Contact", path: "/Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <Link to="/Home" className="flex items-center gap-2">
                    <span
                        className={`font-heading text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-500 ${scrolled ? "text-ocean" : "text-white"
                            }`}
                    >
                        De Santa Villas
                    </span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden lg:flex items-center gap-1">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${location.pathname === link.path
                                    ? scrolled
                                        ? "text-ocean bg-ocean/10"
                                        : "text-white bg-white/20"
                                    : scrolled
                                        ? "text-foreground/70 hover:text-ocean hover:bg-ocean/5"
                                        : "text-white/80 hover:text-white hover:bg-white/10"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link to="/Booking" className="ml-3">
                        <Button
                            size="sm"
                            className="bg-ocean hover:bg-ocean-light text-white rounded-full px-5 font-medium shadow-lg shadow-ocean/20"
                        >
                            Reserve Now
                        </Button>
                    </Link>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-foreground" : "text-white"
                        }`}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-border overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.path
                                            ? "text-ocean bg-ocean/10"
                                            : "text-foreground/70 hover:text-ocean hover:bg-ocean/5"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-3 flex flex-col gap-2">
                                <Link to="/Booking">
                                    <Button className="w-full bg-ocean hover:bg-ocean-light text-white rounded-full">
                                        Reserve Your Stay
                                    </Button>
                                </Link>
                                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className="w-full rounded-full border-ocean text-ocean">
                                        Book on Booking.com
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}