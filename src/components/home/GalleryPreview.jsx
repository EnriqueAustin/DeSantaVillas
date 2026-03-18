import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GALLERY_IMAGES } from "@/lib/siteData";
import SectionHeading from "../shared/SectionHeading";

export default function GalleryPreview() {
    const previewImages = GALLERY_IMAGES.slice(0, 4);

    return (
        <section className="py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Gallery"
                    title="A Glimpse of Paradise"
                    description="Explore the beauty of De Santa Villas and the stunning West Coast surroundings."
                />

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                    {previewImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className={`relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2 h-64 lg:h-auto" : "h-32 lg:h-48"
                                } group`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link to="/Gallery">
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full border-ocean/30 text-ocean hover:bg-ocean/5 gap-2"
                        >
                            View Full Gallery <ArrowRight size={16} />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}