import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, light = false, center = true }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className={`${center ? "text-center" : ""} mb-12`}
        >
            {eyebrow && (
                <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-white/60" : "text-ocean"}`}>
                    {eyebrow}
                </span>
            )}
            <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold mt-2 ${light ? "text-white" : "text-foreground"}`}>
                {title}
            </h2>
            {description && (
                <p className={`mt-4 max-w-2xl ${center ? "mx-auto" : ""} text-base sm:text-lg ${light ? "text-white/70" : "text-muted-foreground"}`}>
                    {description}
                </p>
            )}
        </motion.div>
    );
}