import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Bed, ExternalLink, Wifi, Wind, Eye, Car, Tv, UtensilsCrossed, ShowerHead } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BOOKING_URL } from "@/lib/siteData";

const amenityIcons = {
    "Sea View": Eye,
    "Bay View": Eye,
    "Free WiFi": Wifi,
    "Air Conditioning": Wind,
    "Free Parking": Car,
    "TV": Tv,
    "Kitchen": UtensilsCrossed,
    "Fully Equipped Kitchen": UtensilsCrossed,
    "Full Kitchen": UtensilsCrossed,
    "Walk-in Shower": ShowerHead,
};

export default function RoomCard({ room, index }) {
    const isReversed = index % 2 !== 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500 ${isReversed ? "lg:direction-rtl" : ""
                }`}
        >
            <div className={`relative h-72 lg:h-auto overflow-hidden ${isReversed ? "lg:order-2" : ""}`}>
                <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
                    <Users size={14} className="text-ocean" />
                    <span className="text-xs font-medium">Up to {room.capacity} guests</span>
                </div>
            </div>

            <div className={`p-8 lg:p-10 flex flex-col justify-center ${isReversed ? "lg:order-1" : ""}`}>
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold mb-3">{room.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                    <Bed size={16} className="text-ocean" />
                    <span className="text-sm text-muted-foreground">{room.bedType}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{room.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {room.amenities.map((amenity) => {
                        const Icon = amenityIcons[amenity];
                        return (
                            <Badge
                                key={amenity}
                                variant="secondary"
                                className="bg-ocean/5 text-ocean border-ocean/10 font-normal py-1.5 px-3 gap-1.5"
                            >
                                {Icon && <Icon size={12} />}
                                {amenity}
                            </Badge>
                        );
                    })}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/Booking">
                        <Button className="bg-ocean hover:bg-ocean-light text-white rounded-full px-6 shadow-md shadow-ocean/20 w-full sm:w-auto">
                            Reserve Directly
                        </Button>
                    </Link>
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                        <Button
                            variant="outline"
                            className="rounded-full border-ocean/30 text-ocean hover:bg-ocean/5 gap-2 w-full sm:w-auto"
                        >
                            Book on Booking.com <ExternalLink size={14} />
                        </Button>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}