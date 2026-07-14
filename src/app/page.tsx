"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Heart,
  Building2,
  GraduationCap,
  MapPin,
  ArrowRight,
  Shield,
  BookOpen,
  Code,
  Sparkles,
} from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Volunteers",
    description:
      "Build a CV that actually says something. Lead sessions, mentor students, and gain real experience.",
    href: "/volunteers",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    icon: Heart,
    title: "NGOs",
    description:
      "You already have the trust. We bring the volunteers, curriculum, and expertise. Partner with us.",
    href: "/ngos",
    color: "from-rose-500/20 to-pink-500/20",
    border: "border-rose-500/30",
    iconColor: "text-rose-400",
  },
  {
    icon: Building2,
    title: "CSR & Corporate",
    description:
      "Create impact that lasts. Sponsor programs, engage employees, and get measurable results.",
    href: "/csr",
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    icon: GraduationCap,
    title: "Schools",
    description:
      "Future-ready skills for your students. Zero cost to your institution.",
    href: "/schools",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    icon: MapPin,
    title: "Start a Chapter",
    description:
      "Build something bigger than yourself. Lead real projects in your community.",
    href: "/start-chapter",
    color: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/30",
    iconColor: "text-violet-400",
  },
];

const stats = [
  { value: "6+", label: "Active Chapters" },
  { value: "150M+", label: "Citizens Without Access" },
  { value: "₹70K+", label: "Raised" },
  { value: "20+", label: "Teaching Sessions" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
        {/* Animated background grid */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(92,124,250,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(92,124,250,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(92,124,250,0.15),transparent)]"
          />
          {/* Floating orbs */}
          <motion.div
            animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-brand-600/10 blur-3xl"
          />
          <motion.div
            animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-brand-400/10 blur-3xl"
          />
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/3 right-1/3 h-48 w-48 rounded-full bg-accent-500/5 blur-3xl"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">
              <Sparkles className="h-4 w-4" />
              Partner Program
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl md:leading-[1.1]">
              Build the future.
              <br />
              <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-accent-400 bg-clip-text text-transparent">
                Partner with us.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-dark-300 md:text-xl">
              ByteByByte bridges the digital divide across India and beyond.
              Whether you&apos;re a student, NGO, company, or school &mdash;
              there&apos;s a way for you to create real impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#choose"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-600/25"
            >
              Find Your Path
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://bbb-initiative.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-dark-700 px-6 py-3 text-sm font-semibold text-dark-200 transition-all hover:border-dark-500 hover:bg-dark-800"
            >
              Visit Our Website
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats ticker */}
      <section className="border-y border-dark-800 bg-dark-900/50">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-6 py-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-white md:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-dark-400">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              What We Do
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-dark-300">
              ByteByByte bridges the digital divide across India and beyond.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Student Cohorts",
                desc: "8-session digital literacy and AI programs for ages 12 to 18.",
              },
              {
                icon: Shield,
                title: "ByteShield Circles",
                desc: "Cybersecurity workshops helping seniors spot scams and use tech confidently.",
              },
              {
                icon: Code,
                title: "Future Creators",
                desc: "Beginner coding and hands-on projects — students build real things.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-dark-800 bg-dark-900/50 p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10">
                  <item.icon className="h-6 w-6 text-brand-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-dark-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center text-dark-400">
            We believe tech should create opportunities, not barriers.
          </p>
        </div>
      </section>

      {/* Choose your path */}
      <section id="choose" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Choose Your Path
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-dark-300">
              There are many ways to get involved. Pick what fits you best.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {audiences.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={a.href}
                  className={`group block rounded-2xl border ${a.border} bg-gradient-to-br ${a.color} p-6 transition-all hover:scale-[1.02] hover:shadow-lg`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-dark-900/80">
                    <a.icon className={`h-6 w-6 ${a.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-dark-300">{a.description}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-300 group-hover:text-brand-200">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-500/10 to-brand-600/5 p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to make a difference?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-dark-300">
            Every lesson taught, every scam prevented, every student encouraged
            &mdash; it all matters. We hope you&apos;ll be part of it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:bytebybyteinitiative@gmail.com?subject=Partner%20Inquiry"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-500"
            >
              Get in Touch
            </a>
            <a
              href="https://bbb-initiative.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-dark-700 px-6 py-3 text-sm font-semibold text-dark-200 transition-all hover:border-dark-500 hover:bg-dark-800"
            >
              Visit Our Main Site
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
