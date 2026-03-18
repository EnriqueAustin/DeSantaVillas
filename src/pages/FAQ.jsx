import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageHero from "../components/shared/PageHero";
import DualCTA from "../components/shared/DualCTA";
import { FAQ_DATA } from "@/lib/siteData";

export default function FAQ() {
    return (
        <>
            <PageHero
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about your stay"
                image="https://media.base44.com/images/public/69ba7d9838ba20504f0e1b68/3f42a6993_generated_e2ec6f55.png"
            />

            <section className="py-20 lg:py-28">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Accordion type="single" collapsible className="space-y-3">
                            {FAQ_DATA.map((item, i) => (
                                <AccordionItem
                                    key={i}
                                    value={`faq-${i}`}
                                    className="bg-white rounded-xl px-6 border-none shadow-sm"
                                >
                                    <AccordionTrigger className="text-left font-medium text-sm sm:text-base hover:no-underline py-5">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-16 text-center"
                    >
                        <h3 className="font-heading text-2xl font-semibold mb-3">Still Have Questions?</h3>
                        <p className="text-muted-foreground mb-8">
                            Don't hesitate to reach out — we're always happy to help.
                        </p>
                        <DualCTA />
                    </motion.div>
                </div>
            </section>
        </>
    );
}