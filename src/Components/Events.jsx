import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Users,
  Globe2,
  Phone,
  Mail,
  Award,
  Trophy,
  Medal,
  Link2,
} from "lucide-react";

const primary = {
  base: "#29469C",
  soft: "#29469C1A",
};

const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

const Stat = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 rounded-2xl bg-white/80 p-4 shadow-md ring-1 ring-black/5 backdrop-blur-sm">
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[--primary-soft]">
      <Icon className="h-6 w-6 text-[--primary]" />
    </span>
    <div>
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className="text-lg font-semibold text-slate-900">{value}</p>
    </div>
  </div>
);

const PrizeCard = ({ place, amount, Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5"
  >
    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[--primary-soft] blur-2xl" />
    <div className="mb-4 inline-flex items-center gap-3">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[--primary-soft]">
        <Icon className="h-6 w-6 text-[--primary]" />
      </span>
      <h4 className="text-xl font-bold tracking-tight text-slate-900">
        {place}
      </h4>
    </div>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      ₹ {amount.toLocaleString("en-IN")}
    </p>
    <p className="mt-2 text-sm text-slate-600">Certificate included</p>
  </motion.div>
);

export default function Events() {
  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 sm:py-20"
      style={{
        ["--primary"]: primary.base,
        ["--primary-soft"]: primary.soft,
      }}
    >
      {/* Ongoing badge */}
      <div className="relative mb-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="inline-block px-5 py-1.5 text-sm rounded-full bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold sm:text-lg shadow-md"
        >
          Ongoing
        </motion.div>
      </div>

      {/* Decorative background gradient circles */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200 opacity-40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-200 opacity-30 blur-3xl" />

      <Container>
        {/* Top banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600 shadow-sm">
            <Globe2 className="h-3.5 w-3.5 text-[--primary]" /> International
            Level
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            AceAI Technologies IDEATHON 2025
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-slate-600">
            Innovating the Future with AI Solutions. Showcase groundbreaking
            ideas, tackle real-world problems, and build with the power of
            Artificial Intelligence.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://forms.gle/qWZeFYEZ2FkBmm8D6"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[--primary] px-5 py-3 text-sm font-semibold text-blue-500 shadow-md transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary] focus-visible:ring-offset-2"
            >
              <Link2 className="h-4 w-4 text-blue-500" /> Register Now – ₹500 /
              team
            </a>
            <span className="rounded-2xl bg-[--primary-soft] px-4 py-2 text-sm font-semibold text-[--primary]">
              Mode: Online Submission
            </span>
          </div>
        </motion.div>

        {/* Key facts */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Stat icon={Users} label="Team Size" value="3 – 4 Members" />
          <Stat
            icon={Globe2}
            label="Eligibility"
            value="Schools • Colleges • Universities (Worldwide)"
          />
          <Stat
            icon={CalendarDays}
            label="Status"
            value="Ongoing Registration"
          />
        </div>

        {/* Dates & Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-12 grid items-start gap-6 lg:grid-cols-3"
        >
          <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5">
            <h3 className="text-lg font-bold tracking-tight text-slate-900">
              Important Dates
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[--primary]" />
                <span>
                  <span className="font-semibold">Registration Opens:</span> 21
                  Aug 2025
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[--primary]" />
                <span>
                  <span className="font-semibold">Last Date:</span> 15 Sep 2025
                </span>
              </li>
            </ul>
            <div className="mt-4 rounded-xl bg-[--primary-soft] p-4 text-md text-slate-700">
              Registration Fee:{" "}
              <span className="font-semibold text-[--primary]">₹500</span> per
              team
            </div>
          </div>

          {/* Prizes */}
          <div className="lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <PrizeCard place="1st Prize" amount={300000} Icon={Trophy} />
              <PrizeCard place="2nd Prize" amount={200000} Icon={Award} />
              <PrizeCard place="3rd Prize" amount={100000} Icon={Medal} />
            </div>
            <p className="mt-3 text-md text-slate-800">
              🎖 All participants receive an International E-Certificate of
              Participation.
            </p>
          </div>
        </motion.div>

        {/* Contact */}

        <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Contact Info */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="text-lg font-bold tracking-tight text-slate-900">
                Contact
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> director@aceai.in
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> 9962264760
                </p>
              </div>
              <a
                href="mailto:director@aceai.in"
                className="mt-5 inline-block rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Email Us
              </a>
            </div>

            <div className="lg:col-span-2">
              <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-white to-slate-50 p-6 ring-1 ring-black/5 sm:flex-row">
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-slate-900">
                    Ready to submit your idea?
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Register your team on Google Forms and follow the
                    instructions.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                    <span className="inline-flex h-2 w-2 rounded-full bg-[--primary]" />{" "}
                    Secure Google Form
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://forms.gle/qWZeFYEZ2FkBmm8D6"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[--primary] px-4 py-3 text-sm font-semibold text-blue-500 shadow-sm transition hover:opacity-95"
                  >
                    <Link2 className="h-4 w-4 text-blue-500" /> Open
                    Registration Form
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
