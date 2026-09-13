import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/projects/project-detail";
import { getProjectBySlug, projects } from "@/data/projects";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const project = getProjectBySlug((await params).slug); return project ? { title: project.name, description: project.shortDescription, openGraph: { title: `${project.name} | DG Realtors`, description: project.shortDescription } } : {}; }
export default async function ProjectPage({ params }: Props) { const project = getProjectBySlug((await params).slug); if (!project) notFound(); return <main><ProjectDetail project={project} /></main>; }
