import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "../components/shared/PageHero";
import { GALLERY_IMAGES } from "@/lib/siteData";

const CATEGORIES = ["all", "rooms", "views", "exterior", "surroundings"];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const filteredImages =
        activeCategory === "all"
            ? GALLERY_IMAGES
            : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const navigate = (dir) => {
        setLightboxIndex((prev) => {
            const next = prev + dir;
            if (next < 0) return filteredImages.length - 1;
            if (next >= filteredImages.length) return 0;
            return next;
        });
    };

    return (
        <>
            <PageHero
                title="Gallery"
                subtitle="Explore the beauty of De Santa Villas and St Helena Bay"
                image="https://media.base44.com/images/public/69ba7d9838ba20504f0e1b68/3f42a6993_generated_e2ec6f55.png"
            />

            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filters */}
                    <div className="flex justify-center gap-2 mb-12 flex-wrap">
                        {CATEGORIES.map((cat) => (
                            <Button
                                key={cat}
                                variant={activeCategory === cat ? "default" : "ghost"}
                                size="sm"
                                onClick={() => setActiveCategory(cat)}
                                className={`rounded-full capitalize ${activeCategory === cat
                                        ? "bg-ocean hover:bg-ocean-light text-white"
                                        : "text-muted-foreground hover:text-ocean hover:bg-ocean/5"
                                    }`}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
                        <AnimatePresence mode="popLayout">
                            {filteredImages.map((img, i) => (
                                <motion.div
                                    key={img.src}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative overflow-hidden rounded-xl cursor-pointer group aspect-[4/3]"
                                    onClick={() => openLightbox(i)}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                                        <span className="text-white text-sm font-medium px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {img.alt}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
                        >
                            <X size={28} />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-2"
                        >
                            <ChevronLeft size={36} />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); navigate(1); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-2"
                        >
                            <ChevronRight size={36} />
                        </button>
                        <motion.img
                            key={filteredImages[lightboxIndex]?.src}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            src={filteredImages[lightboxIndex]?.src}
                            alt={filteredImages[lightboxIndex]?.alt}
                            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}