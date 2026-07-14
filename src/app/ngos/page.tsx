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
      <section className="relative flex min-h-[70vh] items-center overflow-hidden px-6 pt-24 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(244,63,94,0.12),transparent)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <FadeIn>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-4 py-1.5 text-sm text-rose-300">
              <Heart className="h-4 w-4" />
              For NGOs
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Partner with
              <br />
              <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                ByteByByte
              </span>
            </h1>
            <p className="mt-2 text-xl font-semibold text-dark-200">
              Empower Your Community. We&apos;ll Handle the Rest.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-dark-300">
              You already have the trust of your community. We bring the
              volunteers, curriculum, and expertise.
            </p>
            <p className="mt-3 max-w-2xl text-dark-300">
              By partnering with ByteByByte, you can offer completely free
              digital literacy, AI, and cybersecurity programs to the people you
              serve without adding to your team&apos;s workload.
            </p>
            <p className="mt-3 max-w-2xl text-dark-300 italic">
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
            <h2 className="text-3xl font-bold text-white">Why Partner with Us?</h2>
          </FadeIn>

          <StaggerChildren className="mt-8 grid gap-4 md:grid-cols-2">
            {whyPartner.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex items-start gap-4 rounded-xl border border-dark-800 bg-dark-900/50 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-500/10">
                    <item.icon className="h-5 w-5 text-rose-400" />
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

      {/* What We Need / What We Bring */}
      <section className="border-y border-dark-800 bg-dark-900/30 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 md:grid-cols-2">
            <FadeIn>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  What We Need from You
                </h2>
                <StaggerChildren className="mt-6 space-y-3">
                  {whatWeNeed.map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 shrink-0 text-rose-400" />
                        <span className="text-dark-200">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
                <FadeIn delay={0.2}>
                  <p className="mt-6 text-lg font-semibold text-white">
                    That&apos;s it.
                  </p>
                </FadeIn>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  What We Bring
                </h2>
                <StaggerChildren className="mt-6 space-y-3">
                  {whatWeBring.map((item) => (
                    <StaggerItem key={item}>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
                        <span className="text-dark-200">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
                <FadeIn delay={0.3}>
                  <p className="mt-6 text-sm text-dark-400">
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
          <div className="mx-auto max-w-4xl rounded-3xl border border-rose-500/20 bg-gradient-to-br from-rose-500/10 to-pink-500/5 p-12 text-center">
            <h2 className="text-3xl font-bold text-white">
              Let&apos;s Create Impact Together
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-dark-300">
              Whether you work with students, senior citizens, or underserved
              communities, we&apos;d love to explore how ByteByByte can support
              your mission.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-dark-300">
              Together, we can help more people build the confidence and skills
              they need to thrive in today&apos;s digital world.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:bytebybyteinitiative@gmail.com?subject=NGO%20Partnership%20Inquiry"
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
