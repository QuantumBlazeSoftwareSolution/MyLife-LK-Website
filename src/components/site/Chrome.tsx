import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-foreground">
        <img src={logo} alt="MyLife LK" className="h-8 w-8 object-contain" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">
        MyLife <span className="text-primary">LK</span>
      </span>
    </Link>
  );
}

export function GooglePlayIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="none">
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" fill="#00E676" />
      <path d="M47 38.3L275.6 267 47 495.7c-4.4-4.8-7-11.2-7-18.4V56.7c0-7.2 2.6-13.6 7-18.4z" fill="#00C1A6" />
      <path d="M325.3 299.7l60.1 60.1L104.6 521l220.7-221.3z" fill="#FF334C" />
      <path d="M485.4 243.8l-80.5-46.3-59.5 59.5 59.5 59.5 80.5-46.3c15.5-8.9 15.5-23.4 0-32.4z" fill="#FFD400" />
    </svg>
  );
}

export function AppleIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 170 170" fill="currentColor">
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.87-11.93-14.49-5.99-9.33-10.63-19.88-13.91-31.64-3.28-11.76-4.92-22.9-4.92-33.43 0-14.28 3.59-26.06 10.77-35.34 7.18-9.28 16.48-14.07 27.91-14.36 4.36 0 9.4 1.16 15.13 3.47 5.73 2.32 9.53 3.53 11.41 3.64 1.5.11 5.37-1.15 11.61-3.79 6.24-2.64 11.45-3.84 15.64-3.6 11.63.8 21.05 4.88 28.26 12.24-9.98 6.07-14.86 14.54-14.64 25.4.22 8.7 3.63 15.93 10.23 21.68 6.6 5.75 14.32 9.07 23.16 9.96-2.52 7.72-5.74 15.77-9.67 24.16zM119.22 33.36c-.11 4.02-1.39 8.24-3.83 12.66-2.44 4.42-5.77 8.01-9.98 10.77-3.78 2.45-7.79 3.86-12.02 4.23-.11-3.68 1.15-7.85 3.79-12.51 2.64-4.66 6.02-8.35 10.14-11.08 4.12-2.73 8.09-4.09 11.9-4.07z" />
    </svg>
  );
}

export function GetAppModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border bg-card p-6 shadow-2xl sm:p-8 animate-rise">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Close dialog"
        >
          ✕
        </button>

        <div className="text-center">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-foreground">
            <img src={logo} alt="MyLife LK" className="h-10 w-10 object-contain" />
          </div>
          <h3 className="font-display text-2xl font-bold tracking-tight">Get MyLife LK</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Your private, offline Personal Life OS. Choose your device below:
          </p>
        </div>

        <div className="mt-6 space-y-3">
          {/* Google Play Button */}
          <a
            href="/#download"
            onClick={onClose}
            className="flex items-center gap-3.5 rounded-[8px] border border-border p-3.5 text-left transition-all hover:border-primary hover:bg-primary/5"
          >
            <GooglePlayIcon className="h-8 w-8 shrink-0" />
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Get it on
              </div>
              <div className="text-base font-semibold leading-tight">Google Play</div>
              <span className="text-xs text-primary font-medium">Ready for Android · Free</span>
            </div>
            <span className="rounded-[6px] bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
              Live
            </span>
          </a>

          {/* App Store Button */}
          <div className="flex items-center gap-3.5 rounded-[8px] border border-border/60 p-3.5 text-left opacity-80">
            <AppleIcon className="h-8 w-8 shrink-0 text-foreground" />
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Download on the
              </div>
              <div className="text-base font-semibold leading-tight">App Store</div>
              <span className="text-xs text-muted-foreground">iOS release</span>
            </div>
            <span className="rounded-[6px] bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
              Coming Soon
            </span>
          </div>
        </div>

        <div className="mt-6 border-t pt-4 text-center text-xs text-muted-foreground">
          🔒 100% Offline · No Account Required · Sri Lanka Built
        </div>
      </div>
    </div>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b" : "border-b border-transparent"}`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="/#engine" className="transition-colors hover:text-foreground">Attention Engine</a>
            <a href="/#everything" className="transition-colors hover:text-foreground">What it tracks</a>
            <a href="/#roadmap" className="transition-colors hover:text-foreground">Roadmap</a>
          </nav>
          <button
            onClick={() => setModalOpen(true)}
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 cursor-pointer shadow-sm"
          >
            Get the app
          </button>
        </div>
      </header>
      <GetAppModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <Logo />
          <p className="text-sm text-muted-foreground">Crafted in Sri Lanka by Quantum Blaze.</p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
          <a href="mailto:contact@quantumblaze.lk" className="hover:text-foreground">contact@quantumblaze.lk</a>
          <span>© 2026 Quantum Blaze. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
