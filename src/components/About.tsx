"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "[ Why work with Aetherix ]",
    desc: "Painless team augmentation. Aetherix is your compass in the digital ocean. We unite purpose-driven minds who blend precision with creativity to deliver faster, smarter, risk-free engineering. We don’t just join your team. We amplify it.",
    footer: "Every partnership we build starts with trust and shared direction.",
    icon: "/images/why-aetherix.svg",
    photo: "/images/1.png",
  },
  {
    title: "Driven by Curiosity",
    desc: "Curiosity is where every idea begins. At Aetherix, we explore beyond conventions. We question. We experiment. We discover creative ways to turn imagination into reality.",
    footer: "Progress belongs to those who keep asking better questions.",
    icon: "/images/curiosity.svg",
    photo: "/images/2.png",
  },
  {
    title: "Engineered for Scalability",
    desc: "Scalability is more than architecture. It is foresight and integrity. We build systems that grow with you, adapting as your vision expands while staying true to their foundation.",
    footer: "We build for growth without sacrificing stability.",
    icon: "/images/stack.svg",
    photo: "/images/3.png",
  },
  {
    title: "Design that Resonates",
    desc: "We design for humans, not screens. Every motion and color feels intentional. Empathy guides every interaction so technology feels natural and connected.",
    footer: "Good design listens before it speaks.",
    icon: "/images/architecture.svg",
    photo: "/images/4.png",
  },
  {
    title: "Performance as a Promise",
    desc: "Performance is respect for time. We fine-tune every layer for speed and stability. Great engineering works quietly in the background, letting the experience speak for itself.",
    footer: "Reliability is the most honest form of performance.",
    icon: "/images/performance.svg",
    photo: "/images/5.png",
  },
  {
    title: "Secure by Principle",
    desc: "Security begins with respect. We protect data and people with care and transparency. Trust is not assumed here. It is earned through every decision we make.",
    footer: "Security is a responsibility, not a feature.",
    icon: "/images/secure.svg",
    photo: "/images/6.png",
  },
  {
    title: "The Realm of Aetherix",
    desc: "The helm completes its turn and reveals our true value. People who care. Systems that endure. Partnerships built on purpose. We don’t just build software. We build digital legacies shaped by human values.",
    footer: "This is what defines us when the work is done.",
    icon: "/images/realm.svg",
    photo: "/images/7.png",
  },
];




export default function AetherixScrollWheel() {
  const ref = useRef<HTMLDivElement>(null);

  // SCROLL SETUP
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Number of rotation steps equals number of cards - 1
  const steps = cards.length - 1;

  // Clamp scroll range so the wheel stops spinning when the last card hits center
  const rotate = useTransform(scrollYProgress, [0, steps / (steps + 1), 1], [0, 540, 540]);

  // Smooth spring for natural feel
  const rotateSmooth = useSpring(rotate, { stiffness: 40, damping: 30, mass: 0.6 });


  return (
    <section ref={ref} className="relative min-h-[900vh] bg-[#0C0018] text-white">
      <div className="sticky top-0 h-screen flex items-center justify-between overflow-hidden">
        {/* ship Helm – true circle, centred at left edge */}
        <motion.div
          style={{ rotate: rotateSmooth }}
          className="absolute -left-75 top-1/3 -translate-y-1/2 w-155 h-155 rounded-full flex items-center justify-center wheel-helm"
        >
          {/* Outer rim */}
<div className="absolute w-full h-full rounded-full wheel-rim" />

          {/* Inner hub */}
<div className="absolute w-40 h-40 rounded-full wheel-hub" />


          {/* 8 handles, protruding 10px beyond rim */}
{[...Array(7)].map((_, i) => (
  <div
    key={i}
    className="absolute w-4 h-193 wheel-spoke"
    style={{
      transform: `rotate(${i * 45}deg) translateY(-10px)`,
      transformOrigin: "center center",
    }}
  />
))}
        </motion.div>

        {/*Right-hand cards */}
<div className="ml-auto mr-50 w-[60%] h-full relative flex items-center justify-center overflow-hidden">
          {cards.map((card, index) => {
            const totalCards = cards.length;
            const stopPoint = (totalCards - 1) / totalCards;

            const cardOpacity = useTransform(
              scrollYProgress,
              [
                (index - 0.5) / totalCards,
                index / totalCards,
                (index + 0.5) / totalCards,
                stopPoint,
              ],
              [0, 1, 0, 0]
            );

            const cardY = useTransform(
              scrollYProgress,
              [
                (index - 0.5) / totalCards,
                index / totalCards,
                (index + 0.5) / totalCards,
                stopPoint,
              ],
              [120, 0, -120, -120]
            );

            return (
              <motion.div
                key={index}
                style={{ opacity: cardOpacity }}
                className="absolute inset-0 flex items-center"
              >
                {/* LEFT: Photo column */}
                <motion.div
                  style={{ y: cardY }}
                  className="w-[40%] h-full flex items-center justify-center pl-8"
                >
                  <img
                    src={card.photo}
                    alt={card.title}
                    className="w-full max-w-105 aspect-4/5 object-cover rounded-3xl shadow-2xl"
                  />
                </motion.div>

                {/* RIGHT: Card content column */}
                <motion.div
                  style={{ y: cardY }}
                  className="w-[60%] px-12"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 mb-6">
                    <div
                      className="w-full h-full bg-linear-to-br from-[#A580FF] to-[#7D4CDB]"
                      style={{
                        WebkitMaskImage: `url(${card.icon})`,
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskImage: `url(${card.icon})`,
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        maskSize: "contain",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-5xl font-extrabold leading-[1.2] pb-1 inline-block bg-linear-to-r from-[#B992FF] to-[#7D4CDB] bg-clip-text text-transparent mb-6">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-xl leading-relaxed mb-8">
                    {card.desc}
                  </p>

                  {/* Footer */}
                  <div className="max-w-xl p-6 rounded-2xl bg-linear-to-r from-[#210046] to-[#130028] border border-[#7D4CDB]/40">
                    <p className="text-[#C8A2FF] text-lg font-medium">
                      {card.footer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>

            );
          })}
        </div>

      </div>
    </section>
  );
}
