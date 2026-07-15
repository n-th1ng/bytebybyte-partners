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
      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="mb-4 inline-flex items-center gap-2 mono-label text-accent-warm">
              <Users className="h-4 w-4" />
              Volunteers
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
              Build a CV That Actually
              <br />
              <span className="text-accent">Says Something</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-3">
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
            <h2 className="font-display text-3xl font-semibold text-ink">What You&apos;ll Gain</h2>
            <p className="mt-4 text-ink-3">
              Leadership, public speaking, teaching, teamwork, event management,
              technical confidence, problem-solving. Plus certificates, letters
              of recommendation, and leadership paths within local chapters for
              consistent contributors.
            </p>
          </FadeIn>

          <StaggerChildren className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {gains.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-center gap-3 rounded-xl border border-rule bg-paper-2 px-4 py-3">
                  <CheckCircle className="h-4 w-4 shrink-0 text-accent-warm" />
                  <span className="text-sm text-ink-2">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.1} className="mt-8">
            <div className="rounded-xl border border-accent-warm/20 bg-accent-warm/5 p-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-accent-warm" />
                <div>
                  <h3 className="font-semibold text-ink">No Experience Needed</h3>
                  <p className="mt-1 text-sm text-ink-3">
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
      <section className="border-y border-rule bg-paper-2 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-ink">What We Do</h2>
            <p className="mt-4 text-ink-3">
              ByteByByte bridges the digital divide across India and beyond.
            </p>
          </FadeIn>

          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-2">
            <StaggerItem>
              <div className="flex items-start gap-4 rounded-xl border border-rule bg-paper-2 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-warm/10">
                  <BookOpen className="h-5 w-5 text-accent-warm" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">Student Cohorts</h3>
                  <p className="mt-1 text-sm text-ink-4">
                    8-session digital literacy and AI programs for ages 12 to 18.
                  </p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-start gap-4 rounded-xl border border-rule bg-paper-2 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-warm/10">
                  <Shield className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">ByteShield Circles</h3>
                  <p className="mt-1 text-sm text-ink-4">
                    Cybersecurity workshops helping seniors spot scams and use
                    tech confidently.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerChildren>

          <FadeIn delay={0.1} className="mt-6">
            <p className="text-center text-ink-4">
              We believe tech should create opportunities, not barriers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What You'll Do */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-ink">What You&apos;ll Do</h2>
          </FadeIn>

          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-3">
            <StaggerItem>
              <div className="rounded-xl border border-rule bg-paper-2 p-5">
                <h3 className="font-semibold text-ink">Student Cohorts</h3>
                <p className="mt-2 text-sm text-ink-4">
                  Teach sessions, help with coding activities, troubleshoot tech
                  issues, track attendance, support the Chapter Lead.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="rounded-xl border border-rule bg-paper-2 p-5">
                <h3 className="font-semibold text-ink">ByteShield Circles</h3>
                <p className="mt-2 text-sm text-ink-4">
                  Welcome participants, demo common scams, help seniors with
                  phone settings and ByteBuddyShield, translate where needed.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="rounded-xl border border-rule bg-paper-2 p-5">
                <h3 className="font-semibold text-ink">Outreach &amp; Ops</h3>
                <p className="mt-2 text-sm text-ink-4">
                  School outreach, NGO partnerships, events, social media,
                  content, design, marketing, fundraising.
                </p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* What We Expect */}
      <section className="border-y border-rule bg-paper-2 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-ink">What We Expect</h2>
            <p className="mt-4 text-ink-3">
              Show up on time. Communicate if plans change. Be patient and
              respectful. Protect participant privacy. Follow safeguarding
              guidelines. <strong className="text-ink">Reliability matters more than experience.</strong>
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-8">
            <div className="flex items-center gap-4 rounded-xl border border-rule bg-paper-2 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-ink">Time Commitment</h3>
                <p className="mt-1 text-sm text-ink-4">
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
            <h2 className="font-display text-3xl font-semibold text-ink">FAQ</h2>
          </FadeIn>

          <StaggerChildren className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="rounded-xl border border-rule bg-paper-2 p-5">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <h3 className="font-medium text-ink">{faq.q}</h3>
                      <p className="mt-1 text-sm text-ink-4">{faq.a}</p>
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
          <div className="mx-auto max-w-4xl rounded-3xl border border-accent-warm/20 bg-gradient-to-br from-accent/10 to-accent-warm/5 p-12 text-center">
            <h2 className="font-display text-3xl font-semibold text-ink">Join Us</h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-3">
              Every lesson taught, every scam prevented, every student
              encouraged, it all matters. We hope you&apos;ll be part of it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:bytebybyteinitiative@gmail.com?subject=Volunteer%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-display text-sm font-semibold text-accent-ink transition-all hover:bg-brand-600"
                style={{ boxShadow: "0 0 24px rgba(255, 212, 59, 0.25)" }}
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://bbb-initiative.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-rule-2 px-6 py-3 text-sm font-semibold text-ink-2 transition-all hover:border-ink-4 hover:bg-paper-3"
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
