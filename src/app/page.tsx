"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Heart,
  Building2,
  GraduationCap,
  MapPin,
  ArrowRight,
  ArrowDown,
  Shield,
  BookOpen,
  Code,
  Sparkles,
  Globe,
  TrendingUp,
  Zap,
  Languages,
  Repeat,
  Award,
  FileText,
} from "lucide-react";
import { Counter } from "@/components/counter";
import { TiltCard } from "@/components/tilt-card";
import { GlowCard } from "@/components/glow-card";
import { MagneticButton } from "@/components/magnetic-button";

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
  { target: 8, suffix: "", label: "Active Chapters", prefix: "" },
  { target: 2, suffix: "", label: "Active Countries", prefix: "" },
  { target: 7, suffix: "", label: "Cities in India", prefix: "" },
  { target: 47, suffix: "", label: "Volunteers", prefix: "" },
  { target: 35, suffix: "", label: "Sessions Delivered", prefix: "" },
  { target: 70, suffix: "", label: "Hours of Content", prefix: "" },
  { target: 16, suffix: "", label: "Avg Age of Team", prefix: "" },
  { target: 95, suffix: "%", label: "Return Rate", prefix: "" },
  { target: 3, suffix: "", label: "Languages", prefix: "" },
  { target: 8, suffix: "", label: "Partners", prefix: "" },
  { target: 730, suffix: "", label: "Social Followers", prefix: "" },
  { target: 2000, suffix: "", label: "Avg Post Reach", prefix: "~" },
];

const tickerItems = [
  "8 Active Chapters",
  "2 Countries",
  "7 India Cities",
  "47 Volunteers",
  "16 Avg Age",
  "95% Return Rate",
  "35 Sessions Delivered",
  "70 Hours of Content",
  "3 Languages",
  "8 Partners",
  "Youth-Led",
  "Impact-Driven",
  "Open to All",
];

const programs = [
  {
    icon: BookOpen,
    title: "Student Cohorts",
    desc: "8-session digital literacy and AI programs for ages 12 to 18, covering MS Office, Canva, LLMs, Prompt Engineering, Digital Footprint, Career Options with AI, and Generative Image generation.",
    tags: ["MS Office", "Canva & Adobe", "LLMs", "Prompt Engineering", "Digital Footprint", "AI Career Options", "Gen AI Images"],
  },
  {
    icon: Shield,
    title: "ByteShield Circles",
    desc: "Cybersecurity workshops helping seniors spot scams and use tech confidently. Run by volunteers, in any language, in about two hours.",
    tags: ["Scam Detection", "Phone Safety", "AI Voice Scams", "OTP Rules", "Helpline 1930"],
  },
  {
    icon: Code,
    title: "Future Creators",
    desc: "Beyond learning, we encourage students to build. Through beginner coding and hands-on projects, they learn to create with technology, solve real problems, and bring ideas to life.",
    tags: ["Scratch Games", "Websites", "AI Projects", "Real Output"],
  },
];

const narratives = [
  {
    title: "Youth-led, by design",
    desc: "ByteByByte is built and run by young people, for young people. The story isn't 'an org that teaches AI to youth' but 'youth who decided to teach AI to other youth.'",
    stat: "16",
    statLabel: "avg age of core team",
  },
  {
    title: "AI literacy as access, not privilege",
    desc: "AI literacy is something every young person deserves, regardless of school, city, or income — not a niche skill for the already-privileged.",
    stat: "150M+",
    statLabel: "citizens without access",
  },
  {
    title: "Two countries, one mission",
    desc: "Chapters across India and Egypt give ByteByByte a cross-border, cross-culture story: a shared mission adapted to different contexts.",
    stat: "2",
    statLabel: "countries, growing",
  },
  {
    title: "Grassroots to global",
    desc: "A small, scrappy, community-led effort growing into something bigger. Started with one chapter, now spans 7 cities and 2 countries in 10 months.",
    stat: "10",
    statLabel: "months since founding",
  },
  {
    title: "From student to leader",
    desc: "Chapter leads and volunteers grow into leadership roles through BBB itself, making it a leadership pipeline as much as an education org.",
    stat: "8",
    statLabel: "chapter leads onboarded",
  },
  {
    title: "Peer-to-peer, not top-down",
    desc: "Learning happens through community, conversation, and shared curiosity — not a traditional classroom model. Communities first, classes second.",
    stat: "95%",
    statLabel: "participant return rate",
  },
  {
    title: "Responsible and curious",
    desc: "Thoughtful about AI: encouraging curiosity and responsible use rather than blind hype or fear. Critical thinking and ethics as part of the literacy itself.",
    stat: "7",
    statLabel: "curriculum modules",
  },
  {
    title: "Local language, local relevance",
    desc: "Content and sessions adapted to local context and language. Not just translation — adaptation that makes the work feel relevant rather than imported.",
    stat: "3",
    statLabel: "languages of delivery",
  },
];

const timeline = [
  {
    date: "Aug 2025",
    title: "ByteByByte Founded",
    desc: "A small group of young people decided to bridge the digital divide, starting with one chapter in Pune.",
    milestone: true,
  },
  {
    date: "2025",
    title: "First Chapter: Pune",
    desc: "Partnership with Sneh Foundation. 2 documented youth reached in December 2025 — the beginning of everything.",
    milestone: true,
  },
  {
    date: "2025-26",
    title: "Expansion Across India",
    desc: "Chapters launched in Jaipur, Mumbai, Hyderabad, Chandigarh, Ahmedabad, and Bangalore — 7 cities and growing.",
  },
  {
    date: "2026",
    title: "First Cross-Border: Egypt",
    desc: "ByteByByte goes international with its first chapter in Egypt — a shared mission adapted to a new context.",
    milestone: true,
  },
  {
    date: "Today",
    title: "8 Active Chapters, 47 Volunteers",
    desc: "35 sessions delivered, 70 hours of content, 3 languages, 8 partners. Validated by Sneh Foundation and Venn.",
  },
];

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
        {/* Animated background */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div style={{ y: heroY, opacity: heroOpacity, scale: heroScale }} className="h-full w-full">
            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(92,124,250,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(92,124,250,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* Animated gradient orbs */}
            <motion.div
              animate={{ y: [-30, 30, -30], x: [-15, 15, -15], scale: [1, 1.1, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-[15%] h-80 w-80 rounded-full bg-brand-600/[0.08] blur-3xl animate-blob"
            />
            <motion.div
              animate={{ y: [30, -30, 30], x: [15, -15, 15], scale: [1, 1.2, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 right-[15%] h-96 w-96 rounded-full bg-brand-400/[0.06] blur-3xl animate-blob"
            />
            <motion.div
              animate={{ y: [-20, 20, -20], scale: [1, 1.15, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[35%] right-[30%] h-56 w-56 rounded-full bg-accent-500/[0.04] blur-3xl animate-blob"
            />

            {/* Top glow */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(92,124,250,0.12),transparent)]"
            />
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300"
            >
              <Sparkles className="h-4 w-4 animate-pulse-glow" />
              Partner Program
            </motion.div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl md:leading-[1.1]">
              {"Build the future.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, rotateX: 40 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {word}
                  {i < 2 ? "\u00A0" : ""}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30, rotateX: 40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block bg-gradient-to-r from-brand-400 via-brand-300 to-accent-400 bg-clip-text text-transparent animate-shimmer"
              >
                Partner with us.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-dark-300 md:text-xl"
            >
              A youth-led movement bridging the digital &amp; AI divide across
              India and Egypt. AI literacy as access, not privilege — built by
              young people, for young people.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton
              href="#choose"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-600/25"
            >
              Find Your Path
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </MagneticButton>
            <MagneticButton
              href="https://bbb-initiative.netlify.app"
              external
              className="inline-flex items-center gap-2 rounded-xl border border-dark-700 px-6 py-3 text-sm font-semibold text-dark-200 transition-all hover:border-dark-500 hover:bg-dark-800"
            >
              Visit Our Website
            </MagneticButton>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1 text-dark-500"
            >
              <span className="text-xs">scroll</span>
              <ArrowDown className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats section with animated counters */}
      <section className="border-y border-dark-800 bg-dark-900/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center text-sm font-medium text-dark-400"
          >
            Stats &amp; Footprint
          </motion.h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: (i % 6) * 0.06, duration: 0.4 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-white md:text-3xl">
                  <Counter
                    target={s.target}
                    suffix={s.suffix}
                    prefix={s.prefix}
                    duration={1.5}
                  />
                </div>
                <div className="mt-1 text-xs text-dark-400">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <section className="overflow-hidden border-b border-dark-800 bg-dark-950 py-4">
        <div className="flex whitespace-nowrap">
          <div className="flex animate-marquee items-center gap-8">
            {tickerItems.map((item, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-sm font-medium text-dark-400">{item}</span>
                <span className="text-dark-700">◆</span>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee items-center gap-8" aria-hidden>
            {tickerItems.map((item, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-sm font-medium text-dark-400">{item}</span>
                <span className="text-dark-700">◆</span>
              </div>
            ))}
          </div>
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
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              What We Do
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-dark-300">
              ByteByByte bridges the digital divide across India and beyond.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {programs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <GlowCard className="h-full rounded-2xl border border-dark-800 bg-dark-900/50 p-6 transition-colors hover:border-dark-600">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10">
                    <item.icon className="h-6 w-6 text-brand-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-dark-400">{item.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-dark-800 px-2 py-1 text-xs text-dark-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center text-lg text-dark-400 italic"
          >
            We believe tech should create opportunities, not barriers.
          </motion.p>
        </div>
      </section>

      {/* Narratives */}
      <section className="border-y border-dark-800 bg-dark-900/30 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Why We Exist
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-dark-300">
              The narratives that drive everything we do.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {narratives.map((n, i) => (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              >
                <TiltCard maxTilt={6} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-dark-800 bg-dark-900/60 p-6 transition-colors hover:border-brand-500/30">
                    <div className="mb-4 flex items-baseline gap-2">
                      <span className="text-3xl font-bold bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
                        {n.stat}
                      </span>
                      <span className="text-xs text-dark-400">{n.statLabel}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white">
                      {n.title}
                    </h3>
                    <p className="mt-2 text-sm text-dark-400">{n.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Our Journey
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-dark-300">
              From one chapter in Pune to 8 active chapters across 2 countries in
              10 months.
            </p>
          </motion.div>

          <div className="mt-14 relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/40 via-dark-700 to-transparent md:left-1/2" />

            {timeline.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative mb-8 pl-12 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute top-2 left-0 h-3 w-3 rounded-full border-2 border-dark-950 ${
                    t.milestone ? "bg-brand-400" : "bg-dark-500"
                  } md:left-auto ${
                    i % 2 === 0
                      ? "md:right-[-1.65rem]"
                      : "md:left-[-1.65rem]"
                  }`}
                />

                <div className="rounded-xl border border-dark-800 bg-dark-900/50 p-5">
                  <div className="text-xs font-medium text-brand-400">
                    {t.date}
                  </div>
                  <h3 className="mt-1 text-base font-semibold text-white">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm text-dark-400">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose your path */}
      <section id="choose" className="border-y border-dark-800 bg-dark-900/30 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white md:text-5xl">
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
                initial={{ opacity: 0, y: 30, rotateY: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformPerspective: 1000 }}
              >
                <Link
                  href={a.href}
                  className={`group block h-full rounded-2xl border ${a.border} bg-gradient-to-br ${a.color} p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-dark-900/80 transition-transform group-hover:scale-110">
                    <a.icon className={`h-6 w-6 ${a.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-dark-300">{a.description}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-300 transition-colors group-hover:text-brand-200">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-500/10 to-brand-600/5 p-12 text-center"
        >
          {/* Animated gradient orb inside CTA */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
            />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to make a difference?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-dark-300">
              Every lesson taught, every scam prevented, every student encouraged
              &mdash; it all matters. We hope you&apos;ll be part of it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <MagneticButton
                href="mailto:bytebybyteinitiative@gmail.com?subject=Partner%20Inquiry"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-600/25"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton
                href="https://bbb-initiative.netlify.app"
                external
                className="inline-flex items-center gap-2 rounded-xl border border-dark-700 px-6 py-3 text-sm font-semibold text-dark-200 transition-all hover:border-dark-500 hover:bg-dark-800"
              >
                Visit Our Main Site
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}