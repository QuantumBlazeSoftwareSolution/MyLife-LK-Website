import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Footer, GooglePlayIcon, Nav, useReveal } from "@/components/site/Chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MyLife LK | Personal Life OS | Bills, Expenses & Document Vault for Sri Lanka" },
      { name: "description", content: "Know what in your life needs attention right now. Bills, documents, money and life events in one calm, offline, private app built for Sri Lanka." },
      { property: "og:title", content: "MyLife LK | Personal Life OS for Sri Lanka" },
      { property: "og:description", content: "Know what in your life needs attention right now. Offline-first, no accounts, no ads, encrypted on your phone." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MyLife LK | Personal Life OS" },
      { name: "twitter:description", content: "Bills, documents, expenses and life events in one calm, offline app for Sri Lanka." },
      { name: "twitter:image", content: "/logo.png" },
    ],
  }),
  component: Index,
});

type Level = "urgent" | "soon" | "healthy";
const dot: Record<Level, string> = { urgent: "bg-urgent", soon: "bg-soon", healthy: "bg-healthy" };
const txt: Record<Level, string> = { urgent: "text-urgent", soon: "text-soon", healthy: "text-healthy" };

const items: { t: string; s: string; a: string; l: Level }[] = [
  { t: "CEB Electricity", s: "Overdue by 2 days", a: "LKR 8,420", l: "urgent" },
  { t: "Vehicle Revenue License", s: "Expires today", a: "CAB-4521", l: "urgent" },
  { t: "Vehicle Insurance", s: "Expires in 12 days", a: "LKR 46,000", l: "soon" },
  { t: "Dialog Fibre", s: "Due in 5 days", a: "LKR 4,990", l: "soon" },
  { t: "Passport", s: "Valid until 2031", a: "N 1234567", l: "healthy" },
  { t: "October budget", s: "62% used · on track", a: "LKR 74,300", l: "healthy" },
];

function Phone() {
  return (
    <div className="relative mx-auto w-[300px] rounded-[44px] border bg-card p-3 shadow-2xl animate-float">
      <div className="rounded-[34px] bg-background px-4 pb-6 pt-4">
        <div className="mb-5 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
          <span>7:39</span>
          <span className="h-5 w-20 rounded-full bg-card" />
          <span>100%</span>
        </div>
        <p className="text-xs text-muted-foreground">Good morning, Nimal</p>
        <p className="mt-1 font-display text-xl font-semibold leading-tight">3 things need you today</p>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {(["urgent", "soon", "healthy"] as Level[]).map((l, i) => (
            <div key={l} className="rounded-xl bg-card py-2">
              <div className={`font-display text-lg font-semibold ${txt[l]}`}>{[2, 2, 14][i]}</div>
              <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{["Now", "Soon", "Fine"][i]}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {items.slice(0, 4).map((it, i) => (
            <div
              key={it.t}
              className="flex items-center gap-3 rounded-xl bg-card px-3 py-2.5 animate-rise"
              style={{ animationDelay: `${0.4 + i * 0.12}s` }}
            >
              <span className={`h-2 w-2 shrink-0 rounded-full ${dot[it.l]} ${it.l === "urgent" ? "animate-pulse-dot" : ""}`} />
              <div className="min-w-0 flex-1">
                <div className="truncate text-xs font-medium">{it.t}</div>
                <div className="text-[10px] text-muted-foreground">{it.s}</div>
              </div>
              <div className="font-mono text-[10px] text-muted-foreground">{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <h1 className="animate-rise text-5xl font-semibold leading-[0.95] md:text-7xl lg:text-[88px]">
            What in your life needs attention <span className="text-primary">right now?</span>
          </h1>
          <p className="animate-rise mt-8 max-w-xl text-lg text-muted-foreground" style={{ animationDelay: ".15s" }}>
            MyLife LK brings your bills, documents, money and family dates into one calm daily view.
            Built for Sri Lanka. Stored only on your phone.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: ".3s" }}>
            <a href="#download" className="rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
              Download free
            </a>
            <span className="text-sm text-muted-foreground">No account. No ads. No cloud.</span>
          </div>
        </div>
        <Phone />
      </div>
    </section>
  );
}

const brands = ["CEB", "Water Board", "SLT Mobitel", "Dialog", "Airtel", "NIC", "Driving License", "Passport", "Revenue License", "Emission Test", "Insurance", "Credit Cards", "School Terms", "Clinic Dates"];

function Marquee() {
  return (
    <div className="overflow-hidden border-y py-6">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-2xl text-muted-foreground">
        {[...brands, ...brands].map((b, i) => (
          <span key={i} className="flex items-center gap-12">{b}<span className="h-1.5 w-1.5 rounded-full bg-primary-deep" /></span>
        ))}
      </div>
    </div>
  );
}

const levels: { l: Level; name: string; rule: string; body: string }[] = [
  { l: "urgent", name: "Red", rule: "Today or overdue", body: "The overdue CEB bill. The license that expires this afternoon. Red only appears when waiting costs you something." },
  { l: "soon", name: "Yellow", rule: "Within 7 days", body: "Insurance renewing next week, a Dialog bill due Friday. Enough notice to act calmly instead of rushing." },
  { l: "healthy", name: "Green", rule: "On track", body: "Everything else stays quiet. Green means you can stop thinking about it, and that is the point." },
];

function Engine() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % 3), 4500);
    return () => clearInterval(id);
  }, []);
  const cur = levels[active] ?? levels[0]!;
  return (
    <section id="engine" className="mx-auto max-w-7xl px-6 py-32">
      <div className="reveal grid gap-6 md:grid-cols-2 md:items-end">
        <h2 className="text-4xl font-semibold leading-none md:text-6xl">Three colours.<br />Zero guesswork.</h2>
        <p className="max-w-md text-lg text-muted-foreground md:justify-self-end">
          The Attention Engine sorts every obligation by urgency, so one glance tells you where to spend today.
        </p>
      </div>
      <div className="reveal mt-16 grid gap-4 lg:grid-cols-[1fr_1.3fr]">
        <div className="flex flex-col gap-3">
          {levels.map((lv, i) => (
            <button
              key={lv.l}
              onClick={() => setActive(i)}
              className={`group flex items-center gap-5 rounded-2xl border p-6 text-left transition-all duration-500 ${i === active ? "bg-card" : "hover:bg-card/50"}`}
            >
              <span className={`h-3 w-3 rounded-full ${dot[lv.l]} transition-transform ${i === active ? "scale-150" : ""}`} />
              <span className="font-display text-2xl font-semibold">{lv.name}</span>
              <span className="ml-auto font-mono text-xs text-muted-foreground">{lv.rule}</span>
            </button>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-3xl border bg-card p-8 md:p-12">
          <div key={active} className="animate-rise">
            <p className="max-w-lg text-xl leading-relaxed md:text-2xl">{cur.body}</p>
            <div className="mt-10 space-y-2">
              {items.filter((x) => x.l === cur.l).map((it) => (
                <div key={it.t} className="flex items-center gap-4 rounded-xl bg-background px-5 py-4">
                  <span className={`h-2.5 w-2.5 rounded-full ${dot[it.l]}`} />
                  <span className="font-medium">{it.t}</span>
                  <span className="text-sm text-muted-foreground">{it.s}</span>
                  <span className="ml-auto font-mono text-sm text-muted-foreground">{it.a}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-0.5 bg-primary" key={`bar-${active}`} style={{ animation: "progress 4.5s linear forwards", width: 0 }} />
          <style>{`@keyframes progress{to{width:100%}}`}</style>
        </div>
      </div>
    </section>
  );
}

const areas = [
  { n: "01", t: "Bills & subscriptions", d: "CEB, Water Board, SLT Mobitel, Dialog, Airtel, credit cards, gym, insurance. Presets ready, reminders automatic." },
  { n: "02", t: "Documents & expiries", d: "NIC, driving license, passport, revenue license, deeds and warranties. Know months ahead, not the morning of." },
  { n: "03", t: "Money & budgets", d: "Log spending in LKR in seconds. Monthly budgets that tell you where you stand without a spreadsheet." },
  { n: "04", t: "Life events", d: "Vehicle services, emission tests, school terms, clinic dates and family birthdays, all on one timeline." },
];

function Everything() {
  return (
    <section id="everything" className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <h2 className="reveal max-w-3xl text-4xl font-semibold leading-none md:text-6xl">
          Everything you used to keep in SMS threads, paper notes and your head.
        </h2>
        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border bg-border md:grid-cols-2">
          {areas.map((a, i) => (
            <div key={a.n} className="reveal group bg-background p-10 transition-colors duration-500 hover:bg-card md:p-14" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="font-mono text-sm text-primary">{a.n}</span>
              <h3 className="mt-8 text-3xl font-semibold transition-transform duration-500 group-hover:translate-x-1">{a.t}</h3>
              <p className="mt-4 max-w-md text-muted-foreground">{a.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Privacy() {
  const stats = [
    { k: "0", v: "servers holding your data" },
    { k: "0", v: "accounts to create" },
    { k: "0", v: "ads or tracking IDs" },
    { k: "100%", v: "encrypted on your device" },
  ];
  return (
    <section id="privacy" className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <h2 className="reveal text-4xl font-semibold leading-none md:text-6xl">
            Your life stays on your phone. Full stop.
          </h2>
          <p className="reveal self-end text-lg opacity-70">
            MyLife LK works fully offline. Nothing is uploaded, nothing is sold, and there is no sign-up form standing between you and your own information.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-background/10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.v} className="reveal bg-foreground p-8 md:p-10" style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="font-display text-6xl font-semibold md:text-7xl">{s.k}</div>
              <div className="mt-4 text-sm opacity-70">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Local() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <div className="reveal grid items-center gap-12 rounded-3xl border bg-card p-10 md:grid-cols-[1.2fr_1fr] md:p-16">
        <div>
          <h2 className="text-4xl font-semibold leading-none md:text-5xl">Made for how Sri Lanka actually runs.</h2>
          <p className="mt-6 max-w-lg text-muted-foreground">
            Rupees by default, local utility presets out of the box, and a layout designed to stay clear in English, සිංහල and தமிழ்.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center font-display">
          {["English", "සිංහල", "தமிழ்"].map((l) => (
            <div key={l} className="rounded-2xl bg-background py-8 text-xl font-medium transition-transform duration-300 hover:-translate-y-1">{l}</div>
          ))}
          <div className="col-span-3 rounded-2xl bg-background py-6 font-mono text-2xl text-primary">LKR 12,450.00</div>
        </div>
      </div>
    </section>
  );
}

const roadmapPhases = [
  {
    version: "v1.0",
    badge: "Available Now",
    status: "current",
    title: "The Daily Essentials",
    summary: "Everything you need to keep daily life in Sri Lanka running smoothly and anxiety-free.",
    features: [
      "Attention Engine: 3-colour daily priority view (Red / Yellow / Green)",
      "Instant Bill Tracking: CEB, Water Board, SLT Mobitel, Dialog & Airtel",
      "LKR Spending Log: Quick 3-second daily expense & income tracker",
      "Encrypted Vault: Safe local storage for NIC, Passport, & Driving License",
      "100% Offline & Private: No accounts, no cloud sync, zero tracking",
    ],
  },
  {
    version: "v2.0",
    badge: "Next Up",
    status: "in-progress",
    title: "Vehicle & Home Vault",
    summary: "Dedicated hubs to protect your household investments and stay ahead of costly renewals.",
    features: [
      "Vehicle Care Hub: Revenue license reminders, insurance alerts & fuel log",
      "Home & Appliances: Store warranty receipts & get expiry notifications",
      "Smart Subscriptions: Recurring monthly bill schedules & cancellation alerts",
      "Monthly Insights: Visual LKR category breakdown of where your money goes",
    ],
  },
  {
    version: "v3.0",
    badge: "Planned",
    status: "upcoming",
    title: "Family Life & Emergency Hub",
    summary: "One shared view of what matters most for the people under your roof.",
    features: [
      "Family Member Profiles: Birthdays, important milestones & school terms",
      "Offline Emergency Card: One-tap access to blood types & emergency contacts",
      "Life Reminders: Clinic dates, anniversaries & recurring annual deadlines",
    ],
  },
  {
    version: "v4.0",
    badge: "Future Horizon",
    status: "future",
    title: "Health & Student Companion",
    summary: "Comprehensive wellness records and study routines, quietly preserved offline.",
    features: [
      "Health & Clinic Tracker: Doctor appointments, prescriptions & immunization logs",
      "Student & Exam Planner: Term schedules, study tasks & exam countdowns",
    ],
  },
];

function Roadmap() {
  return (
    <section id="roadmap" className="border-t bg-card/40 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
            Built for today.<br />Ready for tomorrow.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We believe in honest, transparent progress. Here is what is live right now and what is coming next to your personal life operating system.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {roadmapPhases.map((phase, idx) => (
            <div
              key={phase.version}
              className={`reveal relative flex flex-col justify-between rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                phase.status === "current"
                  ? "border-primary/50 bg-card shadow-xl ring-1 ring-primary/20"
                  : "border-border bg-card/60"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-lg font-bold text-foreground">{phase.version}</span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      phase.status === "current"
                        ? "bg-primary/15 text-primary border border-primary/30"
                        : phase.status === "in-progress"
                        ? "bg-soon/15 text-soon border border-soon/30"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {phase.badge}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold">{phase.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{phase.summary}</p>

                <ul className="mt-6 space-y-2.5 border-t pt-6 text-xs text-muted-foreground">
                  {phase.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="leading-normal">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {phase.status === "current" && (
                <div className="mt-8 border-t pt-4">
                  <a
                    href="#download"
                    className="inline-flex w-full items-center justify-center rounded-full bg-primary py-2.5 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Get v1.0 Free
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Download() {
  return (
    <section id="download" className="border-t">
      <div className="mx-auto max-w-5xl px-6 py-32 text-center">
        <h2 className="reveal text-5xl font-semibold leading-[0.95] md:text-8xl">Wake up knowing.</h2>
        <p className="reveal mx-auto mt-8 max-w-lg text-lg text-muted-foreground">
          One calm screen each morning. Available now for Android in Sri Lanka.
        </p>
        <div className="reveal mt-12 flex justify-center">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3.5 rounded-[8px] border border-border px-6 py-3 font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5"
          >
            <GooglePlayIcon className="h-8 w-8 shrink-0 transition-transform group-hover:scale-105" />
            <div className="text-left">
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                GET IT ON
              </span>
              <span className="text-xl font-bold tracking-tight leading-tight">Google Play</span>
            </div>
          </a>
        </div>
        <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <span>✓ 100% Free Forever</span>
          <span>✓ Works Completely Offline</span>
          <span>✓ Zero Advertisements & Tracking</span>
        </div>
      </div>
    </section>
  );
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Engine />
        <Everything />
        <Privacy />
        <Local />
        <Roadmap />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
