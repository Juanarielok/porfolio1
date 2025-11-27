"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Home() {
  const works = [
    {
      title: "Hidegori Toys",
      description: "An e-commerce project using TypeScript, React and TailwindCSS.",
      images: ["/work11.jpg", "/work1bb.jpg"],
    },
    {
      title: "Sunny Notes",
      description: "Android diary app built with Kotlin.",
      images: ["/work222112.jpg", "/work2bb.jpg"],
    },
    {
      title: "Hero Sheet",
      description: "Role cards simulator / game project.",
      images: ["/work33.jpg", "/work3bb.jpg"],
    },
    {
      title: "Generative AI Platform for Creatives",
      description:
        "Next.js web platform providing creative workflows enhanced by AI.",
      images: ["/work44.jpg", "/work4bb.jpg"],
    },
  ];

  // individual index for each work
  const [indices, setIndices] = useState(Array(works.length).fill(0));

  const changeImage = (workIndex, direction) => {
    setIndices((prev) => {
      const updated = [...prev];
      const imgCount = works[workIndex].images.length;

      updated[workIndex] =
        direction === "next"
          ? (updated[workIndex] + 1) % imgCount
          : updated[workIndex] === 0
          ? imgCount - 1
          : updated[workIndex] - 1;

      return updated;
    });
  };

  return (
    <div className="relative min-h-screen w-full">

      {/* BACKGROUND */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />

      {/* GLASS OVERLAY */}
      <div className="fixed inset-0 bg-white/25 dark:bg-black/45 backdrop-blur-sm -z-10" />

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full h-[60px] flex items-center justify-between px-10 backdrop-blur-xl bg-white/10 dark:bg-black/20 border-b border-neutral-300 dark:border-neutral-700 z-50">
        <nav className="flex gap-8 text-sm tracking-wide uppercase">
          <Link to="about" smooth duration={500} className="cursor-pointer hover:opacity-60 transition">
            About
          </Link>
          <Link to="works" smooth duration={500} className="cursor-pointer hover:opacity-60 transition">
            Works
          </Link>
          <Link to="contact" smooth duration={500} className="cursor-pointer hover:opacity-60 transition">
            Contact
          </Link>
        </nav>

        <Image
          src="/logo5533.png"
          width={40}
          height={40}
          priority
          alt="logo553"
          className="cursor-pointer opacity-80 hover:opacity-50 transition"
        />
      </header>

      {/* CONTENT */}
      <main className="relative z-10 px-6 sm:px-24 pt-[120px] pb-32 space-y-[160px] text-black dark:text-white">

        {/* ABOUT */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="min-h-[60vh] flex items-center justify-center sm:justify-start"
        >
          <p className="max-w-2xl text-[18px] leading-relaxed opacity-90 text-center sm:text-left">
            I’m Juan Ariel — a designer and developer with a minimalist mindset.
            I’m interested in the intersection of aesthetics, technology, and purpose.
            I create quiet, intentional, and functional interfaces.
          </p>
        </motion.section>

        {/* WORKS */}
        <section id="works" className="space-y-16">
          {works.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative group rounded-xl overflow-hidden border border-neutral-300 dark:border-neutral-700 shadow-lg hover:shadow-xl transition-all duration-300 will-change-transform"
            >
              <Image
                src={work.images[indices[i]]}
                width={1300}
                height={700}
                alt={work.title}
                className="object-cover w-full h-[240px] md:h-[430px] transition-transform duration-500 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition duration-500 bg-black/30 backdrop-blur-sm">
                <h2 className="text-3xl font-semibold">{work.title}</h2>
                <p className="text-sm max-w-md mt-4 text-center">{work.description}</p>
              </div>

              {/* Buttons now only affect single card */}
              <button
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl opacity-50 hover:opacity-100 transition"
                onClick={() => changeImage(i, "prev")}
              >
                ‹
              </button>
              <button
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl opacity-50 hover:opacity-100 transition"
                onClick={() => changeImage(i, "next")}
              >
                ›
              </button>
            </motion.div>
          ))}
        </section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center py-20"
        >
          <p className="text-lg opacity-70 mb-4">Write me about your next project at</p>
          <a
            href="mailto:juaniprograma@gmail.com"
            className="text-2xl md:text-3xl font-light border-b border-transparent hover:border-white/50 hover:opacity-70 transition-all duration-300"
          >
            juaniprograma@gmail.com
          </a>
        </motion.section>

      </main>
    </div>
  );
}
