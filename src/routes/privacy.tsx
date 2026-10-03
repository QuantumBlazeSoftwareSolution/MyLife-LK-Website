import { createFileRoute } from "@tanstack/react-router";
import { Footer, Nav } from "@/components/site/Chrome";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | MyLife LK" },
      { name: "description", content: "How MyLife LK protects your data: offline-first, on-device encryption, no accounts, no ads, no tracking." },
      { property: "og:title", content: "Privacy Policy | MyLife LK" },
      { property: "og:description", content: "Your data never leaves your phone. Read the full MyLife LK privacy policy." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  { h: "1. Summary", p: ["MyLife LK is an offline-first app. All information you enter (including bills, documents, expenses, reminders, and events) is stored only on your device and encrypted there. Quantum Blaze does not operate servers that receive, store or process your personal data."] },
  { h: "2. Information we collect", p: ["We do not collect personal information. The app does not require registration, an email address, a phone number or any account.", "Data you enter stays in local, encrypted storage on your phone and is never transmitted to us or to third parties."] },
  { h: "3. Advertising and analytics", p: ["MyLife LK contains no advertising, does not access advertising identifiers, and does not use behavioural analytics or tracking SDKs. We never sell or share data."] },
  { h: "4. Device permissions", p: ["The app may request notification permission to remind you of due dates, and optional camera or file access if you choose to attach a photo of a document. These are used only on your device and can be revoked anytime in system settings."] },
  { h: "5. Backups", p: ["If you export a backup, the file is created on your device and you decide where it goes. Any backup stored through your phone's own system services is governed by that provider's policy."] },
  { h: "6. Data deletion", p: ["Because everything lives on your device, uninstalling the app or using the in-app reset permanently removes your data. We hold no copy to delete."] },
  { h: "7. Children", p: ["MyLife LK does not knowingly collect information from anyone, including children, as no data is collected at all."] },
  { h: "8. Changes to this policy", p: ["If this policy changes, the updated version will be published on this page with a new effective date."] },
  { h: "9. Contact", p: ["Questions about privacy can be sent to contact@quantumblaze.lk."] },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pb-32 pt-36">
        <h1 className="animate-rise text-5xl font-semibold leading-none md:text-7xl">Privacy Policy</h1>
        <p className="mt-6 font-mono text-sm text-muted-foreground">Effective 1 October 2026 · Quantum Blaze</p>
        <div className="mt-16 space-y-12">
          {sections.map((s) => (
            <section key={s.h} className="border-t pt-8">
              <h2 className="text-2xl font-semibold">{s.h}</h2>
              {s.p.map((t) => (
                <p key={t} className="mt-4 leading-relaxed text-muted-foreground">{t}</p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
