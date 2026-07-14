"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
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
  Clock,
  Repeat,
  Languages,
  Award,
  TrendingUp,
} from "lucide-react";
import { Counter } from "@/components/counter";
import { TiltCard } from "@/components/tilt-card";
import { GlowCard } from "@/components/glow-card";
import { MagneticButton } from "@/components/magnetic-button";

const audiences = [
  {
    icon: Users,
    title: "Volunteers",
    description: "Build a CV that actually says something. Lead sessions, mentor students, and gain real experience.",
    href: "/volunteers",
    accent: "spark",
  },
  {
    icon: Heart,
    title: "NGOs",
    description: "You already have the trust. We bring the volunteers, curriculum, and expertise.",
    href: "/ngos",
    accent: "coral",
  },
  {
    icon: Building2,
    title: "CSR & Corporate",
    description: "Create impact that lasts. Sponsor programs, engage employees, and get measurable results.",
    href: "/csr",
    accent: "brand",
  },
  {
    icon: GraduationCap,
    title: "Schools",
    description: "Future-ready skills for your students. Zero cost to your institution.",
    href: "/schools",
    accent: "spark",
  },
  {
    icon: MapPin,
    title: "Start a Chapter",
    description: "Build something bigger than yourself. Lead real projects in your community.",
    href: "/start-chapter",
    accent: "brand",
  },
];

const heroStats = [
  { target: 8, label: "Active Chapters" },
  { target: 2, label: "Countries" },
  { target: 47, label: "Volunteers" },
  { target: 35, label: "Sessions" },
  { target: 70, label: "Hours Delivered" },
  { target: 16, label: "Avg Age" },
];

const inlineStats = [
  { icon: MapPin, value: "7", label: "Cities in India" },
  { icon: Repeat, value: "95%", label: "Return Rate" },
  { icon: Languages, value: "3", label: "Languages" },
  { icon: Award, value: "8", label: "Partners" },
  { icon: TrendingUp, value: "730", label: "Followers" },
];

const programs = [
  {
    icon: BookOpen,
    title: "Student Cohorts",
    desc: "8-session digital literacy and AI programs for ages 12 to 18.",
    tags: ["MS Office", "Canva & Adobe", "LLMs", "Prompt Engineering", "Digital Footprint", "AI Career Options", "Gen AI Images"],
    accent: "brand",
  },
  {
    icon: Shield,
    title: "ByteShield Circles",
    desc: "Cybersecurity workshops helping seniors spot scams and use tech confidently.",
    tags: ["Scam Detection", "Phone Safety", "AI Voice Scams", "OTP Rules", "Helpline 1930"],
    accent: "spark",
  },
  {
    icon: Code,
    title: "Future Creators",
    desc: "Beginner coding and hands-on projects — students build real things.",
    tags: ["Scratch Games", "Websites", "AI Projects", "Real Output"],
    accent: "coral",
  },
];

const narratives = [
  { title: "Youth-led, by design", desc: "ByteByByte is built and run by young people, for young people. The story isn't 'an org that teaches AI to youth' but 'youth who decided to teach AI to other youth.'", stat: "16", statLabel: "avg age" },
  { title: "AI literacy as access, not privilege", desc: "AI literacy is something every young person deserves, regardless of school, city, or income — not a niche skill for the already-privileged.", stat: "150M+", statLabel: "without access" },
  { title: "Two countries, one mission", desc: "Chapters across India and Egypt give BBB a cross-border, cross-culture story: a shared mission adapted to different contexts.", stat: "2", statLabel: "countries" },
  { title: "Grassroots to global", desc: "A small, scrappy, community-led effort growing into something bigger. Started with one chapter, now spans 7 cities and 2 countries in 10 months.", stat: "10", statLabel: "months" },
  { title: "From student to leader", desc: "Chapter leads and volunteers grow into leadership roles through BBB itself, making it a leadership pipeline as much as an education org.", stat: "8", statLabel: "chapter leads" },
  { title: "Peer-to-peer, not top-down", desc: "Learning happens through community, conversation, and shared curiosity — not a traditional classroom model. Communities first, classes second.", stat: "95%", statLabel: "return rate" },
  { title: "Responsible and curious", desc: "Thoughtful about AI: encouraging curiosity and responsible use rather than blind hype or fear. Critical thinking and ethics as part of the literacy itself.", stat: "7", statLabel: "curriculum modules" },
  { title: "Local language, local relevance", desc: "Content and sessions adapted to local context and language. Not just translation — adaptation that makes the work feel relevant rather than imported.", stat: "3", statLabel: "languages" },
];

const timeline = [
  { date: "Aug 2025", title: "ByteByByte Founded", desc: "A small group of young people decided to bridge the digital divide, starting with one chapter in Pune.", milestone: true },
  { date: "2025", title: "First Chapter: Pune", desc: "Partnership with Sneh Foundation. 2 documented youth reached in December 2025 — the beginning of everything.", milestone: true },
  { date: "2025–26", title: "Expansion Across India", desc: "Chapters launched in Jaipur, Mumbai, Hyderabad, Chandigarh, Ahmedabad, and Bangalore.", milestone: false },
  { date: "2026", title: "First Cross-Border: Egypt", desc: "ByteByByte goes international with its first chapter in Egypt — a shared mission adapted to a new context.", milestone: true },
  { date: "Today", title: "8 Chapters, 47 Volunteers", desc: "35 sessions delivered, 70 hours of content, 3 languages, 8 partners. Validated by Sneh Foundation and Venn.", milestone: false },
];

const accentGlow: Record<string, string> = {
  brand: "hover:border-brand-500/50 hover:shadow-brand-500/10",
  spark: "hover:border-spark-500/50 hover:shadow-spark-500/10",
  coral: "hover:border-coral-500/50 hover:shadow-coral-500/10",
};

const accentIcon: Record<string, string> = {
  brand: "text-brand-400",
  spark: "text-spark-500",
  coral: "text-coral-500",
};

const accentBorder: Record<string, string> = {
  brand: "bg-brand-500",
  spark: "bg-spark-500",
  coral: "bg-coral-500",
};

const accentTag: Record<string, string> = {
  brand: "bg-brand-500/10 text-brand-300",
  spark: "bg-spark-500/10 text-spark-400",
  coral: "bg-coral-500/10 text-coral-400",
};

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
        <div className="pointer-events-none absolute inset-0">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="h-full w-full">
            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(27,23,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(27,23,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* Electric blue gradient orbs */}
            <motion.div animate={{ y: [-30, 30, -30], scale: [1, 1.1, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-[15%] h-80 w-80 rounded-full bg-brand-500/[0.06] blur-3xl animate-blob" />
            <motion.div animate={{ y: [30, -30, 30], scale: [1, 1.2, 1] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/4 right-[15%] h-96 w-96 rounded-full bg-spark-500/[0.05] blur-3xl animate-blob" />

            {/* Top glow */}
            <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(27,23,255,0.12),transparent)]" />

            {/* Animated SVG thread lines */}
            <svg className="absolute inset-0 h-full w-full opacity-20" preserveAspectRatio="none">
              <motion.path
                d="M 0,200 Q 25%,100 50%,200 T 100%,200"
                stroke="#1b17ff"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="thread-line"
              />
              <motion.path
                d="M 0,400 Q 25%,300 50%,400 T 100%,400"
                stroke="#5af78e"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, delay: 0.8 }}
                className="thread-line"
              />
              <motion.path
                d="M 0,600 Q 25%,500 50%,600 T 100%,600"
                stroke="#1b17ff"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 1.1 }}
                className="thread-line"
              />
            </svg>
          </motion.div>
        </div>

        <div ref={heroRef} className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-spark-500/30 bg-spark-500/10 px-4 py-1.5 text-sm text-spark-400">
              <Sparkles className="h-4 w-4 animate-pulse-glow" />
              Partner Program
            </motion.div>

            <h1 className="font-heading text-5xl font-semibold leading-tight tracking-tight text-ink-100 md:text-7xl md:leading-[1.1]">
              {"Build the future.".split(" ").map((word, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 30, rotateX: 40 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="inline-block">
                  {word}{i < 2 ? "\u00A0" : ""}
                </motion.span>
              ))}
              <br />
              <motion.span initial={{ opacity: 0, y: 30, rotateX: 40 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ delay: 0.55, duration: 0.6 }} className="inline-block bg-gradient-to-r from-brand-400 via-spark-500 to-brand-400 bg-clip-text text-transparent animate-shimmer">
                Partner with us.
              </motion.span>
            </h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }} className="mx-auto mt-6 max-w-2xl text-lg text-ink-300 md:text-xl">
              A youth-led movement bridging the digital &amp; AI divide across India and Egypt. AI literacy as access, not privilege — built by young people, for young people.
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.6 }} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="#choose" className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-600 hover:shadow-lg" style={{ boxShadow: "0 0 24px rgba(255, 212, 59, 0.15)" }}>
              Find Your Path
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </MagneticButton>
            <MagneticButton href="https://bbb-inititiative.netlify.app" external className="inline-flex items-center gap-2 rounded-xl border border-navy-600 px-6 py-3 text-sm font-semibold text-ink-200 transition-all hover:border-navy-500 hover:bg-navy-800">
              Visit Our Website
            </MagneticButton>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center gap-1 text-ink-500">
              <span className="text-xs font-mono">scroll</span>
              <ArrowDown className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-navy-700 bg-navy-900/50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-6">
            {heroStats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: (i % 6) * 0.08, duration: 0.4 }} className="text-center">
                <div className="mb-1 flex items-center justify-center gap-1.5">
                  <span className="text-3xl font-bold font-mono tabular-nums text-ink-100">
                    <Counter target={s.target} duration={1.5} />
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-spark-500 animate-pulse-glow" />
                </div>
                <div className="text-xs text-ink-400">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Avg age callout */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="mt-12 rounded-2xl border border-spark-500/20 bg-spark-500/5 p-6 text-center">
            <p className="text-sm text-ink-200">
              <span className="font-semibold text-spark-500">Youth-led, by design.</span> Our core team averages just{" "}
              <span className="font-mono font-bold text-spark-500">16</span> years old — the same age as the students we teach. We&apos;re not an org that teaches AI to youth. We&apos;re youth who decided to teach AI to other youth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <section className="overflow-hidden border-b border-navy-700 bg-navy-950 py-4">
        <div className="flex whitespace-nowrap">
          <div className="flex animate-marquee items-center gap-8">
            {["8 Active Chapters", "2 Countries", "7 India Cities", "47 Volunteers", "16 Avg Age", "95% Return Rate", "35 Sessions", "70 Hours", "3 Languages", "8 Partners", "730 Followers", "Youth-Led", "Impact-Driven", "Open to All"].map((item, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="font-mono text-sm font-medium text-ink-400">{item}</span>
                <span className="text-spark-500/60">◆</span>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee items-center gap-8" aria-hidden>
            {["8 Active Chapters", "2 Countries", "7 India Cities", "47 Volunteers", "16 Avg Age", "95% Return Rate", "35 Sessions", "70 Hours", "3 Languages", "8 Partners", "730 Followers", "Youth-Led", "Impact-Driven", "Open to All"].map((item, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="font-mono text-sm font-medium text-ink-400">{item}</span>
                <span className="text-spark-500/60">◆</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="font-heading text-3xl font-semibold text-ink-100 md:text-5xl">What We Do</h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-300">ByteByByte bridges the digital divide across India and beyond.</p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {programs.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.15, duration: 0.6 }}>
                <GlowCard className={`h-full overflow-hidden rounded-2xl border border-navy-700 bg-navy-900/60 p-6 transition-colors ${accentGlow[item.accent]}`}>
                  <div className={`mb-4 h-0.5 w-12 rounded ${accentBorder[item.accent]}`} />
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800">
                    <item.icon className={`h-6 w-6 ${accentIcon[item.accent]}`} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-ink-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-300">{item.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className={`rounded-md px-2 py-1 text-xs ${accentTag[item.accent]}`}>{tag}</span>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-10 text-center text-lg text-ink-400 italic">
            We believe tech should create opportunities, not barriers.
          </motion.p>
        </div>
      </section>

      {/* Narratives — bento layout */}
      <section className="border-y border-navy-700 bg-navy-900/30 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="font-heading text-3xl font-semibold text-ink-100 md:text-5xl">Why We Exist</h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-300">The narratives that drive everything we do.</p>
          </motion.div>

          <div className="mt-14 grid auto-rows-[minmax(0,1fr)] gap-5 md:grid-cols-3">
            {narratives.map((n, i) => {
              const spanClass = i === 0 || i === 3 ? "md:col-span-2" : "";
              return (
                <motion.div key={n.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: (i % 3) * 0.1, duration: 0.5 }} className={spanClass}>
                  <TiltCard maxTilt={6} className="h-full">
                    <div className="flex h-full flex-col rounded-2xl border border-navy-700 bg-navy-800/50 p-6 transition-colors hover:border-spark-500/30">
                      <div className="mb-4 flex items-baseline gap-2">
                        <span className="font-mono text-3xl font-bold text-spark-500">{n.stat}</span>
                        <span className="text-xs text-ink-400">{n.statLabel}</span>
                      </div>
                      <h3 className="font-heading text-sm font-semibold text-ink-100">{n.title}</h3>
                      <p className="mt-2 text-sm text-ink-300">{n.desc}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inline stats callout */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {inlineStats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 5) * 0.06, duration: 0.4 }} className="flex items-center gap-3 rounded-xl border border-navy-700 bg-navy-900/50 px-4 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-spark-500/10">
                  <s.icon className="h-4 w-4 text-spark-500" />
                </div>
                <div>
                  <div className="font-mono text-sm font-bold text-ink-100">{s.value}</div>
                  <div className="text-xs text-ink-400">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-navy-700 bg-navy-900/30 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="font-heading text-3xl font-semibold text-ink-100 md:text-5xl">Our Journey</h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-300">From one chapter in Pune to 8 active chapters across 2 countries in 10 months.</p>
          </motion.div>

          <div className="mt-14 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-brand-500/40 md:left-1/2" />

            {timeline.map((t, i) => (
              <motion.div key={t.title} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 }} className={`relative mb-8 pl-12 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}>
                <div className={`absolute top-2 left-0 h-3 w-3 rounded-full border-2 border-navy-950 ${t.milestone ? "bg-spark-500 animate-pulse-glow" : "bg-brand-500"} md:left-auto ${i % 2 === 0 ? "md:right-[-1.65rem]" : "md:left-[-1.65rem]"}`} />
                <div className="rounded-xl border border-navy-700 bg-navy-900/50 p-5">
                  <div className="font-mono text-xs font-medium text-spark-500">{t.date}</div>
                  <h3 className="mt-1 font-heading text-base font-semibold text-ink-100">{t.title}</h3>
                  <p className="mt-2 text-sm text-ink-300">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose your path */}
      <section id="choose" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="font-heading text-3xl font-semibold text-ink-100 md:text-5xl">Choose Your Path</h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-300">There are many ways to get involved. Pick what fits you best.</p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {audiences.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
                <Link href={a.href} className={`group block h-full rounded-2xl border border-navy-700 bg-navy-900/60 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${accentGlow[a.accent]}`}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 transition-transform group-hover:scale-110">
                    <a.icon className={`h-6 w-6 ${accentIcon[a.accent]}`} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-ink-100">{a.title}</h3>
                  <p className="mt-2 text-sm text-ink-300">{a.description}</p>
                  <div className={`mt-4 inline-flex items-center gap-1 text-sm font-medium ${accentIcon[a.accent]}`}>
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — blue box with golden glow */}
      <section className="px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-brand-500/30 bg-gradient-to-br from-brand-500/15 via-navy-900/40 to-brand-600/10 p-12 text-center" style={{ boxShadow: "0 0 60px rgba(255, 212, 59, 0.12)" }}>
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
            <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-gold-500/20 blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="font-heading text-3xl font-semibold text-ink-100 md:text-4xl">Ready to make a difference?</h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-300">Every lesson taught, every scam prevented, every student encouraged — it all matters. We hope you&apos;ll be part of it.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <MagneticButton href="mailto:bytebybyteinitiative@gmail.com?subject=Partner%20Inquiry" className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-600" style={{ boxShadow: "0 0 24px rgba(255, 212, 59, 0.3)" }}>
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="https://bbb-inititiative.netlify.app" external className="inline-flex items-center gap-2 rounded-xl border border-navy-600 px-6 py-3 text-sm font-semibold text-ink-200 transition-all hover:border-navy-500 hover:bg-navy-800">
                Visit Our Main Site
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}