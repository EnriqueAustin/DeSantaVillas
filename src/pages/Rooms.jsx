import React from "react";
import PageHero from "../components/shared/PageHero";
import RoomCard from "../components/rooms/RoomCard";
import FinalCTA from "../components/home/FinalCTA";
import { ROOMS, PAGE_HERO_IMAGES } from "@/lib/siteData";

export default function Rooms() {
    return (
        <>
            <PageHero
                title="Accommodation"
                subtitle="Modern coastal apartments with breathtaking sea views"
                image={PAGE_HERO_IMAGES.rooms}
            />

            <section className="py-20 lg:py-28">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    {ROOMS.map((room, i) => (
                        <RoomCard key={room.id} room={room} index={i} />
                    ))}
                </div>
            </section>

            <FinalCTA />
        </>
    );
}
