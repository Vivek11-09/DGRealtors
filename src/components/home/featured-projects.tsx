import { projects } from "@/data/projects";
import { ProjectGrid } from "@/components/projects/project-grid";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
export function FeaturedProjects() { return <section className="py-20 sm:py-28"><Container><div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><SectionHeading eyebrow="Our Projects" title="Spaces Designed for Every Aspiration." description="A considered collection of residential and commercial visions." /><Button href="/projects" variant="outline">View All Projects</Button></div><div className="mt-12"><ProjectGrid projects={projects} /></div></Container></section>; }
