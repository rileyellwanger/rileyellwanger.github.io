import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Spacer } from "@heroui/spacer";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function WorkPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
        <h1 className={title({})}>Work</h1>
      </div>

      <Card className="overlay-image-text relative w-full overflow-hidden text-white">
        <CardHeader className="relative z-10 w-full justify-center pt-4">
          <h2 className={title({ class: "text-center" })}>
            Innovation at Sentinel
          </h2>
        </CardHeader>
        <Image
          removeWrapper
          alt="Corn field used as a backdrop for Sentinel Fertigation work"
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src="/corn-background.jpg"
        />
        <div className="absolute inset-0 z-[1] bg-black/50" />
        <CardBody className="relative z-10 gap-2 w-full px-12 py-8">
          <p className="text-lg text-center">
            <span className="text-xl font-bold">Image analytics</span> — Image
            processing pipeline; the backbone of our recommendations and
            product.
          </p>
          <br />
          <p className="text-lg text-center">
            <span className="text-xl font-bold">Ag data processing</span> —
            Process and analyze planting, application, and harvest data to
            generate insights and recommendations.
          </p>
          <br />
          <p className="text-lg text-center">
            <span className="text-xl font-bold">Management zone creation</span>{" "}
            — Generate management zones based on any number of data layers,
            including yield data, soil samples, and satellite imagery.
          </p>
          <br />
          <p className="text-lg text-center">
            <span className="text-xl font-bold">
              Variable rate prescriptions
            </span>{" "}
            — Create variable rate prescriptions for fertilizer applications
            based on management zones, soil samples, yield data, or imagery.
            Export to a file for monitor or pivot controller.
          </p>
          <br />
          <p className="text-lg text-center">
            <span className="text-xl font-bold">Automated plot placement</span>{" "}
            — Automatically place plots in representative areas of the field for
            our nitrogen recommendations.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button
              as="a"
              className="text-white"
              color="primary"
              href="https://www.sentinelfertigation.com"
              rel="noreferrer"
              target="_blank"
              variant="solid"
            >
              Sentinel website
            </Button>
          </div>
        </CardBody>
        <CardFooter className="relative z-10 justify-center pb-4">
          <p className="text-md text-center">
            <span className="text-lg font-bold">Technology</span> — Mapbox,
            Turf.js, Python, Geopandas, GDAL, PostGIS, Celery, Redis, Docker,
            Azure DevOps
          </p>
        </CardFooter>
      </Card>

      <Spacer y={16} />

      <Card className="overlay-image-text relative w-full overflow-hidden text-white">
        <CardHeader className="relative z-10 w-full justify-center pt-4">
          <h2 className={title({ class: "text-center" })}>Freelance</h2>
        </CardHeader>
        <Image
          removeWrapper
          alt="Soil and circuit imagery suggesting data and agriculture"
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src="/soil-circuits.jpg"
        />
        <div className="absolute inset-0 z-[1] bg-black/50" />
        <CardBody className="relative z-10 gap-2 w-full px-12 py-8">
          <p className="text-lg text-center">
            <span className="text-xl font-bold">Data migrations</span> — Migrate
            well monitoring and chemigation data from historical spreadsheets
            and databases to a modern database via API.
          </p>
        </CardBody>
      </Card>

      <Spacer y={16} />

      <Card className="overlay-image-text relative w-full overflow-hidden text-white">
        <CardHeader className="relative z-10 w-full justify-center pt-4">
          <h2 className={title({ class: "text-center" })}>
            Senior design project
          </h2>
        </CardHeader>
        <Image
          removeWrapper
          alt="Sandhills prairie landscape"
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src="/sandhills-background.jpg"
        />
        <div className="absolute inset-0 z-[1] bg-black/50" />
        <CardBody className="relative z-10 gap-2 w-full px-12 py-8">
          <p className="text-lg text-center">
            Worked with a team of five other seniors to develop a flexible web
            application for a cattle research facility to manage their research
            projects, replacing their spreadsheet system and allowing them to
            import them for robust storage and analysis. It was especially
            fulfilling to facilitate communication and knowledge transfer
            between the clients and developers, given my experience in both
            fields.
          </p>
        </CardBody>
      </Card>

      <Spacer y={16} />

      <Card className="overlay-image-text relative w-full overflow-hidden text-white">
        <CardHeader className="relative z-10 w-full justify-center pt-4">
          <h2 className={title({ class: "text-center" })}>
            Internship at Crete Carrier
          </h2>
        </CardHeader>
        <Image
          removeWrapper
          alt="Semi truck on the highway"
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src="/truck-background.jpg"
        />
        <div className="absolute inset-0 z-[1] bg-black/50" />
        <CardBody className="relative z-10 gap-2 w-full px-12 py-8">
          <p className="text-lg text-center">
            I cut my teeth in software engineering at Crete Carrier, where I
            focused on rewriting legacy applications in a modern stack. I also
            developed an API-based system for bidding on loads, which replaced a
            web scraping system and improved the efficiency of the bidding
            process.
          </p>
        </CardBody>
        <CardFooter className="relative z-10 justify-center pb-4">
          <p className="text-md text-center">
            <span className="text-lg font-bold">Technology</span> — Vue.js,
            Node.js, Express, SQL Server
          </p>
        </CardFooter>
      </Card>

      <Spacer y={16} />

      <Card className="overlay-image-text relative w-full overflow-hidden text-white">
        <CardHeader className="relative z-10 w-full justify-center pt-4">
          <h2 className={title({ class: "text-center" })}>
            Nebraska Game &amp; Parks
          </h2>
        </CardHeader>
        <Image
          removeWrapper
          alt="Open grassland and sky"
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src="/landscape.jpg"
        />
        <div className="absolute inset-0 z-[1] bg-black/50" />
        <CardBody className="relative z-10 gap-2 w-full px-12 py-8">
          <p className="text-lg text-center">
            As a Conservation Technician, I primarily worked on habitat
            management projects, such as prescribed burns, weed control, food
            plot planting, and wildlife surveys.
          </p>
        </CardBody>
      </Card>

      <Spacer y={16} />

      <Card className="overlay-image-text relative w-full overflow-hidden text-white">
        <CardHeader className="relative z-10 w-full justify-center pt-4">
          <h2 className={title({ class: "text-center" })}>Intern at N-CORPE</h2>
        </CardHeader>
        <Image
          removeWrapper
          alt="Restored prairie grassland"
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src="/prairie.jpg"
        />
        <div className="absolute inset-0 z-[1] bg-black/50" />
        <CardBody className="relative z-10 gap-2 w-full px-12 py-8">
          <p className="text-lg text-center">
            N-CORPE is a grassland restoration project that retired irrigated
            farmland to conserve groundwater to fulfill interstate compacts. I
            worked under the range manager to reseed grasslands, control weeds,
            and develop grazing and reseeding plans.
          </p>
        </CardBody>
      </Card>

      <Spacer y={16} />
    </DefaultLayout>
  );
}
