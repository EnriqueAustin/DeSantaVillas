import React from "react";
import HeroSection from "../components/home/HeroSection";
import HighlightsSection from "../components/home/HighlightsSection";
import FeaturedRooms from "../components/home/FeaturedRooms";
import GalleryPreview from "../components/home/GalleryPreview";
import TestimonialsSection from "../components/home/TestimonialsSection";
import LocationTeaser from "../components/home/LocationTeaser";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
    return (
        <>
            <HeroSection />
            <HighlightsSection />
            <FeaturedRooms />
            <GalleryPreview />
            <TestimonialsSection />
            <LocationTeaser />
            <FinalCTA />
        </>
    );
}