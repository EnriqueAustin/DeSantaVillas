import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { CONTACT_INFO, BOOKING_URL } from "@/lib/siteData";

export default function Footer() {
    return (
        <footer className="bg-ocean-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <h3 className="font-heading text-2xl font-semibold mb-4">De Santa Villas</h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            A tranquil coastal guest house offering breathtaking sea views, peaceful
                            surroundings, and warm hospitality in St Helena Bay.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">
                            Explore
                        </h4>
                        <div className="space-y-2.5">
                            {[
                                { label: "Rooms", path: "/Rooms" },
                                { label: "Gallery", path: "/Gallery" },
                                { label: "About Us", path: "/About" },
                                { label: "Location", path: "/Location" },
                                { label: "FAQ", path: "/FAQ" },
                            ].map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="block text-sm text-white/60 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">
                            Contact
                        </h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="text-white/50 mt-0.5 shrink-0" />
                                <span className="text-sm text-white/60">{CONTACT_INFO.address}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-white/50 shrink-0" />
                                <span className="text-sm text-white/60">{CONTACT_INFO.phone}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-white/50 shrink-0" />
                                <span className="text-sm text-white/60">{CONTACT_INFO.email}</span>
                            </div>
                        </div>
                    </div>

                    {/* Book */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">
                            Book Your Stay
                        </h4>
                        <div className="space-y-3">
                            <Link
                                to="/Booking"
                                className="block w-full text-center py-2.5 px-4 bg-white text-ocean-dark rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
                            >
                                Reserve Directly
                            </Link>
                            <a
                                href={BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 border border-white/30 rounded-full text-sm font-medium text-white/80 hover:bg-white/10 transition-colors"
                            >
                                Booking.com <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                    <p className="text-sm text-white/40">
                        © {new Date().getFullYear()} De Santa Villas. All rights reserved. St Helena Bay, West Coast, South Africa.
                    </p>
                </div>
            </div>
        </footer>
    );
}