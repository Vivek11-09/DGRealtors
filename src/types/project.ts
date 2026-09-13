export type ProjectCategory = "private" | "industry";
export type ProjectStatus = "upcoming" | "ongoing" | "completed";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectHighlightStat = {
  value: string;
  label: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectGala = {
  id: string;
  name: string;
  carpetArea: string;
  totalArea: string;
  floorInfo?: string;
};

export type ProjectConsultant = {
  role: string;
  name: string;
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  category: ProjectCategory;
  location: string;
  status: ProjectStatus;
  shortDescription: string;
  description: string;
  overview?: string;
  highlights: string[];
  highlightStats?: ProjectHighlightStat[];
  locationPoints?: string[];
  businessUses?: string[];
  projectFeatures?: ProjectFeature[];
  parkingDetails?: string[];
  galas?: ProjectGala[];
  consultants?: ProjectConsultant[];
  images: ProjectImage[];
  floorPlans?: ProjectImage[];
  locationPlan?: ProjectImage;
  locationMapEmbed?: string;
  video?: string;
  amenities?: string[];
  brochure?: string;
  mediaLabel?: string;
};
