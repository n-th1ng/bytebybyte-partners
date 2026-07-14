"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import {
  Building2,
  CheckCircle,
  ArrowRight,
  Heart,
  BarChart3,
  Award,
  Users,
  Sparkles,
  Target,
} from "lucide-react";

const whyPartner = [
  {
    icon: Heart,
    title: "Make a Real Difference",
    desc: "Help provide students and senior citizens with practical digital skills they'll use for life.",
  },
  {
    icon: BarChart3,
    title: "CSR With Measurable Results",
    desc: "Receive transparent impact reports, participant statistics, and documented outcomes from every initiative.",
  },
  {
    icon: Award,
    title: "Strengthen Your Brand",
    desc: "Be recognised as a company committed to education, digital inclusion, and community development through co-branded events and social media.",
  },
  {
    icon: Users,
    title: "Employee Engagement",
    desc: "Give your employees the opportunity to volunteer, mentor, and directly contribute to meaningful projects.",
  },
];

const howToSupport = [
  "Sponsor a student cohort",
  "Fund cybersecurity workshops",
  "Donate devices or resources",
  "Encourage employee volunteering",
  "Become a long-term CSR partner",
];

export default function CSRPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden px-6 pt-24 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(245,158,11,0.12),transparent)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <FadeIn>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-4 py-1.5 text-sm text-gold-500">
              <Building2 className="h-4 w-4" />
              For CSR &amp; Corporate
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Partner with
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                ByteByByte
              </span>
            </h1>
            <p className="mt-2 text-xl font-semibold text-ink-200">
              Create Impact That Lasts.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-ink-300">
              Partnering with ByteByByte is more than supporting a cause &mdash;
              it&apos;s investing in the next generation. Through our digital
              literacy, AI education, and cybersecurity programs, we help
              students gain future-ready skills while protecting senior citizens
              from online fraud.
            </p>
            <p className="mt-3 max-w-2xl text-ink-300">
              Whether you&apos;re looking to fulfill CSR goals, engage employees,
              or make a measurable community impact, we&apos;d love to work with
              you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Partner */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="font-heading text-3xl font-semibold text-ink-100">Why Partner With Us?</h2>
          </FadeIn>

          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-2">
            {whyPartner.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-4 rounded-xl border border-navy-700 bg-navy-900/50 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-500/10">
                    <item.icon className="h-5 w-5 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink-400">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* How You Can Support */}
      <section className="border-y border-navy-700 bg-navy-900/30 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 md:grid-cols-2">
            <FadeIn>
              <div>
                <h2 className="font-heading text-2xl font-semibold text-ink-100">
                  How You Can Support
                </h2>
                <StaggerChildren className="mt-6 space-y-3">
                  {howToSupport.map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 shrink-0 text-gold-500" />
                        <span className="text-ink-200">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
                <FadeIn delay={0.2}>
                  <p className="mt-6 text-sm text-ink-400 italic">
                    Every partnership is tailored to your goals.
                  </p>
                </FadeIn>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="font-heading text-2xl font-semibold text-ink-100">
                  Why ByteByByte?
                </h2>
                <p className="mt-4 text-ink-300">
                  We&apos;re a youth-led organisation focused on one thing:
                  delivering real impact.
                </p>
                <p className="mt-3 text-ink-300">
                  From planning and volunteer training to execution and
                  reporting, we handle the entire program so your team can focus
                  on creating change &mdash; not managing logistics.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <FadeIn>
          <div className="mx-auto max-w-4xl rounded-3xl border border-gold-500/20 bg-gradient-to-br from-gold-500/10 to-gold-600/5 p-12 text-center" style={{ boxShadow: "0 0 60px rgba(255, 212, 59, 0.12)" }}>
            <h2 className="font-heading text-3xl font-semibold text-ink-100">
              Let&apos;s Build Something Meaningful
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-300">
              If you&apos;re looking for a CSR partner that values
              transparency, innovation, and measurable impact, let&apos;s start
              a conversation.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-ink-300">
              Together, we can build a more digitally confident future.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:bytebybyteinitiative@gmail.com?subject=CSR%20Partnership%20Inquiry"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 font-heading text-sm font-semibold text-ink-100 transition-all hover:bg-brand-600"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-ink-400">
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
