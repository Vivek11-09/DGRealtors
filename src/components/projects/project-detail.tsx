import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { Project } from "@/types/project";

const labels = { private: "Residential", industry: "Commercial", upcoming: "Upcoming", ongoing: "Ongoing", completed: "Completed" } as const;

export function ProjectDetail({ project }: Readonly<{ project: Project }>) {
  return (
    <>
      <section className="border-b border-white/10 py-16 sm:py-24">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
            {labels[project.category]} · {labels[project.status]}
          </p>
          <h1 className="mt-4 font-brand-display text-6xl leading-none text-white sm:text-8xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-mist">{project.location}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={`/contact?project=${encodeURIComponent(project.name)}#enquiry`}>Enquire Now</Button>
            {project.brochure ? (
              <a
                className="inline-flex min-h-11 items-center justify-center border border-gold/70 px-5 font-sans text-xs font-bold uppercase tracking-[0.14em] text-gold-light transition-colors duration-200 hover:border-gold-light hover:bg-gold-light/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                href={project.brochure}
                rel="noreferrer"
                target="_blank"
              >
                View Brochure
              </a>
            ) : null}
            <Button href="#project-details" variant="outline">
              Explore Project Details
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-8" id="project-details">
        <Container>
          <div className="relative aspect-[16/8] overflow-hidden border border-white/15">
            <Image
              alt={project.images[0].alt}
              className="object-cover"
              fill
              priority
              sizes="100vw"
              src={project.images[0].src}
            />
            {project.mediaLabel ? (
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-navy/75 p-5 text-sm text-gold-light">
                <span>{project.mediaLabel}</span>
                <span aria-hidden="true">▶</span>
              </div>
            ) : null}
          </div>

          {project.images.length > 1 ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {project.images.slice(1).map((image, index) => (
                <div
                  className="relative aspect-[4/3] overflow-hidden border border-white/15"
                  key={`${image.src}-${index}`}
                >
                  <Image
                    alt={image.alt}
                    className="object-cover"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    src={image.src}
                  />
                </div>
              ))}
            </div>
          ) : null}
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Overview</p>
            <h2 className="mt-4 font-brand-display text-5xl text-white">A perfect blend of business, connectivity & growth.</h2>
            <p className="mt-6 max-w-2xl leading-8 text-mist">
              {project.overview ?? project.description}
            </p>
            <p className="mt-6 max-w-2xl leading-8 text-mist">{project.description}</p>
          </div>

          <div className="border-l border-gold/40 pl-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Key highlights</p>
            <ul className="mt-5 space-y-4">
              {project.highlights.map((highlight) => (
                <li className="text-lg text-white" key={highlight}>
                  — {highlight}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {project.highlightStats?.length ? (
        <section className="border-y border-white/10 bg-navy-soft py-16 sm:py-24">
          <Container>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {project.highlightStats.map((stat) => (
                <div className="border border-white/15 bg-navy p-6" key={`${stat.value}-${stat.label}`}>
                  <p className="font-brand-display text-5xl text-gold-light">{stat.value}</p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-mist">{stat.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Location & connectivity</p>
            <h2 className="mt-4 font-brand-display text-5xl text-white">A location that connects you to more.</h2>
            <p className="mt-6 text-mist">{project.location}</p>
            <ul className="mt-6 space-y-3 text-mist">
              {project.locationPoints?.map((point) => (
                <li className="flex gap-3" key={point}>
                  <span className="mt-1 text-gold">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.locationPlan ? (
            <div className="relative aspect-[4/3] overflow-hidden border border-white/15">
              <Image
                alt={project.locationPlan.alt}
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={project.locationPlan.src}
              />
            </div>
          ) : null}
        </Container>

        {project.locationMapEmbed ? (
          <Container className="mt-10">
            <div
              className="overflow-hidden border border-white/15 bg-navy-soft"
              dangerouslySetInnerHTML={{ __html: project.locationMapEmbed }}
            />
          </Container>
        ) : null}
      </section>

      {project.businessUses?.length ? (
        <section className="border-y border-white/10 bg-navy-soft py-16 sm:py-24">
          <Container>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Built for business</p>
            <h2 className="mt-4 font-brand-display text-5xl text-white">Purpose-built for practical growth.</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {project.businessUses.map((useCase) => (
                <div className="border border-white/15 bg-navy p-5" key={useCase}>
                  <p className="font-brand-display text-2xl text-white">{useCase}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {project.projectFeatures?.length ? (
        <section className="py-16 sm:py-24">
          <Container>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Project features</p>
            <h2 className="mt-4 font-brand-display text-5xl text-white">Designed around your business.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {project.projectFeatures.map((feature) => (
                <article className="border border-white/15 bg-navy-soft p-6" key={feature.title}>
                  <h3 className="font-brand-display text-3xl text-white">{feature.title}</h3>
                  <p className="mt-4 leading-7 text-mist">{feature.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {project.parkingDetails?.length ? (
        <section className="border-y border-white/10 bg-navy-deep py-16 sm:py-24">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Parking</p>
                <h2 className="mt-4 font-brand-display text-5xl text-white">Convenient, durable and business-ready.</h2>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {project.parkingDetails.map((detail) => (
                  <li className="border border-white/15 bg-navy-soft p-4 text-mist" key={detail}>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ) : null}

      {project.floorPlans?.length ? (
        <section className="border-y border-white/10 bg-navy-soft py-16 sm:py-24">
          <Container>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Floor plans</p>
            <h2 className="mt-4 font-brand-display text-5xl text-white">Available layouts.</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {project.floorPlans.map((plan, index) => (
                <div className="border border-white/15 bg-navy p-4" key={`${plan.src}-${index}`}>
                  <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
                    <Image
                      alt={plan.alt}
                      className="object-contain"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      src={plan.src}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {project.galas?.length ? (
        <section className="py-16 sm:py-24">
          <Container>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Available spaces</p>
            <h2 className="mt-4 font-brand-display text-5xl text-white">Gala configuration.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {project.galas.map((gala) => (
                <article className="border border-white/15 bg-navy-soft p-6" key={gala.id}>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">{gala.name}</p>
                  <div className="mt-5 space-y-3 text-mist">
                    <p>
                      <span className="font-bold text-white">Carpet Area:</span> {gala.carpetArea}
                    </p>
                    <p>
                      <span className="font-bold text-white">Total Area:</span> {gala.totalArea}
                    </p>
                    {gala.floorInfo ? <p>{gala.floorInfo}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {project.consultants?.length ? (
        <section className="border-y border-white/10 bg-navy-soft py-16 sm:py-24">
          <Container>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Project team</p>
            <h2 className="mt-4 font-brand-display text-5xl text-white">Consultants.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {project.consultants.map((consultant) => (
                <div className="border border-white/15 bg-navy p-6" key={`${consultant.role}-${consultant.name}`}>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">{consultant.role}</p>
                  <p className="mt-4 font-brand-display text-3xl text-white">{consultant.name}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-6 border border-gold/35 bg-navy-soft p-8 sm:flex-row sm:items-center sm:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Speak with our team</p>
              <h2 className="mt-3 font-brand-display text-4xl text-white">Discover {project.name}.</h2>
            </div>
            <Button href={`/contact?project=${encodeURIComponent(project.name)}#enquiry`}>Enquire Now</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
