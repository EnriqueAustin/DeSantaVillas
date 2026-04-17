import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Fish, TreePine, Waves, UtensilsCrossed, Landmark } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import FinalCTA from "../components/home/FinalCTA";
import { ATTRACTIONS, PAGE_HERO_IMAGES } from "@/lib/siteData";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const categoryIcons = {
    Beaches: Waves,
    Fishing: Fish,
    Nature: TreePine,
    Activities: Navigation,
    History: Landmark,
    Restaurants: UtensilsCrossed,
};

export default function Location() {
    return (
        <>
            <PageHero
                title="Location & Attractions"
                subtitle="Discover the beauty of the West Coast"
                image={PAGE_HERO_IMAGES.location}
            />

            {/* Map */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
                                Find Us
                            </span>
                            <h2 className="font-heading text-3xl sm:text-4xl font-semibold mt-2 mb-4">
                                St Helena Bay, West Coast
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                De Santa Villas is located at 10 Britannica Drive in St Helena Bay, on the stunning
                                West Coast of South Africa. The property sits elevated above the bay, offering
                                uninterrupted panoramic sea views.
                            </p>
                            <div className="flex items-start gap-3 p-4 bg-ocean/5 rounded-xl mb-8">
                                <MapPin className="text-ocean mt-0.5 shrink-0" size={20} />
                                <div>
                                    <p className="font-medium text-sm">10 Britannica Drive</p>
                                    <p className="text-sm text-muted-foreground">St Helena Bay, 7390, South Africa</p>
                                </div>
                            </div>

                            <div className="rounded-2xl overflow-hidden h-72 lg:h-80 shadow-md">
                                <MapContainer
                                    center={[-32.753, 17.988]}
                                    zoom={13}
                                    scrollWheelZoom={false}
                                    className="h-full w-full"
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={[-32.753, 17.988]}>
                                        <Popup>De Santa Villas<br />10 Britannica Drive</Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </motion.div>

                        {/* Attractions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
                                Nearby
                            </span>
                            <h2 className="font-heading text-3xl sm:text-4xl font-semibold mt-2 mb-8">
                                Things to Do
                            </h2>
                            <div className="space-y-4">
                                {ATTRACTIONS.map((attraction, i) => {
                                    const Icon = categoryIcons[attraction.category] || MapPin;
                                    return (
                                        <motion.div
                                            key={attraction.name}
                                            initial={{ opacity: 0, x: 10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1, duration: 0.4 }}
                                            className="flex gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center shrink-0">
                                                <Icon size={20} className="text-ocean" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-1">
                                                    <h3 className="font-semibold text-sm">{attraction.name}</h3>
                                                    <span className="text-xs text-ocean font-medium bg-ocean/5 px-2 py-0.5 rounded-full">
                                                        {attraction.distance}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground">{attraction.description}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <FinalCTA />
        </>
    );
}
