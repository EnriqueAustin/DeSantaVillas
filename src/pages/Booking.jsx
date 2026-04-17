import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, ExternalLink, Shield, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PageHero from "../components/shared/PageHero";
import { ROOMS, BOOKING_URL, PAGE_HERO_IMAGES } from "@/lib/siteData";

const benefits = [
    { icon: Shield, title: "Personalized Service", text: "We tailor your stay to your preferences." },
    { icon: MessageCircle, title: "Direct Communication", text: "Chat directly with your host before arrival." },
    { icon: Sparkles, title: "Flexible Requests", text: "Special arrangements? Just ask — we're happy to help." },
];

export default function Booking() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        checkin: "",
        checkout: "",
        guests: "",
        room: "",
        requests: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const updateField = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

    return (
        <>
            <PageHero
                title="Reserve Your Stay"
                subtitle="Book directly with us for a personalized experience"
                image={PAGE_HERO_IMAGES.booking}
            />

            <section className="py-20 lg:py-28">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Form */}
                        <div className="lg:col-span-3">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-ocean/5 border border-ocean/20 rounded-2xl p-12 text-center"
                                >
                                    <CheckCircle className="w-16 h-16 text-ocean mx-auto mb-6" />
                                    <h2 className="font-heading text-2xl font-semibold mb-3">
                                        Reservation Request Sent!
                                    </h2>
                                    <p className="text-muted-foreground max-w-md mx-auto">
                                        Your reservation request has been sent. We will contact you shortly to confirm your booking.
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <h2 className="font-heading text-2xl font-semibold mb-2">Booking Details</h2>
                                    <p className="text-muted-foreground mb-8 text-sm">
                                        Fill in the form below and we'll confirm your reservation within 24 hours.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <Label className="text-sm font-medium">Full Name</Label>
                                                <Input
                                                    placeholder="Your full name"
                                                    value={form.name}
                                                    onChange={(e) => updateField("name", e.target.value)}
                                                    required
                                                    className="mt-1.5 rounded-xl h-12"
                                                />
                                            </div>
                                            <div>
                                                <Label className="text-sm font-medium">Email Address</Label>
                                                <Input
                                                    type="email"
                                                    placeholder="you@example.com"
                                                    value={form.email}
                                                    onChange={(e) => updateField("email", e.target.value)}
                                                    required
                                                    className="mt-1.5 rounded-xl h-12"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-medium">Phone Number</Label>
                                            <Input
                                                type="tel"
                                                placeholder="+27 ..."
                                                value={form.phone}
                                                onChange={(e) => updateField("phone", e.target.value)}
                                                required
                                                className="mt-1.5 rounded-xl h-12"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <Label className="text-sm font-medium">Check-in Date</Label>
                                                <Input
                                                    type="date"
                                                    value={form.checkin}
                                                    onChange={(e) => updateField("checkin", e.target.value)}
                                                    required
                                                    className="mt-1.5 rounded-xl h-12"
                                                />
                                            </div>
                                            <div>
                                                <Label className="text-sm font-medium">Check-out Date</Label>
                                                <Input
                                                    type="date"
                                                    value={form.checkout}
                                                    onChange={(e) => updateField("checkout", e.target.value)}
                                                    required
                                                    className="mt-1.5 rounded-xl h-12"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <Label className="text-sm font-medium">Number of Guests</Label>
                                                <Select value={form.guests} onValueChange={(v) => updateField("guests", v)}>
                                                    <SelectTrigger className="mt-1.5 rounded-xl h-12">
                                                        <SelectValue placeholder="Select guests" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {[1, 2, 3, 4].map((n) => (
                                                            <SelectItem key={n} value={String(n)}>
                                                                {n} {n === 1 ? "Guest" : "Guests"}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div>
                                                <Label className="text-sm font-medium">Room Type</Label>
                                                <Select value={form.room} onValueChange={(v) => updateField("room", v)}>
                                                    <SelectTrigger className="mt-1.5 rounded-xl h-12">
                                                        <SelectValue placeholder="Select room" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {ROOMS.map((room) => (
                                                            <SelectItem key={room.id} value={room.id}>
                                                                {room.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div>
                                            <Label className="text-sm font-medium">Special Requests</Label>
                                            <Textarea
                                                placeholder="Any special requests or requirements..."
                                                value={form.requests}
                                                onChange={(e) => updateField("requests", e.target.value)}
                                                rows={4}
                                                className="mt-1.5 rounded-xl"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="bg-ocean hover:bg-ocean-light text-white rounded-full px-10 gap-2 shadow-lg shadow-ocean/20 w-full sm:w-auto"
                                        >
                                            Submit Reservation <Send size={16} />
                                        </Button>
                                    </form>
                                </motion.div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Booking.com CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white rounded-2xl p-8 shadow-sm"
                            >
                                <h3 className="font-heading text-lg font-semibold mb-2">
                                    Prefer Instant Booking?
                                </h3>
                                <p className="text-sm text-muted-foreground mb-5">
                                    Book instantly through Booking.com with their price match guarantee.
                                </p>
                                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="block">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="w-full rounded-full border-ocean/30 text-ocean hover:bg-ocean/5 gap-2"
                                    >
                                        Book on Booking.com <ExternalLink size={16} />
                                    </Button>
                                </a>
                            </motion.div>

                            {/* Benefits */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="bg-ocean/5 rounded-2xl p-8"
                            >
                                <h3 className="font-heading text-lg font-semibold mb-5">
                                    Why Book Directly?
                                </h3>
                                <div className="space-y-5">
                                    {benefits.map((b) => (
                                        <div key={b.title} className="flex gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-ocean/10 flex items-center justify-center shrink-0">
                                                <b.icon size={18} className="text-ocean" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm">{b.title}</p>
                                                <p className="text-xs text-muted-foreground">{b.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
