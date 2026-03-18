import React from "react";
import { motion } from "framer-motion";
import { Heart, Waves, Sun, Star } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import FinalCTA from "../components/home/FinalCTA";

const values = [
    {
        icon: Heart,
        title: "Warm Hospitality",
        description: "Rated 10/10 by our guests, we take pride in making every visitor feel at home. Your comfort is our top priority.",
    },
    {
        icon: Waves,
        title: "Coastal Living",
        description: "Experience the authentic West Coast lifestyle — where the rhythm of the ocean sets the pace for unforgettable days.",
    },
    {
        icon: Sun,
        title: "Total Relaxation",
        description: "From sunrise coffee on your balcony to sunset walks along the bay, every moment is designed for peace.",
    },
];

export default function About() {
    return (
        <>
            <PageHero
                title="About Us"
                subtitle="The story behind De Santa Villas"
                image="https://media.base44.com/images/public/69ba7d9838ba20504f0e1b68/3f42a6993_generated_e2ec6f55.png"
            />

            <section className="py-20 lg:py-28">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean">Our Story</span>
                            <h2 className="font-heading text-3xl sm:text-4xl font-semibold mt-2 mb-6">
                                Where Tranquility Meets the Sea
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    De Santa Villas was born from a deep love for the West Coast and a desire to share
                                    its breathtaking beauty with travellers from near and far. Perched above St Helena Bay,
                                    our guest house offers a front-row seat to some of South Africa's most spectacular ocean views.
                                </p>
                                <p>
                                    Every detail of our accommodation has been thoughtfully designed to create a haven of
                                    comfort and serenity. From the moment you arrive, you'll feel the stress of everyday
                                    life melt away as you take in the panoramic vistas and breathe in the fresh sea air.
                                </p>
                                <p>
                                    Our host, Marietjie, is renowned for her exceptional hospitality — consistently rated
                                    10 out of 10 by our guests. Whether it's recommending the best local restaurants,
                                    arranging activities, or simply ensuring you have everything you need, the personal
                                    touch makes all the difference.
                                </p>
                            </div>

                            <div className="mt-8 flex items-center gap-4 p-4 bg-ocean/5 rounded-xl">
                                <div className="text-center">
                                    <p className="font-heading text-3xl font-bold text-ocean">9.9</p>
                                    <p className="text-xs text-muted-foreground">Rating</p>
                                </div>
                                <div className="w-px h-10 bg-border" />
                                <div className="text-center">
                                    <p className="font-heading text-3xl font-bold text-ocean">41+</p>
                                    <p className="text-xs text-muted-foreground">Reviews</p>
                                </div>
                                <div className="w-px h-10 bg-border" />
                                <div className="flex gap-0.5 items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="rounded-2xl overflow-hidden">
                                <img
                                    src="https://media.base44.com/images/public/69ba7d9838ba20504f0e1b68/ba1ee3c54_generated_c34a0afb.png"
                                    alt="De Santa Villas outdoor area and garden"
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ocean/10 rounded-full -z-10" />
                            <div className="absolute -top-6 -left-6 w-20 h-20 bg-ocean/5 rounded-full -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {values.map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                className="text-center"
                            >
                                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-ocean/10 flex items-center justify-center">
                                    <value.icon className="w-6 h-6 text-ocean" />
                                </div>
                                <h3 className="font-heading text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA />
        </>
    );
}