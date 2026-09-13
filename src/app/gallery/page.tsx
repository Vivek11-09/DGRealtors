import type { Metadata } from "next";
import { GalleryBrowser } from "@/components/gallery/gallery-browser";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BrandLogo } from "@/components/brand/brand-logo";
export const metadata: Metadata = { title: "Gallery", description: "Project images, progress updates, events and media from DG Realtors." };
export default function GalleryPage() { return <main className="py-16 sm:py-24"><Container><BrandLogo /><div className="mt-5"><SectionHeading title="Our Gallery" description="Moments, Milestones and Masterpieces." /></div><div className="mt-12"><GalleryBrowser /></div></Container></main>; }
