"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const links = [
  { href: "/volunteers", label: "Volunteers" },
  { href: "/ngos", label: "NGOs" },
  { href: "/csr", label: "CSR" },
  { href: "/schools", label: "Schools" },
  { href: "/start-chapter", label: "Start a Chapter" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    setScrolled(latest > 20);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(6, 14, 58, 0.85)" : "rgba(6, 14, 58, 0)",
        backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        borderBottom: scrolled ? "1px solid rgba(22, 32, 92, 0.6)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="ByteByByte logo"
            width={140}
            height={32}
            className="h-7 w-auto rounded"
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm text-ink-300 transition-colors hover:text-spark-500"
            >
              {l.label}
              <motion.span
                layoutId={`nav-underline-${l.href}`}
                className="absolute left-4 right-4 -bottom-0.5 h-0.5 origin-left bg-spark-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-ink-200"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-ink-200"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-ink-200"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-navy-700/60 bg-navy-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm text-ink-300 transition-colors hover:bg-navy-800 hover:text-spark-500"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}