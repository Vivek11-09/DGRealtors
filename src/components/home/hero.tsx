import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Container } from "@/components/ui/container";

export function Hero() {
  return <section className="relative isolate min-h-[44rem] overflow-hidden border-b border-white/10"><Image alt="Nikhil-Vir Business Park hero image" className="-z-20 object-cover" fill priority sizes="100vw" src="/gallery/A1.jpg.jpeg" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/30" /><Container className="flex min-h-[44rem] items-end py-20 sm:py-24"><div className="max-w-3xl"><BrandLogo className="h-20 w-36" priority /><h1 className="mt-5 font-brand-display text-5xl leading-[0.9] text-white sm:text-7xl lg:text-8xl">Building More Than Spaces.<br />Creating Legacies.</h1><p className="mt-7 max-w-xl text-base leading-7 text-mist sm:text-lg">At DG Realtors, we don&apos;t just build properties. We create environments for a better tomorrow.</p><div className="mt-9 flex flex-wrap gap-4"><Button href="/projects">Explore Projects</Button><Button href="/contact#enquiry" variant="outline">Talk to Our Team</Button></div></div></Container></section>;
}
