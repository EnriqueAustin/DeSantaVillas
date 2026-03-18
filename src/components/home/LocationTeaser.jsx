import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LocationTeaser() {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
                            Location
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-semibold mt-2 mb-4">
                            Discover St Helena Bay
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Nestled on the West Coast of South Africa, St Helena Bay is a hidden gem
                            known for its pristine beaches, spectacular sunsets, and laid-back coastal charm.
                            De Santa Villas sits perched above the bay, offering uninterrupted panoramic views.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-foreground/70 mb-8">
                            <MapPin size={16} className="text-ocean" />
                            10 Britannica Drive, St Helena Bay, 7390
                        </div>
                        <Link to="/Location">
                            <Button
                                variant="ghost"
                                className="text-ocean hover:text-ocean-dark hover:bg-ocean/5 p-0 h-auto font-medium gap-1.5"
                            >
                                Explore Nearby Attractions <ArrowRight size={16} />
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://media.base44.com/images/public/69ba7d9838ba20504f0e1b68/a6a76acc9_generated_2c774b30.png"
                                alt="St Helena Bay coastline and harbor"
                                className="w-full h-80 object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-ocean text-white rounded-xl p-5 shadow-lg">
                            <p className="font-heading text-2xl font-bold">10.0</p>
                            <p className="text-xs text-white/80">Location Rating</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}