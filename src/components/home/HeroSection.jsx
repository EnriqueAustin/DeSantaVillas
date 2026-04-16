import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import DualCTA from "../shared/DualCTA";

export default function HeroSection() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/535653662.jpg?k=79c2c317ac72ff744d397dd56887547da91d3a38314acbd86aabcfea921336ea&o="
                    alt="Breathtaking panoramic view of St Helena Bay from De Santa Villas"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <span className="text-white/80 text-sm font-medium">9.9 / 10 — Exceptional</span>
                    </div>

                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight">
                        Breathtaking Sea Views
                        <br />
                        <span className="text-white/90 italic font-normal">in St Helena Bay</span>
                    </h1>

                    <div className="flex items-center justify-center gap-2 mt-6 mb-8">
                        <MapPin size={16} className="text-white/60" />
                        <span className="text-white/70 text-sm">West Coast, South Africa</span>
                    </div>

                    <DualCTA variant="light" centered={true} />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5"
                >
                    <div className="w-1.5 h-2.5 bg-white/60 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}