import Link from "next/link";
import { Container } from "@/components/ui/container";
export default function NotFound() { return <main className="grid min-h-[60vh] place-items-center"><Container className="text-center"><p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">404</p><h1 className="mt-4 font-brand-display text-6xl text-white">This space is not available.</h1><Link className="mt-7 inline-block text-sm font-bold uppercase tracking-[0.14em] text-gold-light underline underline-offset-8" href="/">Return home</Link></Container></main>; }
