"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import {
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Zap,
  Lightbulb,
  Rocket,
  Wrench,
  BookOpen,
  Award,
  Trophy,
} from "lucide-react";

const whyPartner = [
  {
    icon: Zap,
    title: "Completely Free",
    desc: "Our programs are fully funded, with no cost to your institution.",
  },
  {
    icon: Lightbulb,
    title: "Practical Learning",
    desc: "Students don't just attend sessions — they create websites, Scratch games, and AI-powered projects they can proudly showcase.",
  },
  {
    icon: Rocket,
    title: "Future-Ready Skills",
    desc: "Our curriculum introduces coding, AI, digital literacy, online safety, and problem-solving in an engaging, beginner-friendly way.",
  },
  {
    icon: Wrench,
    title: "Hassle-Free Delivery",
    desc: "From curriculum and volunteers to teaching and materials, we manage the entire program. Your team simply provides the students and a venue.",
  },
];

const whatWeNeed = [
  "A classroom or computer lab",
  "A group of interested students",
  "One staff coordinator",
  "Basic device access (shared devices work too)",
];

const whatWeProvide = [
  "A structured 8-session curriculum",
  "Trained volunteers and Chapter Leads",
  "Learning materials",
  "Student certificates",
  "A final project showcase",
  "Impact reports and documentation",
];

export default function SchoolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden px-6 pt-24 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.12),transparent)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <FadeIn>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300">
              <GraduationCap className="h-4 w-4" />
              For Schools
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Partner with
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                ByteByByte
              </span>
            </h1>
            <p className="mt-2 text-xl font-semibold text-dark-200">
              Future-Ready Skills for Your Students. Zero Cost to Your
              Institution.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-dark-300">
              Today&apos;s students need more than textbooks &mdash; they need
              digital confidence, AI literacy, and practical skills they&apos;ll
              carry into higher education and future careers.
            </p>
            <p className="mt-3 max-w-2xl text-dark-300">
              ByteByByte delivers engaging, hands-on workshops that help
              students build real projects while requiring minimal effort from
              your institution.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Partner */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white">Why Partner With Us?</h2>
          </FadeIn>

          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-2">
            {whyPartner.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-4 rounded-xl border border-dark-800 bg-dark-900/50 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                    <item.icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-dark-400">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* What We Need / What We Provide */}
      <section className="border-y border-dark-800 bg-dark-900/30 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 md:grid-cols-2">
            <FadeIn>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  What We Need From You
                </h2>
                <StaggerChildren className="mt-6 space-y-3">
                  {whatWeNeed.map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
                        <span className="text-dark-200">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
                <FadeIn delay={0.2}>
                  <p className="mt-6 text-lg font-semibold text-white">
                    That&apos;s all.
                  </p>
                </FadeIn>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  What We Provide
                </h2>
                <StaggerChildren className="mt-6 space-y-3">
                  {whatWeProvide.map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 shrink-0 text-brand-400" />
                        <span className="text-dark-200">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
                <FadeIn delay={0.3}>
                  <p className="mt-6 text-sm text-dark-400">
                    Our goal is to make delivering high-quality digital education
                    as simple as possible for your institution.
                  </p>
                </FadeIn>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <FadeIn>
          <div className="mx-auto max-w-4xl rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 p-12 text-center">
            <h2 className="text-3xl font-bold text-white">
              Let&apos;s Prepare Students for Tomorrow
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-dark-300">
              By partnering with ByteByByte, you&apos;re giving students the
              opportunity to develop practical skills that classrooms often
              don&apos;t have time to teach.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-dark-300">
              Together, we can help every student become more confident,
              capable, and prepared for an increasingly digital world.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:bytebybyteinitiative@gmail.com?subject=School%20Partnership%20Inquiry"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-500"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-dark-400">
              <span>bytebybyteinitiative@gmail.com</span>
              <span>bbb-initiative.netlify.app</span>
              <span>LinkedIn: ByteByByte Initiative</span>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
