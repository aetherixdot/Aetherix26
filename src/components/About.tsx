"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "Why work with Aetherix ?",
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

// Individual Bubble Component
function Bubble({ 
  index, 
  scrollYProgress 
}: { 
  index: number; 
  scrollYProgress: any;
}) {
  // Use index-based deterministic values instead of Math.random()
  const randomSize = 6 + ((index * 7.91) % 28);
  const randomRight = ((index * 13.7) % 80);
  const randomStartBottom = ((index * 19.3) % 40) + 10; // Start from bottom: 10-50vh
  const speed = 300 + ((index * 47) % 600);
  const xVariation = ((index * 23) % 100) - 50;
  const opacityVariation1 = 0.3 + ((index * 13) % 50) * 0.01;
  const opacityVariation2 = 0.3 + ((index * 17) % 50) * 0.01;
  
  // Detach bubbles from rotation - simpler independent animations
  const bubbleY = useTransform(scrollYProgress, [0, 1], [0, -speed]);
  const bubbleX = useTransform(scrollYProgress, [0, 1], [0, xVariation]);
  const bubbleOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 1],
    [0, opacityVariation1, opacityVariation2, 0]
  );

  return (
    <motion.div
      style={{
        y: bubbleY,
        x: bubbleX,
        opacity: bubbleOpacity,
        right: `${randomRight}%`,
        bottom: `${randomStartBottom}vh`,
      }}
      className="absolute pointer-events-none"
      will-change="transform, opacity"
    >
      <div
        className="bubble rounded-full bg-linear-to-br from-[#A580FF]/50 to-[#7D4CDB]/25 border border-[#8b74e6]/40 backdrop-blur-md"
        style={{
          width: `${randomSize}px`,
          height: `${randomSize}px`,
          boxShadow: `
            inset -3px -3px 6px rgba(0,0,0,0.4), 
            inset 3px 3px 6px rgba(255,255,255,0.15),
            0 0 ${randomSize}px rgba(165, 128, 255, 0.5),
            0 0 ${randomSize * 1.5}px rgba(165, 128, 255, 0.2)
          `,
        }}
      />
    </motion.div>
  );
}

// Floating Bubbles Component
function Bubbles({ scrollYProgress }: { scrollYProgress: any }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 12 }, (_, i) => (
        <Bubble key={i} index={i} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}

export default function AetherixScrollWheel() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const steps = cards.length - 1;
  const rotate = useTransform(
    scrollYProgress,
    [0, steps / (steps + 1), 1],
    [0, 540, 540]
  );

  const rotateSmooth = useSpring(rotate, {
    stiffness: 100,
    damping: 50,
    mass: 0.2,
  });

  return (
    <section ref={ref} className="relative bg-[#121212] text-white">
      {/* ================= SECTION HEADING ================= */}
      <div className="px-6 sm:px-12 md:px-24 pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-12 md:pb-16">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
        Our <span className="text-(--color-accent-hover)">Values</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
          What defines us. The principles that guide every decision, every design, every line of code.
        </p>
      </div>

      {/* ================= DESKTOP / TABLET ONLY ================= */}
      <div className="hidden md:block min-h-[800vh] lg:min-h-[900vh]">
        <div className="sticky top-0 h-screen flex items-center justify-between overflow-hidden px-6 lg:px-12" style={{ willChange: "transform" }}>
          
          {/* FLOATING BUBBLES */}
          <Bubbles scrollYProgress={scrollYProgress} />

          {/* LEFT: WHEEL */}
          <div className="wheel-scale opacity-60 lg:opacity-60 shrink-0 relative z-10 pointer-events-none">
            <motion.div
              style={{ rotate: rotateSmooth, width: 620, height: 620 }}
              className="wheel-helm rounded-full flex items-center justify-center will-change-transform"
            >
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
              <div className="absolute w-full h-full rounded-full wheel-rim" />
              <div className="absolute w-40 h-40 rounded-full wheel-hub" />
            </motion.div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="relative h-full flex items-center overflow-hidden right-stage ">
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
                  className="absolute inset-0 flex items-center gap-8 lg:gap-12 will-change-opacity"
                >
                  <motion.div style={{ y: cardY }} className="card-photo h-full flex items-center justify-center shrink-0 z-30 will-change-transform">
                    <img
                      src={card.photo}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-3xl shadow-2xl"
                    />
                  </motion.div>

                  <motion.div style={{ y: cardY }} className="card-content h-full flex flex-col justify-center shrink-0 will-change-transform">
                    <div className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6">
                      <div
                        className="w-full h-full bg-linear-to-br from-[#A580FF] to-[#7D4CDB]"
                        style={{
                          WebkitMaskImage: `url(${card.icon})`,
                          WebkitMaskRepeat: "no-repeat",
                          WebkitMaskPosition: "center",
                          WebkitMaskSize: "contain",
                        }}
                      />
                    </div>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6 text-(--color-accent-hover)">
                      {card.title}
                    </h3>

                    <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8">
                      {card.desc}
                    </p>

                    <div className="max-w-xl p-4 md:p-6 rounded-2xl bg-white/10 border border-white/15">
                      <p className="text-white text-base md:text-lg font-medium">
                        {card.footer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= TABLET (MEDIUM) FALLBACK ================= */}
      <div className="hidden sm:block md:hidden px-6 py-16 space-y-16 min-h-screen">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center"
          >
            <div className="space-y-6">
              <div className="w-16 h-16">
                <div
                  className="w-full h-full bg-linear-to-br from-[#A580FF] to-[#7D4CDB]"
                  style={{
                    WebkitMaskImage: `url(${card.icon})`,
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    WebkitMaskSize: "contain",
                  }}
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-(--color-accent-hover)">
                {card.title}
              </h3>
              <p className="text-white text-base leading-relaxed">
                {card.desc}
              </p>
              <p className="text-[#C8A2FF] text-sm">
                {card.footer}
              </p>
            </div>
            <div>
              <img
                src={card.photo}
                alt={card.title}
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= MOBILE ONLY ================= */}
      <div className="sm:hidden px-4 py-12 space-y-16">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <img
              src={card.photo}
              alt={card.title}
              className="w-full rounded-xl object-cover aspect-4/5"
            />

            <div className="w-12 h-12">
              <div
                className="w-full h-full bg-linear-to-br from-[#A580FF] to-[#7D4CDB]"
                style={{
                  WebkitMaskImage: `url(${card.icon})`,
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  WebkitMaskSize: "contain",
                }}
              />
            </div>

            <h3 className="text-xl font-medium text-(--color-accent-hover)">
              {card.title}
            </h3>

            <p className="text-white text-sm leading-relaxed">
              {card.desc}
            </p>

            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-[#C8A2FF] text-xs font-medium">
                {card.footer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}