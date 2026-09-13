import type { Metadata } from "next";
import { ProjectsBrowser } from "@/components/projects/projects-browser";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BrandLogo } from "@/components/brand/brand-logo";
import { projects } from "@/data/projects";
export const metadata: Metadata = { title: "Projects", description: "Discover DG Realtors project placeholders and future developments." };
export default function ProjectsPage() { return <main className="py-16 sm:py-24"><Container><BrandLogo /><div className="mt-5"><SectionHeading title="Our Projects" description="Discover spaces that inspire, built for a better tomorrow." /></div><div className="mt-12"><ProjectsBrowser projects={projects} /></div></Container></main>; }
