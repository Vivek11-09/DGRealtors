import { homeStats } from "@/data/home";
import { Container } from "@/components/ui/container";
export function Statistics() { return <section className="border-b border-white/10 bg-navy-deep py-10"><Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{homeStats.map((stat) => <div key={stat.label}><p className="font-brand-display text-5xl text-gold-light">{stat.value}</p><p className="mt-2 text-xs font-bold uppercase tracking-[0.13em] text-mist">{stat.label}<span className="sr-only"> (design placeholder)</span></p></div>)}</Container></section>; }
