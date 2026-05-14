import NextLink from "next/link";
import { Button } from "@heroui/button";
import { Spacer } from "@heroui/spacer";

import { EditorialSplitCard } from "@/components/editorial-split-card";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

const workChips = [
  "Sentinel Ag",
  "Maps & imagery",
  "Field data",
] as const;

const aboutChips = ["Wildlife ecology", "Computer science", "AgTech"] as const;

export default function IndexPage() {
  return (
    <DefaultLayout>
      <EditorialSplitCard
        tall
        heading={
          <h1
            className={title({
              fullWidth: true,
              class: "text-left text-foreground",
            })}
          >
            Bridging the gap between the ground and the cloud
          </h1>
        }
        imageAlt="Abstract digital visualization suggesting growth and connectivity"
        imageSrc="/digital-tree-background.jpg"
      >
        <p className="text-left text-lg leading-relaxed text-default-700 sm:text-xl">
          I&apos;m Riley—software engineer with hands in the dirt and head in
          the clouds. I build where agriculture, maps, and field data meet, so
          people on the ground get tools that stay clear and dependable through
          a busy season.
        </p>
      </EditorialSplitCard>

      <Spacer y={16} />

      <EditorialSplitCard
        chips={aboutChips}
        eyebrow="About"
        heading={
          <h2
            className={title({
              size: "sm",
              fullWidth: true,
              class: "text-left text-foreground",
            })}
          >
            The path that still grounds how I build
          </h2>
        }
        imageAlt="Tractor in a field at work"
        imageSrc="/tractor-background.jpg"
      >
        <p className="text-left text-base leading-relaxed text-default-700">
          Farm kid, combine rides with my grandpa, cattle work with my dad—then
          wildlife ecology, then a hard pivot into computer science when I saw
          what code could do for land and water.
        </p>
        <div>
          <Button as={NextLink} color="primary" href="/about" variant="solid">
            Read full story
          </Button>
        </div>
      </EditorialSplitCard>

      <Spacer y={16} />

      <EditorialSplitCard
        chips={workChips}
        eyebrow="Work"
        heading={
          <h2
            className={title({
              size: "sm",
              fullWidth: true,
              class: "text-left text-foreground",
            })}
          >
            AgTech, maps, and software under real pressure
          </h2>
        }
        imageAlt="Rows of corn in a green field"
        imageSrc="/corn-background.jpg"
      >
        <p className="text-left text-base leading-relaxed text-default-700">
          Sentinel is where most of my shipping happens today—imagery pipelines,
          geospatial tooling, and nitrogen workflows that have to survive the
          cab and the office. Before that, internships and field jobs taught me
          how brittle systems look when the season won&apos;t wait.
        </p>
        <div>
          <Button as={NextLink} color="primary" href="/work" variant="solid">
            View work
          </Button>
        </div>
      </EditorialSplitCard>

      <Spacer y={16} />
    </DefaultLayout>
  );
}
