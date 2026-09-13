"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="relative z-20 border-b border-white/15 bg-navy text-white">
    <Container className="flex min-h-24 items-center justify-between gap-6">
      <Link aria-label={`${siteConfig.name} home`} className="block shrink-0" href="/"><BrandLogo className="h-20 w-32" priority /></Link>
      <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
        {siteConfig.navigation.map((item) => <Link className="text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:text-gold-light" href={item.href} key={item.label}>{item.label}</Link>)}
      </nav>
      <Button className="hidden sm:inline-flex" href={siteConfig.enquiryHref}>Enquire Now</Button>
      <button aria-expanded={open} aria-label="Toggle navigation" className="grid size-11 place-items-center border border-gold/50 text-gold sm:hidden" onClick={() => setOpen((value) => !value)} type="button"><span className="text-lg">{open ? "×" : "☰"}</span></button>
    </Container>
    {open ? <div className="absolute inset-x-0 top-full border-b border-gold/30 bg-navy-deep px-5 py-6 shadow-2xl sm:hidden"><nav aria-label="Mobile navigation" className="flex flex-col"><Link className="border-b border-white/10 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white" href="/" onClick={() => setOpen(false)}>Home</Link>{siteConfig.navigation.slice(1).map((item) => <Link className="border-b border-white/10 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white" href={item.href} key={item.label} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link className="mt-5 bg-gold px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-navy" href={siteConfig.enquiryHref} onClick={() => setOpen(false)}>Enquire Now</Link></nav></div> : null}
  </header>;
}
