import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROOMS } from "@/lib/siteData";
import SectionHeading from "../shared/SectionHeading";

export default function FeaturedRooms() {
    return (
        <section className="py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Accommodation"
                    title="Your Coastal Retreat"
                    description="Each apartment features stunning sea views, modern amenities, and thoughtful touches for the perfect getaway."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {ROOMS.map((room, i) => (
                        <motion.div
                            key={room.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={room.image}
                                        alt={room.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1.5">
                                        <Users size={14} className="text-ocean" />
                                        <span className="text-xs font-medium">{room.capacity} guests</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-heading text-xl font-semibold mb-2">{room.name}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                                        {room.description}
                                    </p>
                                    <p className="text-xs text-ocean font-medium mb-4">{room.bedType}</p>
                                    <Link to="/Rooms">
                                        <Button
                                            variant="ghost"
                                            className="text-ocean hover:text-ocean-dark hover:bg-ocean/5 p-0 h-auto font-medium text-sm gap-1.5"
                                        >
                                            View Details <ArrowRight size={14} />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}