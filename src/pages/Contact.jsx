import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PageHero from "../components/shared/PageHero";
import DualCTA from "../components/shared/DualCTA";
import { CONTACT_INFO, PAGE_HERO_IMAGES } from "@/lib/siteData";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <PageHero
                title="Contact Us"
                subtitle="We'd love to hear from you"
                image={PAGE_HERO_IMAGES.contact}
            />

            <section className="py-20 lg:py-28">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-heading text-3xl font-semibold mb-2">Get in Touch</h2>
                            <p className="text-muted-foreground mb-8">
                                Have a question or want to learn more? Send us a message and we'll get back to you shortly.
                            </p>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-ocean/5 border border-ocean/20 rounded-2xl p-10 text-center"
                                >
                                    <CheckCircle className="w-12 h-12 text-ocean mx-auto mb-4" />
                                    <h3 className="font-heading text-xl font-semibold mb-2">Message Sent!</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Thank you for reaching out. We'll get back to you as soon as possible.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="Your full name"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            required
                                            className="mt-1.5 rounded-xl h-12"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            required
                                            className="mt-1.5 rounded-xl h-12"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="How can we help you?"
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            required
                                            rows={5}
                                            className="mt-1.5 rounded-xl"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="bg-ocean hover:bg-ocean-light text-white rounded-full px-8 gap-2 shadow-lg shadow-ocean/20"
                                    >
                                        Send Message <Send size={16} />
                                    </Button>
                                </form>
                            )}
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="font-heading text-3xl font-semibold mb-2">Contact Details</h2>
                                <p className="text-muted-foreground mb-8">
                                    Reach out directly or visit us at De Santa Villas.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { icon: MapPin, label: "Address", value: CONTACT_INFO.address },
                                    { icon: Phone, label: "Phone", value: CONTACT_INFO.phone },
                                    { icon: Mail, label: "Email", value: CONTACT_INFO.email },
                                ].map((item) => (
                                    <div key={item.label} className="flex gap-4 p-5 bg-white rounded-xl">
                                        <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center shrink-0">
                                            <item.icon size={20} className="text-ocean" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                                                {item.label}
                                            </p>
                                            <p className="font-medium text-sm">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Book CTA */}
                            <div className="p-8 bg-ocean/5 rounded-2xl">
                                <h3 className="font-heading text-xl font-semibold mb-2">Ready to Book?</h3>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Reserve your stay directly with us or through Booking.com.
                                </p>
                                <DualCTA />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
