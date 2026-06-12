"use client";
import React from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "The craftsmanship on my custom engagement ring is breathtaking. Christopher's attention to detail and the quality of the stones exceeded every expectation.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    name: "Emily Hartwell",
    role: "Bride, Chicago IL",
  },
  {
    text: "I brought in my grandmother's antique brooch for restoration and the results were stunning. They preserved every detail while making it wearable again.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    name: "Marcus Reid",
    role: "Loyal Customer",
  },
  {
    text: "The anniversary band they designed for my wife brought tears to her eyes. The personalized engraving and diamond setting were flawlessly executed.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    name: "Daniel Torres",
    role: "Anniversary Gift",
  },
  {
    text: "Christopher guided us through selecting the perfect sapphire for our heirloom piece. His knowledge and patience made the whole experience special.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    name: "Sophia Chen",
    role: "Custom Piece Client",
  },
  {
    text: "I've bought jewelry all over the world and Christopher's Fine Jewelers stands in a league of its own. The quality and service are simply unmatched.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    name: "James Whitfield",
    role: "Collector",
  },
  {
    text: "My pearl necklace repair was done in two days and it looks brand new. The care they take with every piece — even repairs — shows true craftsmanship.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    name: "Natalie Russo",
    role: "Repair Customer",
  },
  {
    text: "The gold earrings I purchased as a gift were wrapped beautifully and my mother cried happy tears. Christopher's makes gifting jewelry an experience.",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=80&h=80&fit=crop&crop=face",
    name: "Rachel Park",
    role: "Gift Buyer",
  },
  {
    text: "They sized my vintage diamond ring perfectly without disturbing the original setting. The expertise here is rare and incredibly reassuring.",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop&crop=face",
    name: "Victor Okafor",
    role: "Vintage Jewelry Owner",
  },
  {
    text: "Our wedding bands were crafted to our exact specifications. Even years later they still get compliments everywhere we go. Worth every penny.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&h=80&fit=crop&crop=face",
    name: "Leah & Tom Brennan",
    role: "Wedding Clients",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full"
                key={i}
              >
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">{name}</div>
                    <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};

export { testimonials };
