"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import {
  CheckCircle,
  BookOpen,
  Shield,
  Megaphone,
  Clock,
  HelpCircle,
  ArrowRight,
  Trophy,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";

const gains = [
  "Leadership",
  "Public speaking",
  "Teaching",
  "Teamwork",
  "Event management",
  "Technical confidence",
  "Problem-solving",
  "Certificates",
  "Letters of recommendation",
  "Leadership paths within local chapters",
];

const faqs = [
  {
    q: "Need coding experience?",
    a: "No, training is provided.",
  },
  {
    q: "Can I volunteer remotely?",
    a: "Design, content, research, outreach, and social media roles can be remote. Teaching is in-person.",
  },
  {
    q: "Age requirement?",
    a: "Mostly high school and university students, but open to enthusiastic learners depending on your local chapter.",
  },
  {
    q: "Will this clash with school?",
    a: "It's flexible, most volunteers give just a few hours a week.",
  },
  {
    q: "Can I lead a chapter eventually?",
    a: "Yes, many Chapter Leads started as volunteers.",
  },
];

export default function VolunteersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden px-6 pt-24 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.12),transparent)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <FadeIn>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-spark-500/20 bg-spark-500/10 px-4 py-1.5 text-sm text-spark-400">
              <Users className="h-4 w-4" />
              Volunteers
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Build a CV That Actually
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Says Something
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-300">
              Teaching a session. Leading a group. Solving problems on the spot.
              That&apos;s real experience you can put on a CV, not just a line
              item. This guide covers what volunteering with us looks like.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What You'll Gain */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="font-heading text-3xl font-semibold text-ink-100">What You&apos;ll Gain</h2>
            <p className="mt-4 text-ink-300">
              Leadership, public speaking, teaching, teamwork, event management,
              technical confidence, problem-solving. Plus certificates, letters
              of recommendation, and leadership paths within local chapters for
              consistent contributors.
            </p>
          </FadeIn>

          <StaggerChildren className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {gains.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-center gap-3 rounded-xl border border-navy-700 bg-navy-900/50 px-4 py-3">
                  <CheckCircle className="h-4 w-4 shrink-0 text-spark-500" />
                  <span className="text-sm text-ink-200">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.1} className="mt-8">
            <div className="rounded-xl border border-spark-500/20 bg-spark-500/5 p-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-spark-500" />
                <div>
                  <h3 className="font-semibold text-white">No Experience Needed</h3>
                  <p className="mt-1 text-sm text-ink-300">
                    You&apos;ll get curriculum walkthroughs, teaching guidance,
                    and support from Chapter Leads before you lead anything.
                    We&apos;re helping you become a good mentor, not expecting
                    you to already be one.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-y border-navy-700 bg-navy-900/30 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="font-heading text-3xl font-semibold text-ink-100">What We Do</h2>
            <p className="mt-4 text-ink-300">
              ByteByByte bridges the digital divide across India and beyond.
            </p>
          </FadeIn>

          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-2">
            <StaggerItem>
              <div className="flex items-start gap-4 rounded-xl border border-navy-700 bg-navy-900/50 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-spark-500/10">
                  <BookOpen className="h-5 w-5 text-spark-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Student Cohorts</h3>
                  <p className="mt-1 text-sm text-ink-400">
                    8-session digital literacy and AI programs for ages 12 to 18.
                  </p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-start gap-4 rounded-xl border border-navy-700 bg-navy-900/50 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                  <Shield className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">ByteShield Circles</h3>
                  <p className="mt-1 text-sm text-ink-400">
                    Cybersecurity workshops helping seniors spot scams and use
                    tech confidently.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerChildren>

          <FadeIn delay={0.1} className="mt-6">
            <p className="text-center text-ink-400 italic">
              We believe tech should create opportunities, not barriers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What You'll Do */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="font-heading text-3xl font-semibold text-ink-100">What You&apos;ll Do</h2>
          </FadeIn>

          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-3">
            <StaggerItem>
              <div className="rounded-xl border border-navy-700 bg-navy-900/50 p-5">
                <h3 className="font-semibold text-white">Student Cohorts</h3>
                <p className="mt-2 text-sm text-ink-400">
                  Teach sessions, help with coding activities, troubleshoot tech
                  issues, track attendance, support the Chapter Lead.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="rounded-xl border border-navy-700 bg-navy-900/50 p-5">
                <h3 className="font-semibold text-white">ByteShield Circles</h3>
                <p className="mt-2 text-sm text-ink-400">
                  Welcome participants, demo common scams, help seniors with
                  phone settings and ByteBuddyShield, translate where needed.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="rounded-xl border border-navy-700 bg-navy-900/50 p-5">
                <h3 className="font-semibold text-white">Outreach &amp; Ops</h3>
                <p className="mt-2 text-sm text-ink-400">
                  School outreach, NGO partnerships, events, social media,
                  content, design, marketing, fundraising.
                </p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* What We Expect */}
      <section className="border-y border-navy-700 bg-navy-900/30 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="font-heading text-3xl font-semibold text-ink-100">What We Expect</h2>
            <p className="mt-4 text-ink-300">
              Show up on time. Communicate if plans change. Be patient and
              respectful. Protect participant privacy. Follow safeguarding
              guidelines. <strong className="text-white">Reliability matters more than experience.</strong>
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-8">
            <div className="flex items-center gap-4 rounded-xl border border-navy-700 bg-navy-900/50 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10">
                <Clock className="h-5 w-5 text-brand-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Time Commitment</h3>
                <p className="mt-1 text-sm text-ink-400">
                  2 to 5 hours a week. No minimum number of workshops, but
                  consistency helps students and opens doors for you.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="font-heading text-3xl font-semibold text-ink-100">FAQ</h2>
          </FadeIn>

          <StaggerChildren className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="rounded-xl border border-navy-700 bg-navy-900/50 p-5">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                    <div>
                      <h3 className="font-medium text-white">{faq.q}</h3>
                      <p className="mt-1 text-sm text-ink-400">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="px-6 pb-24">
        <FadeIn>
          <div className="mx-auto max-w-4xl rounded-3xl border border-spark-500/20 bg-gradient-to-br from-blue-500/10 to-spark-400/5 p-12 text-center">
            <h2 className="font-heading text-3xl font-semibold text-ink-100">Join Us</h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-300">
              Every lesson taught, every scam prevented, every student
              encouraged, it all matters. We hope you&apos;ll be part of it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:bytebybyteinitiative@gmail.com?subject=Volunteer%20Inquiry"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 font-heading text-sm font-semibold text-ink-100 transition-all hover:bg-brand-600"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://bbb-initiative.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-navy-600 px-6 py-3 text-sm font-semibold text-ink-200 transition-all hover:border-navy-500 hover:bg-navy-800"
              >
                Visit Our Main Site
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
