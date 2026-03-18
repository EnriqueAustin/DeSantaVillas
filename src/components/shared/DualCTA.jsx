import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/siteData";

export default function DualCTA({ variant = "default", centered = false }) {
    const isLight = variant === "light";

    return (
        <div className={`flex flex-col sm:flex-row items-center gap-4 ${centered ? "sm:justify-center" : ""}`}>
            <Link to="/Booking">
                <Button
                    size="lg"
                    className={`rounded-full px-8 font-medium shadow-lg ${isLight
                            ? "bg-white text-ocean hover:bg-white/90 shadow-black/10"
                            : "bg-ocean hover:bg-ocean-light text-white shadow-ocean/25"
                        }`}
                >
                    Reserve Your Stay
                </Button>
            </Link>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <Button
                    size="lg"
                    variant="outline"
                    className={`rounded-full px-8 font-medium gap-2 ${isLight
                            ? "border-white/40 text-white bg-transparent backdrop-blur-sm hover:bg-white/10"
                            : "border-ocean/30 text-ocean hover:bg-ocean/5"
                        }`}
                >
                    Check Availability <ExternalLink size={16} />
                </Button>
            </a>
        </div>
    );
}