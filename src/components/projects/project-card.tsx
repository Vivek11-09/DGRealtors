import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

const statusLabel: Record<Project["status"], string> = { upcoming: "Upcoming", ongoing: "Ongoing", completed: "Completed" };
const categoryLabel: Record<Project["category"], string> = { private: "Residential", industry: "Commercial" };

export function ProjectCard({ project }: { project: Project }) {
  return <article className="group overflow-hidden border border-white/15 bg-navy-soft transition-transform duration-300 hover:-translate-y-1">
    <Link aria-label={`View ${project.name}`} href={`/projects/${project.slug}`}>
      <div className="relative aspect-[4/3] overflow-hidden"><Image alt={project.images[0].alt} className="object-cover transition-transform duration-500 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" src={project.images[0].src} /></div>
      <div className="p-6"><div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.14em] text-gold"><span>{categoryLabel[project.category]}</span><span>{statusLabel[project.status]}</span></div><h3 className="mt-5 font-brand-display text-3xl text-white">{project.name}</h3><p className="mt-3 text-sm leading-6 text-mist">{project.shortDescription}</p><div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white"><span>{project.location}</span><span aria-hidden="true" className="text-gold">→</span></div></div>
    </Link>
  </article>;
}
