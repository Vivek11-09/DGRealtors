"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryCategories, galleryItems } from "@/data/gallery";

export function GalleryBrowser() {
  const [active, setActive] = useState<(typeof galleryCategories)[number]>("All");
  const [selected, setSelected] = useState<string | null>(null);
  const items = active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);
  const selectedItem = galleryItems.find((item) => item.id === selected);
  return <><div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Gallery filters">{galleryCategories.map((category) => <button className={`border px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] ${active === category ? "border-gold bg-gold text-navy" : "border-white/20 text-mist hover:text-gold-light"}`} key={category} onClick={() => setActive(category)} type="button">{category}</button>)}</div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map((item) => <button aria-label={`Open ${item.title}`} className="group relative aspect-[4/3] overflow-hidden border border-white/15 text-left" key={item.id} onClick={() => setSelected(item.id)} type="button"><Image alt={item.alt} className="object-cover transition-transform duration-500 group-hover:scale-105" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src={item.image} /><span className="absolute inset-x-0 bottom-0 bg-navy/80 p-4 text-sm font-bold text-white">{item.title}</span></button>)}</div>{selectedItem ? <div aria-modal="true" className="fixed inset-0 z-50 grid place-items-center bg-navy/90 p-5" role="dialog"><div className="relative w-full max-w-4xl border border-gold/40 bg-navy-soft p-5"><button aria-label="Close image viewer" className="absolute right-3 top-3 z-10 grid size-10 place-items-center border border-gold/50 text-gold" onClick={() => setSelected(null)} type="button">×</button><div className="relative aspect-[4/3]"><Image alt={selectedItem.alt} className="object-contain" fill sizes="90vw" src={selectedItem.image} /></div><p className="mt-4 font-brand-display text-2xl text-white">{selectedItem.title}</p></div></div> : null}</>;
}
