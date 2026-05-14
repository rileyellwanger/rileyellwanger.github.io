import { Button } from "@heroui/button";
import { Spacer } from "@heroui/spacer";

import { EditorialSplitCard } from "@/components/editorial-split-card";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

const sentinelHighlights = [
  {
    label: "Image analytics",
    text: "Image processing pipeline—the backbone of our recommendations and product.",
  },
  {
    label: "Ag data processing",
    text: "Planting, application, and harvest data turned into insights and recommendations.",
  },
  {
    label: "Management zone creation",
    text: "Zones from yield, soil samples, satellite imagery, and other layers you choose.",
  },
  {
    label: "Variable rate prescriptions",
    text: "Prescriptions for fertilizer applications from zones, samples, yield, or imagery—exported for monitor or pivot controller.",
  },
  {
    label: "Automated plot placement",
    text: "Plots placed in representative areas of the field for nitrogen recommendations.",
  },
] as const;

const sentinelChips = ["Imagery", "Geospatial", "Nitrogen tools"] as const;

export default function WorkPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-4 pb-8 md:pb-10">
        <h1
          className={title({
            fullWidth: true,
            class: "text-center text-foreground",
          })}
        >
          Work
        </h1>
        <p className="mx-auto max-w-2xl text-center text-default-600">
          A quick tour of where I&apos;ve spent my time—AgTech first, then
          earlier internships and field roles that still shape how I build.
        </p>
      </div>

      <EditorialSplitCard
        chips={sentinelChips}
        eyebrow="AgTech"
        footer={
          <>
            <span className="font-semibold text-default-800">Technology</span>
            <span> — </span>
            Mapbox, Turf.js, Python, GeoPandas, GDAL, PostGIS, Celery, Redis,
            Docker, Azure DevOps
          </>
        }
        heading={
          <h2
            className={title({
              size: "sm",
              fullWidth: true,
              class: "text-left text-foreground",
            })}
          >
            Innovation at Sentinel
          </h2>
        }
        imageAlt="Corn field used as a backdrop for Sentinel Ag work"
        imageSrc="/corn-background.jpg"
      >
        <ul className="space-y-4">
          {sentinelHighlights.map((row) => (
            <li key={row.label} className="text-left text-base leading-relaxed">
              <span className="font-semibold text-foreground">{row.label}</span>
              <span className="text-default-600"> — </span>
              <span className="text-default-700">{row.text}</span>
            </li>
          ))}
        </ul>
        <div>
          <Button
            as="a"
            color="primary"
            href="https://www.sentinelag.tech"
            rel="noreferrer"
            target="_blank"
            variant="solid"
          >
            Sentinel website
          </Button>
        </div>
      </EditorialSplitCard>

      <Spacer y={16} />

      <EditorialSplitCard
        eyebrow="Freelance"
        heading={
          <h2
            className={title({
              size: "sm",
              fullWidth: true,
              class: "text-left text-foreground",
            })}
          >
            Data migrations
          </h2>
        }
        imageAlt="Soil and circuit imagery suggesting data and agriculture"
        imageSrc="/soil-circuits.jpg"
      >
        <p className="text-left text-base leading-relaxed text-default-700">
          <span className="font-semibold text-foreground">Scope</span>
          <span className="text-default-600"> — </span>
          Well monitoring and chemigation history out of spreadsheets and legacy
          databases into a modern store, exposed through an API.
        </p>
      </EditorialSplitCard>

      <Spacer y={16} />

      <EditorialSplitCard
        eyebrow="Capstone"
        heading={
          <h2
            className={title({
              size: "sm",
              fullWidth: true,
              class: "text-left text-foreground",
            })}
          >
            Senior design project
          </h2>
        }
        imageAlt="Sandhills prairie landscape"
        imageSrc="/sandhills-background.jpg"
      >
        <p className="text-left text-base leading-relaxed text-default-700">
          With five other seniors, I helped ship a web app for a cattle research
          facility to manage projects and replace a spreadsheet workflow—so they
          could import historical records into structured storage and analysis.
          Bridging ranch vocabulary and developer tradeoffs was the best part of
          the job.
        </p>
      </EditorialSplitCard>

      <Spacer y={16} />

      <EditorialSplitCard
        eyebrow="Internship"
        footer={
          <>
            <span className="font-semibold text-default-800">Technology</span>
            <span> — </span>
            Vue.js, Node.js, Express, SQL Server
          </>
        }
        heading={
          <h2
            className={title({
              size: "sm",
              fullWidth: true,
              class: "text-left text-foreground",
            })}
          >
            Crete Carrier
          </h2>
        }
        imageAlt="Semi truck on the highway"
        imageSrc="/truck-background.jpg"
      >
        <p className="text-left text-base leading-relaxed text-default-700">
          I cut my teeth rewriting legacy apps in a modern stack and shipped an
          API-based load-bidding flow that replaced a brittle web-scraping
          approach—fewer moving parts when bids had to land on time.
        </p>
      </EditorialSplitCard>

      <Spacer y={16} />

      <EditorialSplitCard
        eyebrow="Field experience"
        heading={
          <h2
            className={title({
              size: "sm",
              fullWidth: true,
              class: "text-left text-foreground",
            })}
          >
            Nebraska Game &amp; Parks
          </h2>
        }
        imageAlt="Open grassland and sky"
        imageSrc="/landscape.jpg"
      >
        <p className="text-left text-base leading-relaxed text-default-700">
          As a Conservation Technician I lived in habitat work—prescribed burns,
          weed control, food plots, and wildlife surveys—long days that taught
          me how plans meet weather, equipment, and wildlife that do not read a
          Gantt chart.
        </p>
      </EditorialSplitCard>

      <Spacer y={16} />

      <EditorialSplitCard
        eyebrow="Field experience"
        heading={
          <h2
            className={title({
              size: "sm",
              fullWidth: true,
              class: "text-left text-foreground",
            })}
          >
            Intern at N-CORPE
          </h2>
        }
        imageAlt="Restored prairie grassland"
        imageSrc="/prairie.jpg"
      >
        <p className="text-left text-base leading-relaxed text-default-700">
          N-CORPE retired irrigated cropland to grassland to protect groundwater
          under interstate compacts. With the range manager I reseeded, fought
          weeds, and helped shape grazing and reseeding plans—work that still
          informs how I think about long-horizon stewardship.
        </p>
      </EditorialSplitCard>

      <Spacer y={16} />
    </DefaultLayout>
  );
}
