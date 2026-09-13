import { BrandLogo } from "@/components/brand/brand-logo";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
return (
  <footer className="border-t border-white/10 bg-navy-deep py-6 text-sm text-mist">
    <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
      <BrandLogo className="h-14 w-24" />

      <div className="flex flex-col items-center gap-3 text-center sm:items-end sm:text-right">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>

        <span className="text-xs tracking-wide text-mist/80">
          A digital experience by{" "}
          <a
            href="https://www.riwaazo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold"
          >
            Riwaazo
          </a>
        </span>
      </div>
    </Container>
  </footer>
);
}
