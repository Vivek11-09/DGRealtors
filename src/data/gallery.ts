export type GalleryCategory = "Project Images" | "Construction Updates" | "Events" | "Videos";
export type GalleryItem = { id: string; category: GalleryCategory; title: string; image: string; alt: string };

export const galleryCategories = ["All", "Project Images", "Construction Updates", "Events", "Videos"] as const;

export const galleryItems: GalleryItem[] = [
  { id: "nikhil-vir-business-park-overview", category: "Project Images", title: "Nikhil-Vir Business Park", image: "/gallery/A1.jpg.jpeg", alt: "Nikhil-Vir Business Park overview" },
  { id: "nikhil-vir-business-park-view-1", category: "Project Images", title: "Nikhil-Vir Business Park View 1", image: "/gallery/IMG_2587.JPG.jpeg", alt: "Nikhil-Vir Business Park view 1" },
  { id: "nikhil-vir-business-park-view-2", category: "Project Images", title: "Nikhil-Vir Business Park View 2", image: "/gallery/IMG_2588.JPG.jpeg", alt: "Nikhil-Vir Business Park view 2" },
  { id: "nikhil-vir-business-park-view-3", category: "Project Images", title: "Nikhil-Vir Business Park View 3", image: "/gallery/IMG_2589.JPG.jpeg", alt: "Nikhil-Vir Business Park view 3" },
  { id: "nikhil-vir-business-park-view-4", category: "Project Images", title: "Nikhil-Vir Business Park View 4", image: "/gallery/IMG_2590.JPG.jpeg", alt: "Nikhil-Vir Business Park view 4" },
  { id: "nikhil-vir-gala-01", category: "Project Images", title: "Gala 01 Floor Plan", image: "/gallery/Gala-01.png", alt: "Gala 01 floor plan" },
  { id: "nikhil-vir-gala-02", category: "Project Images", title: "Gala 02 Floor Plan", image: "/gallery/Gala-02.png", alt: "Gala 02 floor plan" },
  { id: "nikhil-vir-gala-03", category: "Project Images", title: "Gala 03 Floor Plan", image: "/gallery/Gala-03.png", alt: "Gala 03 floor plan" },
  { id: "nikhil-vir-gala-04", category: "Project Images", title: "Gala 04 Floor Plan", image: "/gallery/Gala-04.png", alt: "Gala 04 floor plan" },
  { id: "nikhil-vir-gala-05", category: "Project Images", title: "Gala 05 Floor Plan", image: "/gallery/Gala-05.png", alt: "Gala 05 floor plan" },
  { id: "nikhil-vir-gala-06", category: "Project Images", title: "Gala 06 Floor Plan", image: "/gallery/Gala-06.png", alt: "Gala 06 floor plan" },
];
