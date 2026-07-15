"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import {
  Heart,
  CheckCircle,
  ArrowRight,
  Zap,
  FileBarChart,
  Handshake,
  Users,
  BookOpen,
  Award,
  Camera,
} from "lucide-react";

const whyPartner = [
  {
    icon: Zap,
    title: "Free, High-Quality Programs",
    desc: "Our workshops are completely free for your organisation and participants.",
  },
  {
    icon: Users,
    title: "Minimal Effort, Maximum Impact",
    desc: "We manage the curriculum, volunteers, training, delivery, and documentation. You simply help us reach the community.",
  },
  {
    icon: FileBarChart,
    title: "Measurable Outcomes",
    desc: "Receive impact reports with attendance, participant feedback, and program outcomes that can support your own reporting and fundraising efforts.",
  },
  {
    icon: Handshake,
    title: "A Trusted Partnership",
    desc: "We're committed to building long-term relationships with NGOs that share our vision of making digital education accessible to everyone.",
  },
];

const whatWeNeed = [
  "A venue to host sessions",
  "Access to students or senior citizens",
  "One point of contact to coordinate with our team",
];

const whatWeBring = [
  "Trained volunteers",
  "Structured curriculum",
  "Workshop materials",
  "Certificates for participants",
  "Photography and documentation",
  "Impact reports after every program",
];

export default function NGOsPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="mb-4 inline-flex items-center gap-2 mono-label text-accent-coral">
              <Heart className="h-4 w-4" />
              For NGOs
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
              Partner with
              <br />
              <span className="text-accent-coral">ByteByByte</span>
            </h1>
            <p className="mt-2 text-xl font-semibold text-ink-2">
              Empower Your Community. We&apos;ll Handle the Rest.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-ink-3">
              You already have the trust of your community. We bring the
              volunteers, curriculum, and expertise.
            </p>
            <p className="mt-3 max-w-2xl text-ink-3">
              By partnering with ByteByByte, you can offer completely free
              digital literacy, AI, and cybersecurity programs to the people you
              serve without adding to your team&apos;s workload.
            </p>
            <p className="mt-3 max-w-2xl text-ink-3">
              Together, we can create lasting impact where it&apos;s needed
              most.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Partner */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-ink">Why Partner with Us?</h2>
          </FadeIn>

          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-2">
            {whyPartner.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-4 rounded-xl border border-rule bg-paper-2 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-coral/10">
                    <item.icon className="h-5 w-5 text-accent-coral" />
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

      {/* What We Need / What We Bring */}
      <section className="border-y border-rule bg-paper-2 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 md:grid-cols-2">
            <FadeIn>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  What We Need from You
                </h2>
                <StaggerChildren className="mt-6 space-y-3">
                  {whatWeNeed.map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 shrink-0 text-accent-coral" />
                        <span className="text-ink-2">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
                <FadeIn delay={0.2}>
                  <p className="mt-6 font-display text-lg font-semibold text-ink">
                    That&apos;s it.
                  </p>
                </FadeIn>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  What We Bring
                </h2>
                <StaggerChildren className="mt-6 space-y-3">
                  {whatWeBring.map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
                        <span className="text-ink-2">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
                <FadeIn delay={0.3}>
                  <p className="mt-6 text-sm text-ink-4">
                    We take care of the planning and execution so your team can
                    stay focused on your community.
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
          <div className="mx-auto max-w-4xl rounded-3xl border border-accent-coral/20 bg-gradient-to-br from-accent-coral/10 to-accent-coral/5 p-12 text-center" style={{ boxShadow: "0 0 60px rgba(255, 212, 59, 0.10)" }}>
            <h2 className="font-display text-3xl font-semibold text-ink">
              Let&apos;s Create Impact Together
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-3">
              Whether you work with students, senior citizens, or underserved
              communities, we&apos;d love to explore how ByteByByte can support
              your mission.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-ink-3">
              Together, we can help more people build the confidence and skills
              they need to thrive in today&apos;s digital world.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:bytebybyteinitiative@gmail.com?subject=NGO%20Partnership%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-display text-sm font-semibold text-accent-ink transition-all hover:bg-brand-600"
                style={{ boxShadow: "0 0 24px rgba(255, 212, 59, 0.25)" }}
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
