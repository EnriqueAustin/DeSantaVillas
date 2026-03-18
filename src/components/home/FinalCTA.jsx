import React from "react";
import { motion } from "framer-motion";
import DualCTA from "../shared/DualCTA";

export default function FinalCTA() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://media.base44.com/images/public/69ba7d9838ba20504f0e1b68/e7e2c878a_generated_949a4414.png"
                    alt="Sunset over St Helena Bay"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ocean-dark/90 to-ocean/80" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center max-w-3xl mx-auto px-4"
            >
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">
                    Your Coastal Escape Awaits
                </h2>
                <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                    Book your stay at De Santa Villas and experience the magic of St Helena Bay's
                    breathtaking sea views and warm hospitality.
                </p>
                <DualCTA variant="light" />
            </motion.div>
        </section>
    );
}