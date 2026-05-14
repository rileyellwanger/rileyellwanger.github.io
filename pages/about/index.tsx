import type { ReactNode } from "react";

import { Spacer } from "@heroui/spacer";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { EditorialSplitCard } from "@/components/editorial-split-card";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

const timeline = [
  {
    title: "Field and studies",
    body: "Farm and ranch work; Wildlife Ecology, then a pivot to Computer Science when software looked like the biggest lever for land and water.",
  },
  {
    title: "Today",
    body: "Senior Software Engineer at Sentinel Ag—imagery pipelines, maps and drawing tools, agronomic data, and product work farmers actually run in season.",
  },
] as const;

function SectionBlock({
  subtitle,
  children,
}: {
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h3 className="text-left text-lg font-semibold tracking-tight text-foreground">
        {subtitle}
      </h3>
      <div className="text-left text-base leading-relaxed text-default-700">
        {children}
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-16 py-8 md:py-10">
        <EditorialSplitCard
          eyebrow="About"
          heading={
            <h1
              className={title({
                fullWidth: true,
                class: "text-left text-foreground",
              })}
            >
              About
            </h1>
          }
          imageAlt="Abstract digital tree motif over a natural palette"
          imageSrc="/digital-tree-background.jpg"
        >
          <div className="space-y-6">
            <p className="text-left text-base leading-relaxed text-default-700">
              I am Riley Ellwanger, a software engineer whose roots are deeply
              embedded in agriculture. Growing up outdoors naturally pulled me
              toward Wildlife Ecology—until I saw how much leverage software
              could add for both agriculture and conservation. That shift sent
              me into Computer Science so I could magnify my impact on the
              environment through technology, not despite it.
            </p>
            <p className="text-left text-base leading-relaxed text-default-700">
              Now I thrive in AgTech startups, most recently as a Senior
              Software Engineer at Sentinel Ag. I spend my days where
              the natural and the digital meet: full-stack web work, geospatial
              analysis, map visualizations and drawing, image processing, and
              agriculture data management—so we can help farmers tighten
              nitrogen management and keep excess nitrogen out of waterways.
            </p>
            <div className="rounded-xl border border-default-200 bg-default-100/80 px-5 py-6 sm:px-8">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-default-500">
                At a glance
              </p>
              <ul className="mt-5 space-y-5">
                {timeline.map((item) => (
                  <li
                    key={item.title}
                    className="border-l-2 border-primary pl-4 text-left"
                  >
                    <p className="font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-1 text-base leading-relaxed text-default-600">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-left text-base leading-relaxed text-default-700">
              Off the clock my world is still outside: bowhunting deer and
              turkey, bass fishing, and sharing the harvest with friends and
              family. I&apos;m always glad to talk new ideas, collaboration, or
              where farming and software are headed next.
            </p>
          </div>
        </EditorialSplitCard>

        <EditorialSplitCard
          eyebrow="How I build"
          heading={
            <h2
              className={title({
                size: "sm",
                fullWidth: true,
                class: "text-left text-foreground",
              })}
            >
              Principles that carry into code
            </h2>
          }
          imageAlt="Sandhills prairie landscape"
          imageSrc="/sandhills-background.jpg"
        >
          <div className="space-y-10">
            <SectionBlock subtitle="Designing software with natural principles">
              <p>
                My engineering instincts borrow from ecology: diverse,
                composable pieces that work together tend to survive change
                better than one brittle monolith. I aim for balance—enough
                structure to ship reliably, enough flexibility to adapt when the
                field (literal or figurative) throws something new at you.
              </p>
            </SectionBlock>
            <SectionBlock subtitle="From the ground up">
              <p>
                Ranches, construction crews, and conservation crews each taught
                me something different. Ranch work rewards systems that handle
                surprises. Construction rewards precision. Conservation rewards
                thinking in decades, not just sprints. That mix shows up in how
                I scope, test, and hand off software.
              </p>
            </SectionBlock>
            <SectionBlock subtitle="User-driven innovation">
              <p>
                Software only matters if people carry it into practice. My field
                experience, together with the people I&apos;ve learned
                alongside, pushes me toward interfaces and workflows that
                respect real time pressure. I listen for what isn&apos;t said as
                much as what is—then build tools that feel like an ally in the
                cab or the office, not another chore.
              </p>
            </SectionBlock>
          </div>
          <Spacer y={4} />
          <Button as={Link} color="primary" href="/work" variant="flat">
            Learn more about my work
          </Button>
        </EditorialSplitCard>
      </div>
    </DefaultLayout>
  );
}
