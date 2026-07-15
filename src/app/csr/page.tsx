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
      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="mb-4 inline-flex items-center gap-2 mono-label text-accent-gold">
              <Building2 className="h-4 w-4" />
              For CSR and Corporate
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
              Partner with
              <br />
              <span className="text-accent-gold">ByteByByte</span>
            </h1>
            <p className="mt-2 text-xl font-semibold text-ink-2">
              Create Impact That Lasts.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-ink-3">
              Partnering with ByteByByte is more than supporting a cause. It is
              investing in the next generation. Through our digital literacy, AI
              education, and cybersecurity programs, we help students gain
              future-ready skills while protecting senior citizens from online
              fraud.
            </p>
            <p className="mt-3 max-w-2xl text-ink-3">
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
            <h2 className="font-display text-3xl font-semibold text-ink">Why Partner With Us?</h2>
          </FadeIn>

          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-2">
            {whyPartner.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-4 rounded-xl border border-rule bg-paper-2 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-gold/10">
                    <item.icon className="h-5 w-5 text-accent-gold" />
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

      {/* How You Can Support */}
      <section className="border-y border-rule bg-paper-2 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 md:grid-cols-2">
            <FadeIn>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  How You Can Support
                </h2>
                <StaggerChildren className="mt-6 space-y-3">
                  {howToSupport.map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 shrink-0 text-accent-gold" />
                        <span className="text-ink-2">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
                <FadeIn delay={0.2}>
                  <p className="mt-6 text-sm text-ink-4">
                    Every partnership is tailored to your goals.
                  </p>
                </FadeIn>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Why ByteByByte?
                </h2>
                <p className="mt-4 text-ink-3">
                  We&apos;re a youth-led organisation focused on one thing:
                  delivering real impact.
                </p>
                <p className="mt-3 text-ink-3">
                  From planning and volunteer training to execution and
                  reporting, we handle the entire program so your team can focus
                  on creating change, not managing logistics.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <FadeIn>
          <div className="mx-auto max-w-4xl rounded-3xl border border-accent-gold/20 bg-gradient-to-br from-accent-gold/10 to-accent-gold/10 p-12 text-center" style={{ boxShadow: "0 0 60px rgba(255, 212, 59, 0.10)" }}>
            <h2 className="font-display text-3xl font-semibold text-ink">
              Let&apos;s Build Something Meaningful
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-3">
              If you&apos;re looking for a CSR partner that values
              transparency, innovation, and measurable impact, let&apos;s start
              a conversation.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-ink-3">
              Together, we can build a more digitally confident future.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:bytebybyteinitiative@gmail.com?subject=CSR%20Partnership%20Inquiry"
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
