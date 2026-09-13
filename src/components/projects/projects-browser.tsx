"use client";

import { useMemo, useState } from "react";
import { ProjectGrid } from "@/components/projects/project-grid";
import type { Project } from "@/types/project";

type Filter = "All" | "Residential" | "Commercial" | "Upcoming" | "Completed";
const filters: Filter[] = ["All", "Residential", "Commercial", "Upcoming", "Completed"];

export function ProjectsBrowser({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("All");
  const visible = useMemo(() => projects.filter((project) => active === "All" || (active === "Residential" && project.category === "private") || (active === "Commercial" && project.category === "industry") || project.status === active.toLowerCase()), [active, projects]);
  return <><div aria-label="Project filters" className="mb-10 flex flex-wrap gap-2" role="group">{filters.map((filter) => <button className={`border px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors ${active === filter ? "border-gold bg-gold text-navy" : "border-white/20 text-mist hover:border-gold hover:text-gold-light"}`} key={filter} onClick={() => setActive(filter)} type="button">{filter}</button>)}</div>{visible.length ? <ProjectGrid projects={visible} /> : <p className="border border-white/15 p-8 text-mist">No approved projects match this filter yet.</p>}</>;
}
