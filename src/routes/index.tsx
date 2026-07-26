import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  
  Dumbbell,
  Facebook,
  Flame,
  Heart,
  HeartPulse,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  Waves,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImg from "@/assets/hero.jpg";
import strengthImg from "@/assets/facility-strength.jpg";
import cardioImg from "@/assets/facility-cardio.jpg";
import functionalImg from "@/assets/facility-functional.jpg";
import personalImg from "@/assets/facility-personal.jpg";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import logoImg from "@/assets/logo.png";
import gallery2 from "@/assets/gallery-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        property: "og:image",
        content: "/og.jpg",
      },
    ],
  }),
  component: Index,
});

/* ---------- utils ---------- */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- Nav ---------- */

const NAV = [
  { label: "Facility", href: "#facility" },
  { label: "Coaches", href: "#coaches" },
  { label: "Membership", href: "#membership" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`group flex items-center gap-3 ${className}`}>
      <img
        src={logoImg}
        alt="Fitness Palace Gym"
        className="h-11 w-11 shrink-0 object-contain drop-shadow-[0_0_12px_oklch(0.9_0.22_130/0.35)] transition-transform duration-500 group-hover:rotate-3"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg tracking-wider">FITNESS PALACE</span>
        <span className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground">
          DILSHAD GARDEN · EST. 2018
        </span>
      </span>
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-hairline"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#membership"
              className="hidden rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
            >
              Free Trial
            </a>
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-hairline text-foreground md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-[60] transform bg-background transition-transform duration-500 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-hairline px-5 py-4">
          <Logo />
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-hairline"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col px-5 py-8">
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between border-b border-hairline py-5"
            >
              <span className="font-display text-3xl tracking-wide">
                <span className="mr-3 font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
                {n.label}
              </span>
              <ArrowUpRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          ))}
          <a
            href="#membership"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground"
          >
            Book a Free Trial
          </a>
        </nav>
      </div>
    </>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Athlete training with barbell under dramatic lighting"
          width={1600}
          height={1808}
          className="h-full w-full object-cover object-[70%_center] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div className="noise-overlay" />
      </div>

      {/* hairline grid */}
      <div className="hairline-grid absolute inset-0 opacity-40" />

      {/* content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:justify-center">
        <div className="max-w-3xl">
          <div className="animate-rise flex items-center gap-3">
            <span className="flex h-2 w-2">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="eyebrow">
              Delhi · Dilshad Garden · Est. 2018
            </span>
          </div>

          <h1
            className="animate-rise display-hero mt-6 text-[clamp(3.25rem,10vw,8.5rem)] text-foreground"
            style={{ animationDelay: "0.1s" }}
          >
            Train Hard.
            <br />
            <span className="text-primary">Live Strong.</span>
          </h1>

          <p
            className="animate-rise mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "0.25s" }}
          >
            A boutique strength and conditioning club built for people who
            take their training seriously — clean floors, sharp coaching,
            and a room that actually wants you to win.
          </p>

          <div
            className="animate-rise mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#membership"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5 glow-primary"
            >
              Book a Free Trial
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#facility"
              className="group inline-flex items-center gap-3 rounded-full border border-border bg-background/40 px-6 py-4 text-sm font-semibold uppercase tracking-widest text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground">
                <Play className="h-3 w-3 fill-current" />
              </span>
              Tour the floor
            </a>
          </div>

          {/* stat strip */}
          <div
            className="animate-rise mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-hairline pt-8"
            style={{ animationDelay: "0.55s" }}
          >
            <HeroStat kpi="4.9★" label="Google rating" />
            <HeroStat kpi="43+" label="Verified reviews" />
            <HeroStat kpi="6–10" label="Open daily" />
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-6 right-6 hidden flex-col items-center gap-2 lg:flex">
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground [writing-mode:vertical-rl]">
          SCROLL
        </span>
        <span className="h-16 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}

function HeroStat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl leading-none text-foreground sm:text-4xl">
        {kpi}
      </div>
      <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

/* ---------- Trust marquee ---------- */

function TrustBar() {
  const items = [
    { icon: Star, text: "4.9 ★ Google Rating" },
    { icon: Users, text: "43+ Verified Reviews" },
    { icon: Clock, text: "Open Daily 6AM – 10PM" },
    { icon: ShieldCheck, text: "Hygiene-First Facility" },
    { icon: HeartPulse, text: "Certified Coaches" },
    { icon: Trophy, text: "Since 2018" },
  ];
  const loop = [...items, ...items];
  return (
    <section className="border-y border-hairline bg-surface py-5 overflow-hidden">
      <div className="animate-marquee flex w-max items-center gap-14">
        {loop.map((it, i) => (
          <div key={i} className="flex shrink-0 items-center gap-3">
            <it.icon className="h-4 w-4 text-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {it.text}
            </span>
            <span className="h-1 w-1 rounded-full bg-hairline" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Birthday Offer ---------- */

// Replace with the gym's WhatsApp number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = "918130768055";

type ClaimStep = "form" | "reveal";

function BirthdayOffer() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<ClaimStep>("form");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");

  const resetAndOpen = () => {
    setStep("form");
    setName("");
    setPhone("");
    setErrors({});
    setDiscount(0);
    setCouponCode("");
    setOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const digits = phone.replace(/\D/g, "");
    const nextErrors: { name?: string; phone?: string } = {};
    if (trimmedName.length < 2) nextErrors.name = "Please enter your full name.";
    if (digits.length !== 10) nextErrors.phone = "Enter a valid 10-digit phone number.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const amount = Math.floor(400 + Math.random() * 100); // 400–499
    const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    const suffix = Array.from({ length: 4 }, () =>
      alphabet[Math.floor(Math.random() * alphabet.length)],
    ).join("");
    setDiscount(amount);
    setCouponCode(`PRINCE${suffix}`);
    setStep("reveal");
  };

  const whatsappHref = () => {
    const digits = phone.replace(/\D/g, "");
    const msg =
      `Hi Fitness Palace Gym! 🎉%0A%0A` +
      `I just claimed the Prince's Birthday Month.%0A` +
      `Name: ${encodeURIComponent(name.trim())}%0A` +
      `Phone: ${digits}%0A` +
      `Discount unlocked: ₹${discount}%0A` +
      `Coupon code: ${couponCode}%0A%0A` +
      `Please confirm my discount so I can redeem it at the gym.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  };

  return (
    <section className="relative overflow-hidden bg-background py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-surface to-surface-elevated p-8 sm:p-12 lg:p-16 animate-glow-pulse">
          {/* Confetti / sparkle field */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {Array.from({ length: 28 }).map((_, i) => {
              const size = 4 + Math.random() * 5;
              const isSquare = Math.random() > 0.6;
              return (
                <span
                  key={i}
                  className={`absolute animate-float ${isSquare ? "rounded-sm" : "rounded-full"}`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${size}px`,
                    height: isSquare ? `${size * 0.6}px` : `${size}px`,
                    backgroundColor:
                      Math.random() > 0.3
                        ? "oklch(0.9 0.22 130 / 0.85)"
                        : "oklch(0.82 0.16 80 / 0.75)",
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${3 + Math.random() * 3}s`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                />
              );
            })}
          </div>

          {/* Soft radial glow behind content */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
            style={{
              width: "60%",
              height: "80%",
              background:
                "radial-gradient(circle, oklch(0.9 0.22 130 / 0.25) 0%, transparent 70%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary animate-twinkle">
              <span className="text-base leading-none">🎉</span>
              Limited Time — Prince's Birthday Month
            </span>

            <h2 className="display-section mt-6 text-4xl text-foreground sm:text-5xl md:text-6xl">
              It's Prince's Birthday Month.
              <br />
              <span className="text-primary">You Get the Gift.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              All month long, we're celebrating our founder Prince the only way
              a gym should — by rewarding the people who train here. Unlock an
              exclusive surprise discount on your membership, hand-picked for
              our community and redeemable only at the floor. Claim it online,
              walk in, and train like it's your birthday too.
            </p>

            <button
              type="button"
              onClick={resetAndOpen}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5 glow-primary"
            >
              <span className="text-base leading-none">🎁</span>
              Avail Your Discount
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      <BirthdayModal
        open={open}
        onOpenChange={setOpen}
        step={step}
        name={name}
        phone={phone}
        errors={errors}
        discount={discount}
        couponCode={couponCode}
        onNameChange={setName}
        onPhoneChange={setPhone}
        onSubmit={handleSubmit}
        whatsappHref={whatsappHref}
      />
    </section>
  );
}

function BirthdayModal({
  open,
  onOpenChange,
  step,
  name,
  phone,
  errors,
  discount,
  couponCode,
  onNameChange,
  onPhoneChange,
  onSubmit,
  whatsappHref,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  step: ClaimStep;
  name: string;
  phone: string;
  errors: { name?: string; phone?: string };
  discount: number;
  couponCode: string;
  onNameChange: (v: string) => void;
  onPhoneChange: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  whatsappHref: () => string;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="birthday-modal-title"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={() => onOpenChange(false)}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-primary/30 bg-surface-elevated shadow-2xl animate-scale-in">
        {/* subtle top glow */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[120%] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, oklch(0.9 0.22 130 / 0.35) 0%, transparent 70%)",
          }}
        />

        <button
          type="button"
          onClick={() => onOpenChange(false)}
          aria-label="Close dialog"
          className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full border border-hairline bg-background/60 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative z-10 p-8 sm:p-10">
          {step === "form" ? (
            <form onSubmit={onSubmit} noValidate>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                <span className="leading-none">🎉</span> Birthday Month
              </span>
              <h3
                id="birthday-modal-title"
                className="display-section mt-4 text-2xl text-foreground sm:text-3xl"
              >
                Unlock your surprise discount
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Enter your details — we'll reveal your exclusive discount on the next step.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="birthday-name"
                    className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    id="birthday-name"
                    type="text"
                    value={name}
                    onChange={(e) => onNameChange(e.target.value)}
                    maxLength={80}
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-hairline bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                  {errors.name ? (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="birthday-phone"
                    className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
                  >
                    Phone Number
                  </label>
                  <input
                    id="birthday-phone"
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    onChange={(e) =>
                      onPhoneChange(e.target.value.replace(/\D/g, "").slice(0, 10))
                    }
                    maxLength={10}
                    required
                    autoComplete="tel"
                    placeholder="10-digit mobile number"
                    className="mt-2 w-full rounded-xl border border-hairline bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                  {errors.phone ? (
                    <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>
                  ) : null}
                </div>
              </div>

              <button
                type="submit"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5 glow-primary"
              >
                Get My Discount Code
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <p className="mt-4 text-center text-[11px] text-muted-foreground">
                We'll only use your details to confirm your birthday discount.
              </p>
            </form>
          ) : (
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary animate-twinkle">
                <Sparkles className="h-3 w-3" /> Discount Unlocked
              </span>

              <h3 className="display-section mt-4 text-2xl text-foreground sm:text-3xl">
                You've unlocked a{" "}
                <span className="text-primary">₹{discount}</span> discount!
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To receive your coupon code, send us your details on WhatsApp.
                Our team will verify and share your code instantly.
              </p>

              <div className="mt-6 rounded-2xl border border-hairline bg-background/60 p-5 text-left">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Your details
                </p>
                <div className="mt-2 space-y-1 text-sm text-foreground">
                  <p>
                    <span className="text-muted-foreground">Name:</span> {name}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Phone:</span> {phone}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Discount:</span>{" "}
                    <span className="text-primary">₹{discount}</span>
                  </p>
                </div>
              </div>

              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-black transition-transform hover:-translate-y-0.5"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.87 9.87 0 0 1-1.51-5.27c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.44 9.9-9.9 9.9Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                </svg>
                Send Details on WhatsApp
              </a>

              <p className="mt-3 text-[11px] text-muted-foreground">
                Coupon reference: <span className="font-mono">{couponCode}</span>{" "}
                — will be confirmed by our team on WhatsApp.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Birthday FAQ ---------- */

function BirthdayFAQ() {
  const faqs = [
    {
      question: "Who is eligible for the birthday discount?",
      answer:
        "Anyone can claim a coupon during Prince's birthday week — new members, existing members, and visitors booking a trial. Just show your unique code at the front desk to redeem it.",
    },
    {
      question: "What exactly is discounted?",
      answer:
        "The coupon unlocks a surprise percentage off any new membership plan or upgrade. The exact discount is revealed when you claim your code, but it applies to monthly, quarterly, and annual memberships.",
    },
    {
      question: "Can I stack it with other membership plans?",
      answer:
        "The birthday coupon is a one-time discount applied to a single membership purchase. It cannot be combined with other active offers, referral credits, or corporate discounts.",
    },
    {
      question: "How long is the coupon valid?",
      answer:
        "Each coupon is valid for 7 days from the moment you claim it. After that, the code expires and cannot be reissued, so redeem it quickly.",
    },
    {
      question: "How do I redeem it at the gym?",
      answer:
        "Copy your PRINCE code and show it on your phone at the front desk. Our team will verify it in the system and apply the discount before you complete your enrollment.",
    },
  ];

  return (
    <section className="bg-background py-10 sm:py-14">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="reveal text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Got questions?
          </span>
          <h3 className="display-section mt-5 text-3xl text-foreground sm:text-4xl">
            Birthday Offer FAQ
          </h3>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Everything you need to know before claiming your surprise coupon.
          </p>
        </div>

        <Accordion type="single" collapsible className="reveal mt-8 rounded-2xl border border-hairline bg-surface px-5 sm:px-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-hairline last:border-b-0">
              <AccordionTrigger className="py-5 text-left text-sm font-semibold text-foreground hover:no-underline sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------- Section shell ---------- */

function SectionHead({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`reveal ${align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}>
      <div className={`eyebrow flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-primary" />
        {eyebrow}
      </div>
      <h2 className="display-section mt-5 text-4xl text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ---------- About ---------- */

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Immaculate Facility",
    body:
      "Deep-cleaned equipment, sanitised floors, fresh towels. The details you notice before your first set.",
  },
  {
    icon: HeartPulse,
    title: "Real Coaching",
    body:
      "Certified trainers who watch your form, program your progressions, and answer every question you're afraid to ask.",
  },
  {
    icon: Users,
    title: "A Room That Roots For You",
    body:
      "No egos, no attitude — a genuine community of people showing up for their strongest version.",
  },
  {
    icon: Flame,
    title: "Results You Can Feel",
    body:
      "Structured plans built around your goals — fat loss, strength, mobility, sport — measured every week.",
  },
];

function About() {
  return (
    <section id="about" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          <SectionHead
            eyebrow="Why Fitness Palace"
            title={
              <>
                Boutique gym energy.
                <br />
                <span className="text-primary">Neighborhood soul.</span>
              </>
            }
            subtitle="We built Fitness Palace for people who are tired of chain-gym chaos. Serious equipment, sharp programming, and a floor that stays as clean at 9pm as it was at 6am."
          />

          <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className="reveal group bg-surface p-8 transition-colors duration-500 hover:bg-surface-elevated"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center justify-between">
                  <p.icon className="h-7 w-7 text-primary" strokeWidth={1.75} />
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl tracking-wide">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Facilities ---------- */

const FACILITIES = [
  {
    tag: "01 · Strength",
    title: "Strength Zone",
    body: "Full range of dumbbells, plate-loaded rigs, squat racks, benches — everything you need for barbell work.",
    img: strengthImg,
    icon: Dumbbell,
  },
  {
    tag: "02 · Cardio",
    title: "Cardio Deck",
    body: "Modern treadmills, ellipticals, and bikes with mirror walls and moody lighting — cardio you'll actually finish.",
    img: cardioImg,
    icon: Zap,
  },
  {
    tag: "03 · Functional",
    title: "Functional Turf",
    body: "TRX, kettlebells, battle ropes, plyo boxes. Mobility, conditioning, and athletic strength in one space.",
    img: functionalImg,
    icon: Waves,
  },
  {
    tag: "04 · 1-on-1",
    title: "Personal Training",
    body: "Private coaching with programming, nutrition guidance, and weekly check-ins. Serious results, seriously fast.",
    img: personalImg,
    icon: Sparkles,
  },
];

function Facilities() {
  return (
    <section id="facility" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHead
            eyebrow="The Facility"
            title={
              <>
                Every corner
                <br />
                built to <span className="text-primary">train.</span>
              </>
            }
          />
          <p className="reveal max-w-md text-sm leading-relaxed text-muted-foreground">
            Zoned floors so nothing collides — strength, cardio, functional,
            and coaching each get room to breathe.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {FACILITIES.map((f, i) => (
            <article
              key={f.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-hairline bg-background"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-hairline bg-background/60 px-3 py-1 font-mono text-[10px] tracking-widest text-muted-foreground backdrop-blur">
                  {f.tag}
                </span>
                <div className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3">
                  <f.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  <h3 className="font-display text-2xl tracking-wide">
                    {f.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Coaches ---------- */

const COACHES = [
  {
    name: "Prince Sharma",
    specialty: "Founder · Strength & Physique",
    bio: "Founder of Fitness Palace Gym. Competitive-level physique athlete and hands-on coach — sets the standard on the floor and personally mentors serious lifters.",
    img: trainer1,
    tag: "Owner",
    experience: "12+ Years",
    certification: "Gold's Certified Personal Trainer",
    specializations: ["Physique Coaching", "Powerlifting", "Advanced Hypertrophy", "Competition Prep"],
  },
  {
    name: "Sumit",
    specialty: "Strength & Conditioning",
    bio: "Certified personal trainer focused on strength building, fat loss, and disciplined programming. Known for calm, precise coaching that gets consistent results.",
    img: trainer2,
    tag: "Head Trainer",
    experience: "4+ Years",
    certification: "K11 Certified Exercise Professional",
    specializations: ["Personal Trainer", "Strength Training", "Fat Loss", "Nutrition Planning", "Habit Coaching"],
  },
  {
    name: "Yogender Bhatt",
    specialty: "Functional Training & Transformation",
    bio: "Certified trainer specialising in functional training, body recomposition, and beginner-to-advanced progressions. Every rep coached with intent.",
    img: trainer3,
    tag: "Personal Trainer",
    experience: "1+ Years",
    certification: "Gold's Certified Personal Trainer",
    specializations: ["Functional Training", "Body Recomposition", "Mobility", "Beginner Programs"],
  },
];


function Coaches() {
  return (
    <section id="coaches" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHead
            eyebrow="The Coaches"
            title={
              <>
                People who actually
                <br />
                <span className="text-primary">watch your form.</span>
              </>
            }
          />
          <p className="reveal max-w-md text-sm leading-relaxed text-muted-foreground">
            Certified, experienced, and on the floor — not hiding in an office.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {COACHES.map((c, i) => (
            <article
              key={c.name}
              className="reveal group relative overflow-hidden rounded-2xl border border-hairline bg-surface"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-background">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-[1400ms] ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-primary px-3 py-1 font-mono text-[10px] tracking-widest text-primary-foreground">
                  {c.tag}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-3xl tracking-wide">{c.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  {c.specialty}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {c.bio}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-hairline pt-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      Experience
                    </div>
                    <div className="mt-1 font-display text-2xl tracking-wide text-foreground">
                      {c.experience}
                    </div>
                  </div>
                  <Trophy className="h-5 w-5 text-primary" />
                </div>

                <div className="mt-5 flex items-start gap-3 rounded-xl border border-hairline bg-background/40 p-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      Certification
                    </div>
                    <div className="mt-0.5 text-[12px] font-medium leading-snug text-foreground/90">
                      {c.certification}
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Specializations
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.specializations.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-hairline bg-background/60 px-3 py-1 text-[11px] tracking-wide text-foreground/90"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- Membership ---------- */

const GENERAL_DURATIONS = [
  { label: "1 Month", price: "3,500", note: "Try it out" },
  { label: "3 Months", price: "8,500", note: "Save vs. monthly" },
  { label: "6 Months", price: "12,000", note: "Most popular", highlight: true },
  { label: "12 Months", price: "20,000", note: "Best value" },
];

const PT_PACKAGES = [
  { sessions: "12", tag: "Starter Pack" },
  { sessions: "16", tag: "Committed" },
  { sessions: "24", tag: "Transformation" },
];

const GENERAL_FEATURES = [
  "Unlimited gym floor access",
  "Full strength & cardio equipment",
  "Locker & shower facilities",
  "Onboarding walkthrough with a coach",
  "Group energy, real coaching on the floor",
];

const PT_FEATURES = [
  "1-on-1 coaching with a certified trainer",
  "Personalised programming per session",
  "Form correction, progressions, accountability",
  "Nutrition & recovery guidance",
  "Flexible scheduling with your coach",
];

function Membership() {
  return (
    <section id="membership" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          align="center"
          eyebrow="Membership"
          title={
            <>
              Pick your <span className="text-primary">plan.</span>
            </>
          }
          subtitle="Transparent pricing. Cancel anytime. Serious training either way."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* General Membership */}
          <div className="reveal relative flex flex-col overflow-hidden rounded-2xl border border-primary/60 bg-background p-8 glow-primary sm:p-10">
            <div className="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-full bg-primary px-4 py-1 font-mono text-[10px] tracking-[0.25em] text-primary-foreground">
              MOST POPULAR
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Gym Access · All Ages
            </p>
            <h3 className="mt-2 font-display text-4xl tracking-wide">
              General Membership
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Full access to the floor, equipment, and community. Choose your commitment.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {GENERAL_DURATIONS.map((d) => (
                <div
                  key={d.label}
                  className={`rounded-xl border p-4 transition-colors ${
                    d.highlight
                      ? "border-primary/60 bg-primary/10"
                      : "border-hairline bg-surface"
                  }`}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {d.label}
                  </p>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="font-mono text-xs text-muted-foreground">₹</span>
                    <span className="font-display text-3xl leading-none tracking-tight text-foreground">
                      {d.price}
                    </span>
                  </div>
                  <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-primary">
                    {d.note}
                  </p>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-3.5 border-t border-hairline pt-8">
              {GENERAL_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#visit"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Start Training
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Personal Training */}
          <div className="reveal relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-background p-8 sm:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              1-on-1 Coaching
            </p>
            <h3 className="mt-2 font-display text-4xl tracking-wide">
              Personal Training
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Private coaching with our certified trainers. Programming, form, and
              accountability — built around you.
            </p>

            <div className="mt-8 flex items-baseline gap-2">
              <span className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
                Visit the Gym
              </span>
            </div>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              For Pricing
            </p>

            <div className="mt-6 space-y-3">
              {PT_PACKAGES.map((p) => (
                <div
                  key={p.sessions}
                  className="flex items-center justify-between rounded-xl border border-hairline bg-surface px-5 py-4"
                >
                  <div>
                    <p className="font-display text-2xl leading-none tracking-wide text-foreground">
                      {p.sessions} Sessions
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {p.tag}
                    </p>
                  </div>
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                    Package
                  </span>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-3.5 border-t border-hairline pt-8">
              {PT_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#visit"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-6 py-4 text-xs font-semibold uppercase tracking-widest text-foreground transition-transform hover:-translate-y-0.5 hover:bg-secondary"
            >
              Enquire at the Gym
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */

const TESTIMONIALS = [
  {
    name: "Priya S.",
    role: "Member · 2 years",
    quote:
      "The floor is spotless and the coaches actually pay attention. Six months in and my form and confidence have completely changed.",
  },
  {
    name: "Rahul V.",
    role: "Member · 8 months",
    quote:
      "Walked in intimidated. Left feeling like I belonged. The staff make new people feel welcome without making a big deal about it.",
  },
  {
    name: "Ananya G.",
    role: "Elite Member",
    quote:
      "I've trained in bigger, flashier gyms — none felt this genuinely supportive. Programming is smart and progress is real.",
  },
  {
    name: "Karan M.",
    role: "Member · 1 year",
    quote:
      "Hygiene is next level. Equipment is fresh. And the community actually cheers each other on. Rare combination.",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const go = (dir: number) => {
    setI((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="reviews" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHead
            eyebrow="Word on the Floor"
            title={
              <>
                4.9<span className="text-primary">★</span> from
                <br /> our members.
              </>
            }
          />
          <div className="reveal flex items-center gap-3">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="grid h-12 w-12 place-items-center rounded-full border border-hairline text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="grid h-12 w-12 place-items-center rounded-full border border-hairline text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="reveal mt-14 overflow-hidden">
          <div
            ref={trackRef}
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${i * 100}%)` }}
          >
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="w-full shrink-0 px-1">
                <div className="mx-auto max-w-3xl rounded-2xl border border-hairline bg-surface p-8 sm:p-14">
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-6 font-display text-2xl leading-tight tracking-wide text-foreground sm:text-4xl">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-8 flex items-center justify-between border-t border-hairline pt-6">
                    <div>
                      <div className="font-semibold text-foreground">{t.name}</div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        {t.role}
                      </div>
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      Verified · Google
                    </div>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Show review ${k + 1}`}
              className={`h-1 rounded-full transition-all ${
                k === i ? "w-10 bg-primary" : "w-3 bg-hairline"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */

const GALLERY: { src: string; alt: string; span: string }[] = [
  { src: strengthImg, alt: "Strength zone dumbbells", span: "sm:col-span-2 sm:row-span-2" },
  { src: gallery1, alt: "Chalked grip on barbell", span: "" },
  { src: cardioImg, alt: "Cardio deck", span: "" },
  { src: functionalImg, alt: "Functional training rigs", span: "sm:col-span-2" },
  { src: gallery2, alt: "Boxing gloves detail", span: "" },
  { src: personalImg, alt: "Personal training session", span: "" },
];

function Gallery() {
  return (
    <section className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Inside the Palace"
          title={
            <>
              A room built for
              <br />
              <span className="text-primary">real work.</span>
            </>
          }
        />

        <div className="reveal mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4 sm:gap-4">
          {GALLERY.map((g, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl border border-hairline bg-background ${g.span}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Visit / Contact ---------- */

function Visit() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", goal: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic client-side validation
    if (form.name.trim().length < 2) return toast.error("Please enter your name.");
    if (!/^[\d+\-\s()]{7,20}$/.test(form.phone.trim()))
      return toast.error("Please enter a valid phone number.");
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Thanks! We'll call you to set up your free trial.");
    setForm({ name: "", phone: "", goal: "", message: "" });
  };

  return (
    <section id="visit" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          {/* Left: info */}
          <div>
            <SectionHead
              eyebrow="Come Say Hi"
              title={
                <>
                  Drop in.
                  <br />
                  <span className="text-primary">Try the floor.</span>
                </>
              }
              subtitle="Your first session is on us — no sales pitch, just a proper tour and a workout."
            />

            <div className="reveal mt-12 space-y-6">
              <ContactRow
                icon={MapPin}
                label="Location"
                value={
                  <>
                    5, First Floor, 184/4, Near Chetak Complex,
                    <br />
                    Block F, Dilshad Garden, Delhi, 110095
                  </>
                }
              />
              <ContactRow
                icon={Clock}
                label="Hours"
                value="Open Daily · 6:00 AM – 10:00 PM"
              />
              <ContactRow
                icon={Phone}
                label="Call"
                value={<a href="tel:+918130768055" className="hover:text-primary transition-colors">+91 81307 68055</a>}
              />
              <ContactRow
                icon={Mail}
                label="Email"
                value={
                  <a
                    href="mailto:fitnesspalacegym1@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    fitnesspalacegym1@gmail.com
                  </a>
                }
              />
            </div>

            <div className="reveal mt-10 overflow-hidden rounded-2xl border border-hairline">
              <iframe
                title="Fitness Palace Gym location"
                src="https://www.google.com/maps?q=Dilshad+Garden+Block+F+Delhi+110095&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg)" }}
              />
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={onSubmit}
            className="reveal relative rounded-2xl border border-hairline bg-surface p-8 sm:p-10"
          >
            <p className="eyebrow">Book a Free Trial</p>
            <h3 className="mt-3 font-display text-3xl leading-tight tracking-wide sm:text-4xl">
              Tell us a bit about you.
            </h3>

            <div className="mt-8 space-y-5">
              <Field
                label="Full name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Your name"
                maxLength={80}
                required
              />
              <Field
                label="Phone"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                placeholder="+91 98XXXXXXXX"
                maxLength={20}
                required
              />
              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Primary Goal
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Strength", "Fat loss", "Mobility", "General fitness"].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setForm({ ...form, goal: g })}
                      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${
                        form.goal === g
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-hairline bg-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Anything we should know?
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={500}
                  rows={4}
                  placeholder="Optional"
                  className="w-full rounded-lg border border-hairline bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Claim my free trial"}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <p className="mt-4 text-center text-[11px] text-muted-foreground">
              By submitting, you agree to be contacted about your trial. No spam. Ever.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: ReactNode;
}) {
  return (
    <div className="flex items-start gap-5 border-t border-hairline pt-6">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-hairline bg-surface">
        <Icon className="h-4 w-4 text-primary" />
      </span>
      <div className="min-w-0">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </div>
        <div className="mt-1.5 text-base text-foreground">{value}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  maxLength,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  maxLength?: number;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        className="w-full rounded-lg border border-hairline bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="relative border-t border-hairline bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A boutique strength & conditioning club in Dilshad Garden, Delhi.
              Serious training, spotless floors, real community.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Facebook, Youtube, Heart].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-hairline text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="Social"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-muted-foreground transition-colors hover:text-primary">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Visit</p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              5, First Floor, 184/4,<br />
              Near Chetak Complex, Block F,<br />
              Dilshad Garden, Delhi 110095
            </p>
          </div>

          <div>
            <p className="eyebrow">Hours</p>
            <p className="mt-5 text-sm text-muted-foreground">
              Monday – Sunday<br />
              <span className="text-foreground">6:00 AM – 10:00 PM</span>
            </p>
            <a
              href="#membership"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Book a Free Trial <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* huge mark */}
        <div className="mt-16 overflow-hidden border-t border-hairline pt-10">
          <div className="display-section select-none text-[clamp(3rem,15vw,14rem)] leading-none text-foreground/[0.06]">
            FITNESS&nbsp;PALACE
          </div>
        </div>

        <div className="mt-6 flex flex-col-reverse items-start justify-between gap-3 border-t border-hairline pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Fitness Palace Gym. All rights reserved.</p>
          <p className="font-mono tracking-widest">DILSHAD GARDEN · DELHI</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

function Index() {
  useReveal();
  return (
    <div className="noise relative min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <BirthdayOffer />
        <BirthdayFAQ />
        <About />
        <Facilities />
        <Coaches />
        <Membership />
        <Testimonials />
        <Gallery />
        <Visit />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
