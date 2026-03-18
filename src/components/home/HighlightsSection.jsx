import React from "react";
import { motion } from "framer-motion";
import { Waves, TreePine, Heart, Sun } from "lucide-react";

const highlights = [
    {
        icon: Waves,
        title: "Stunning Sea Views",
        description: "Wake up to panoramic ocean views from your private balcony every morning.",
    },
    {
        icon: TreePine,
        title: "Peaceful Setting",
        description: "Escape the city and unwind in the tranquil beauty of the West Coast.",
    },
    {
        icon: Heart,
        title: "Warm Hospitality",
        description: "Rated 10/10 for service — your host ensures an unforgettable stay.",
    },
    {
        icon: Sun,
        title: "Perfect Getaway",
        description: "Ideal for couples and families seeking a relaxing coastal retreat.",
    },
];

export default function HighlightsSection() {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="text-center group"
                        >
                            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-ocean/10 flex items-center justify-center group-hover:bg-ocean/20 transition-colors duration-300">
                                <item.icon className="w-7 h-7 text-ocean" />
                            </div>
                            <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}