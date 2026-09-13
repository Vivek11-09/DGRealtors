import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className = "", priority = false }: BrandLogoProps) {
  return <div className={`relative h-16 w-28 ${className}`}>
    <Image alt="DG Realtors" className="object-contain mix-blend-screen" fill priority={priority} sizes="112px" src="/brand/dg-realtors-logo.png" />
  </div>;
}
