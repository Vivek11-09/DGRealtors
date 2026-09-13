import { homeValues } from "@/data/home";
import { Container } from "@/components/ui/container";

export function TrustIndicators() { return <section className="py-16 sm:py-20"><Container><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-gold">What guides every relationship</p><div className="mt-8 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">{homeValues.map((value) => <p className="bg-navy px-5 py-6 text-center text-sm font-bold uppercase tracking-[0.11em] text-white" key={value}>{value}</p>)}</div></Container></section>; }
