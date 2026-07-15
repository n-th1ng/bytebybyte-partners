"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import {
  MapPin,
  CheckCircle,
  ArrowRight,
  Trophy,
  Target,
  Users,
  BookOpen,
  Star,
  Lightbulb,
  Rocket,
} from "lucide-react";

const whyBecome = [
  {
    icon: Target,
    title: "Lead Real Projects",
    desc: "Run workshops, manage volunteers, organise events, and build partnerships that create measurable impact.",
  },
  {
    icon: Star,
    title: "Develop Leadership Skills",
    desc: "Gain hands-on experience in leadership, public speaking, team management, outreach & partnerships, event planning, and problem-solving.",
  },
  {
    icon: Trophy,
    title: "Build Your Profile",
    desc: "Being a Chapter Lead demonstrates initiative, responsibility, and leadership. These are qualities valued by universities, employers, and scholarship committees.",
  },
  {
    icon: Users,
    title: "Join a National Network",
    desc: "Work alongside passionate students from across the country, collaborate with the core team, and learn from other Chapter Leads.",
  },
];

const whatYouDo = [
  "Build and lead your local team",
  "Partner with schools, NGOs, and community organisations",
  "Organise Student Cohorts and Byteshield workshops",
  "Recruit and mentor volunteers",
  "Track your chapter's impact and growth",
];

const whatWeExpect = [
  "Reliable",
  "Proactive",
  "Good communicators",
  "Willing to learn",
  "Ready to commit to growing a chapter over time",
];

const whatYouReceive = [
  "Complete training and onboarding",
  "Ready-to-use curriculum and resources",
  "Ongoing mentorship from the core team",
  "Leadership certificate",
  "Recommendation opportunities for outstanding Chapter Leads",
  "Access to a growing network of partners and student leaders",
];

export default function StartChapterPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="mb-4 inline-flex items-center gap-2 mono-label text-accent">
              <MapPin className="h-4 w-4" />
              Start a Chapter
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
              Start a ByteByByte
              <br />
              <span className="text-accent">Chapter</span>
            </h1>
            <p className="mt-2 text-xl font-semibold text-ink-2">
              Build Something Bigger Than Yourself.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-ink-3">
              Starting a ByteByByte chapter isn&apos;t just another leadership
              position. It is an opportunity to create lasting impact in your
              community.
            </p>
            <p className="mt-3 max-w-2xl text-ink-3">
              As a Chapter Lead, you&apos;ll build a team, form partnerships with
              schools and NGOs, organise workshops, and help students and senior
              citizens gain essential digital skills.
            </p>
            <p className="mt-3 max-w-2xl text-ink-3">
              If you&apos;ve ever wanted to lead something meaningful, this is
              where you start.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Become a Chapter Lead */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-ink">
              Why Become a Chapter Lead?
            </h2>
          </FadeIn>

          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-2">
            {whyBecome.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-4 rounded-xl border border-rule bg-paper-2 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink-4">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* What You'll Do */}
      <section className="border-y border-rule bg-paper-2 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-ink">What You&apos;ll Do</h2>
          </FadeIn>

          <StaggerChildren className="mt-8 space-y-3">
            {whatYouDo.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-ink-2">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.2} className="mt-6">
            <p className="text-sm text-ink-4">
              You&apos;ll have the support of the ByteByByte core team every
              step of the way.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What We Expect / What You'll Receive */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 md:grid-cols-2">
            <FadeIn>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  What We Expect
                </h2>
                <p className="mt-3 text-sm text-ink-4">
                  We&apos;re looking for people who are:
                </p>
                <StaggerChildren className="mt-4 space-y-3">
                  {whatWeExpect.map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 shrink-0 text-accent" />
                        <span className="text-ink-2">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
                <FadeIn delay={0.2}>
                  <p className="mt-4 text-sm text-ink-4">
                    No prior leadership experience is required, just the
                    willingness to take initiative.
                  </p>
                </FadeIn>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  What You&apos;ll Receive
                </h2>
                <StaggerChildren className="mt-6 space-y-3">
                  {whatYouReceive.map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
                        <span className="text-ink-2">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <FadeIn>
          <div className="mx-auto max-w-4xl rounded-3xl border border-brand-500/20 bg-gradient-to-br from-accent/10 to-accent-warm/5 p-12 text-center" style={{ boxShadow: "0 0 60px rgba(255, 212, 59, 0.10)" }}>
            <h2 className="font-display text-3xl font-semibold text-ink">Ready to Lead?</h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-3">
              Every successful chapter starts with one person willing to take
              the first step. If you&apos;re ready to create real impact,
              we&apos;d love to help you build the next ByteByByte chapter.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:bytebybyteinitiative@gmail.com?subject=Start%20a%20Chapter%20Inquiry"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-display text-sm font-semibold text-ink transition-all hover:bg-brand-600"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-ink-4">
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
