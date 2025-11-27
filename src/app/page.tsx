"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Home() {
  const works = [
    { title: "Project One", description: "Interfaz limpia enfocada en experiencia y accesibilidad.", images: ["/work1.jpg", "/work1b.jpg"] },
    { title: "Project Two", description: "Sistema visual minimalista con enfoque editorial.", images: ["/work2.jpg", "/work2b.jpg"] },
    { title: "Project Three", description: "E-commerce refinado con interacción fluida.", images: ["/work3.jpg", "/work3b.jpg"] },
    { title: "Project Four", description: "Exploración visual experimental enfocada en ritmo y silencio.", images: ["/work4.jpg", "/work4b.jpg"] },
  ];

  const education = [
    { img: "/edu1.jpg", text: "Certificado • UI / Branding" },
    { img: "/edu2.jpg", text: "Certificado • React / Next.js" },
    { img: "/edu3.jpg", text: "Certificado • UX Research" },
  ];

  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="relative min-h-screen w-full">

      {/* BACKGROUND */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.jpg')" }}
      ></div>

      {/* OVERLAY */}
      <div className="fixed inset-0 bg-white/35 dark:bg-black/45 backdrop-blur-sm"></div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full h-[60px] flex items-center justify-between px-10 backdrop-blur-lg bg-white/10 dark:bg-black/20 border-b border-neutral-300 dark:border-neutral-700 z-50">
        <nav className="flex gap-8 text-sm tracking-wide uppercase">
          <Link to="about" smooth duration={600} className="cursor-pointer hover:opacity-50 transition">About</Link>
          <Link to="works" smooth duration={600} className="cursor-pointer hover:opacity-50 transition">Works</Link>
          <Link to="education" smooth duration={600} className="cursor-pointer hover:opacity-50 transition">Education</Link>
          <Link to="contact" smooth duration={600} className="cursor-pointer hover:opacity-50 transition">Contact</Link>
        </nav>

        <Image src="/logo.png" width={30} height={30} alt="logo" className="cursor-pointer opacity-80 hover:opacity-50 transition" />
      </header>

      {/* CONTENT */}
      <main className="relative z-10 px-6 sm:px-24 pt-[120px] pb-32 space-y-[160px] text-black dark:text-white overflow-hidden">

        {/* ABOUT */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
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
        <motion.section
          id="works"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {works.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative group rounded-xl overflow-hidden border border-neutral-300 dark:border-neutral-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={work.images[imageIndex]}
                width={1600}
                height={900}
                alt={work.title}
                className="object-cover w-full h-[380px] md:h-[430px] group-hover:brightness-[55%] transition duration-500"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition duration-500">
                <h2 className="text-3xl font-semibold">{work.title}</h2>
                <p className="text-sm max-w-md mt-4 text-center">{work.description}</p>
              </div>

              {/* Controls */}
              <button
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl opacity-40 hover:opacity-100 transition"
                onClick={() => setImageIndex(prev => prev === 0 ? work.images.length - 1 : prev - 1)}
              >
                ‹
              </button>
              <button
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl opacity-40 hover:opacity-100 transition"
                onClick={() => setImageIndex(prev => (prev + 1) % work.images.length)}
              >
                ›
              </button>
            </motion.div>
          ))}
        </motion.section>

        {/* EDUCATION */}
        <motion.section
          id="education"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative group rounded-xl overflow-hidden border border-neutral-300 dark:border-neutral-700 shadow-sm hover:shadow-lg transition-all"
            >
              <Image
                src={item.img}
                width={1300}
                height={700}
                alt="Education"
                className="object-cover w-full h-[240px] group-hover:brightness-[55%] transition duration-500"
              />
              <p className="absolute inset-0 flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition duration-500">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
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
