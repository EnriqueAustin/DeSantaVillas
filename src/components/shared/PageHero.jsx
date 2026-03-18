import React from "react";
import { motion } from "framer-motion";

export default function PageHero({ title, subtitle, image }) {
    return (
        <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 text-center px-4"
            >
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </motion.div>
        </section>
    );
}