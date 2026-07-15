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
  Clock,
} from "lucide-react";
import { Counter } from "@/components/counter";

const heroStats = [
  { target: 8, label: "Active Chapters" },
  { target: 2, label: "Countries" },
  { target: 47, label: "Volunteers" },
  { target: 35, label: "Sessions" },
  { target: 70, label: "Hours Delivered" },
  { target: 16, label: "Avg Age" },
];

const inlineStats = [
  { value: "7", label: "Cities in India" },
  { value: "95%", label: "Return Rate" },
  { value: "3", label: "Languages" },
  { value: "8", label: "Partners" },
];

const audiences = [
  {
    icon: Users,
    title: "Volunteers",
    desc: "Build a CV that actually says something. Lead sessions, mentor students, and gain real experience.",
    href: "/volunteers",
  },
  {
    icon: Heart,
    title: "NGOs",
    desc: "You already have the trust. We bring the volunteers, curriculum, and expertise.",
    href: "/ngos",
  },
  {
    icon: Building2,
    title: "CSR and Corporate",
    desc: "Sponsor programs, engage employees, and get measurable impact reports.",
    href: "/csr",
  },
  {
    icon: GraduationCap,
    title: "Schools",
    desc: "Future-ready skills for your students at zero cost to your institution.",
    href: "/schools",
  },
  {
    icon: MapPin,
    title: "Start a Chapter",
    desc: "Build something bigger than yourself. Lead real projects in your community.",
    href: "/start-chapter",
  },
];

const programs = [
  {
    icon: BookOpen,
    title: "Student Cohorts",
    desc: "8-session digital literacy and AI programs for ages 12 to 18.",
    tags: ["MS Office", "Canva and Adobe", "LLMs", "Prompt Engineering", "Digital Footprint", "AI Career Options", "Gen AI Images"],
  },
  {
    icon: Shield,
    title: "ByteShield Circles",
    desc: "Cybersecurity workshops helping seniors spot scams and use tech confidently.",
    tags: ["Scam Detection", "Phone Safety", "AI Voice Scams", "OTP Rules", "Helpline 1930"],
  },
  {
    icon: Code,
    title: "Future Creators",
    desc: "Beginner coding and hands-on projects where students build real things.",
    tags: ["Scratch Games", "Websites", "AI Projects", "Real Output"],
  },
];

const narratives = [
  { title: "Youth-led, by design", desc: "ByteByByte is built and run by young people, for young people. We are youth who decided to teach AI to other youth.", stat: "16", statLabel: "avg age" },
  { title: "AI literacy as access", desc: "AI literacy is something every young person deserves, regardless of school, city, or income. Not a niche skill for the already-privileged.", stat: "150M+", statLabel: "without access" },
  { title: "Two countries, one mission", desc: "Chapters across India and Egypt give us a cross-border, cross-culture story: a shared mission adapted to different contexts.", stat: "2", statLabel: "countries" },
  { title: "Grassroots to global", desc: "A small, scrappy, community-led effort growing into something bigger. Started with one chapter, now spans 7 cities and 2 countries in 10 months.", stat: "10", statLabel: "months" },
  { title: "From student to leader", desc: "Chapter leads and volunteers grow into leadership roles through BBB itself, making it a leadership pipeline as much as an education org.", stat: "8", statLabel: "chapter leads" },
  { title: "Peer-to-peer, not top-down", desc: "Learning happens through community, conversation, and shared curiosity. Not a traditional classroom model. Communities first, classes second.", stat: "95%", statLabel: "return rate" },
  { title: "Responsible and curious", desc: "Thoughtful about AI: encouraging curiosity and responsible use rather than blind hype or fear. Critical thinking and ethics as part of literacy itself.", stat: "7", statLabel: "curriculum modules" },
  { title: "Local language, local relevance", desc: "Content adapted to local context and language. Not just translation but adaptation that makes the work feel relevant rather than imported.", stat: "3", statLabel: "languages" },
];

const timeline = [
  { date: "Aug 2025", title: "ByteByByte Founded", desc: "A small group of young people decided to bridge the digital divide, starting with one chapter in Pune.", milestone: true },
  { date: "Late 2025", title: "First Chapter: Pune", desc: "Partnership with Sneh Foundation. 2 documented youth reached in December 2025. The beginning of everything.", milestone: true },
  { date: "2025 to 26", title: "Expansion Across India", desc: "Chapters launched in Jaipur, Mumbai, Hyderabad, Chandigarh, Ahmedabad, and Bangalore.", milestone: false },
  { date: "2026", title: "First Cross-Border: Egypt", desc: "ByteByByte goes international with its first chapter in Egypt. A shared mission adapted to a new context.", milestone: true },
  { date: "Today", title: "8 Chapters, 47 Volunteers", desc: "35 sessions delivered, 70 hours of content, 3 languages, 8 partners. Validated by Sneh Foundation and Venn.", milestone: false },
];

function ctaButton(href: string, children: React.ReactNode, primary?: boolean, external?: boolean) {
  const base = "inline-flex items-center gap-2 rounded-xl px-6 py-3 font-display text-sm font-semibold transition-colors";
  const styles = primary
    ? "bg-accent text-accent-ink hover:bg-brand-600"
    : "border border-rule-2 text-ink-2 hover:border-ink-4 hover:bg-paper-3";
  const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a href={href} className={`${base} ${styles}`} {...ext}>
      {children}
    </a>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero: Stat-Led macrostructure - data is the narrative */}
      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-5xl">
          {/* Left-biased intro - breaks centered hero default */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 mono-label text-accent-warm">
              <Sparkles className="h-4 w-4" />
              Partner Program
            </div>
            <h1 className="font-display text-display font-semibold text-ink tracking-tight">
              Build the future.
              <br />
              Partner with us.
            </h1>
            <p className="mt-6 max-w-measure text-lg text-ink-3">
              A youth-led movement bridging the digital and AI divide across India
              and Egypt. AI literacy as access, not privilege. Built by young people,
              for young people.
            </p>
          </motion.div>

          {/* Stats row - the hero IS the numbers */}
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-3 md:grid-cols-6">
            {heroStats.map((s, i) => (
              <div key={s.label} className="bg-paper-2 px-5 py-8">
                <div className="mb-1 font-mono text-4xl font-bold tabular-nums text-ink">
                  <Counter target={s.target} duration={1.2} />
                </div>
                <div className="mono-label text-ink-4">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Youth-led callout */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
            className="mt-6 max-w-measure border-l-2 border-accent-warm pl-5"
          >
            <p className="text-sm text-ink-2">
              <span className="font-semibold text-accent-warm">Youth-led, by design.</span>{" "}
              Our core team averages just{" "}
              <span className="font-mono font-bold text-accent-warm">16</span> years old.
              The same age as the students we teach. We are not an org that teaches AI to
              youth. We are youth who decided to teach AI to other youth.
            </p>
          </motion.div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            {ctaButton("#choose", <>Find Your Path <ArrowRight className="h-4 w-4" /></>, true)}
            {ctaButton("https://bbb-inititiative.netlify.app", "Visit Our Website", false, true)}
          </div>
        </div>
      </section>

      {/* What We Do - asymmetric, not 3-col grid */}
      <section className="border-t border-rule bg-paper-2 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <h2 className="font-display text-display-s font-semibold text-ink">
              What We Do
            </h2>
            <p className="mt-4 max-w-measure text-ink-3">
              ByteByByte bridges the digital divide across India and beyond through
              three core programs.
            </p>
          </div>

          {/* Programs as stacked rows, not identical card grid */}
          <div className="mt-12 divide-y divide-rule border-t border-rule">
            {programs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grid gap-4 py-8 md:grid-cols-12 md:items-start"
              >
                <div className="md:col-span-1">
                  <item.icon className="h-6 w-6 text-accent-warm" />
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm text-ink-3">{item.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-paper-3 px-2 py-1 font-mono text-xs text-ink-3"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist - narrative as editorial prose, not card grid */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-display-s font-semibold text-ink">
            Why We Exist
          </h2>
          <p className="mt-4 max-w-measure text-ink-3">
            The narratives that drive everything we do.
          </p>

          {/* Narratives as alternating stat + prose, not bento tilt cards */}
          <div className="mt-12 space-y-12">
            {narratives.map((n, i) => (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4 }}
                className={`flex gap-6 ${i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""}`}
              >
                <div className="shrink-0">
                  <div className="font-mono text-3xl font-bold text-accent-warm">{n.stat}</div>
                  <div className="mono-label text-ink-4">{n.statLabel}</div>
                </div>
                <div className="max-w-measure">
                  <h3 className="font-display text-base font-semibold text-ink">{n.title}</h3>
                  <p className="mt-1 text-sm text-ink-3">{n.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline stat strip */}
      <section className="border-y border-rule bg-paper-2 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {inlineStats.map((s, i) => (
              <div key={s.label}>
                <div className="font-mono text-2xl font-bold text-ink">{s.value}</div>
                <div className="mono-label text-ink-4">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - left-aligned, not alternating zig-zag */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-display-s font-semibold text-ink">
            Our Journey
          </h2>
          <p className="mt-4 max-w-measure text-ink-3">
            From one chapter in Pune to 8 active chapters across 2 countries in 10 months.
          </p>

          <div className="mt-12 relative border-l border-rule pl-8">
            {timeline.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.3 }}
                className="relative mb-10 last:mb-0"
              >
                {/* Dot */}
                <div
                  className={`absolute -left-[37px] top-1 h-2.5 w-2.5 rounded-full border-2 border-paper ${
                    t.milestone ? "bg-accent-warm" : "bg-rule-2"
                  }`}
                />
                <div className="mono-label text-accent-warm">{t.date}</div>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">{t.title}</h3>
                <p className="mt-1 text-sm text-ink-3">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Path */}
      <section id="choose" className="border-t border-rule bg-paper-2 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <h2 className="font-display text-display-s font-semibold text-ink">
              Choose Your Path
            </h2>
            <p className="mt-4 max-w-measure text-ink-3">
              There are many ways to get involved. Pick what fits you best.
            </p>
          </div>

          {/* List of links - not identical card grid */}
          <div className="mt-12 divide-y divide-rule border-t border-b border-rule">
            {audiences.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link
                  href={a.href}
                  className="group flex items-center gap-4 py-6 transition-colors hover:bg-paper-3"
                >
                  <a.icon className="h-5 w-5 shrink-0 text-accent-warm" />
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-ink">{a.title}</h3>
                    <p className="mt-0.5 text-sm text-ink-3">{a.desc}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-ink-4 transition-transform group-hover:translate-x-1 group-hover:text-accent-warm" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-display-s font-semibold text-ink">
            Ready to make a difference?
          </h2>
          <p className="mx-auto mt-4 max-w-measure text-ink-3">
            Every lesson taught, every scam prevented, every student encouraged. It all
            matters. We hope you will be part of it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {ctaButton(
              "mailto:bytebybyteinitiative@gmail.com?subject=Partner%20Inquiry",
              <>Get in Touch <ArrowRight className="h-4 w-4" /></>,
              true
            )}
            {ctaButton("https://bbb-inititiative.netlify.app", "Visit Our Main Site", false, true)}
          </div>
        </div>
      </section>
    </>
  );
}
