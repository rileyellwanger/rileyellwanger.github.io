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
      <a
        href="https://www.sentinelfertigation.com"
        rel="noreferrer"
        target="_blank"
      >
        <Card className="w-full relative overflow-hidden text-white">
          <CardHeader className="relative z-10 w-full justify-center pt-4">
            <h1 className={title({ class: "text-center" })}>
              Sentinel Fertigation
            </h1>
          </CardHeader>
          <Image
            removeWrapper
            alt="Background"
            className="absolute inset-0 z-0 w-full h-full object-cover"
            src="/corn background.jpg"
          />
          <div className="absolute inset-0 bg-black/50" />
          <CardBody className="relative z-10 gap-2 w-full px-12 py-8">
            <p className="text-lg text-center">
              <span className="text-xl font-bold">Image Analytics</span> - Image
              processing pipeline; the backbone of our recommendations and
              product.
            </p>
            <br />
            <p className="text-lg text-center">
              <span className="text-xl font-bold">Ag Data Processing</span> -
              Process and analyze planting, application, and harvest data to
              generate insights and recommendations.
            </p>
            <br />
            <p className="text-lg text-center">
              <span className="text-xl font-bold">
                Management Zone Creation
              </span>{" "}
              - Generate management zones based on any number of data layers,
              including yield data, soil samples, and satellite imagery.
            </p>
            <br />
            <p className="text-lg text-center">
              <span className="text-xl font-bold">
                Variable Rate Prescriptions
              </span>{" "}
              - Create variable rate prescriptions for fertilizer applications
              based on management zones, soil samples, yield data, or imagery.
              Export to a file for monitor or pivot controller.
            </p>
            <br />
            <p className="text-lg text-center">
              <span className="text-xl font-bold">
                Automated Plot Placement
              </span>{" "}
              - Automatically place plots in representative areas of the field
              for our nitrogen recommendations.
            </p>
          </CardBody>
          <CardFooter className="relative z-10 justify-center pb-4">
            <p className="text-md text-center">
              <span className="text-lg font-bold">Technology</span> - Mapbox,
              Turf.js, Python, Geopandas, GDAL, PostGIS, Celery, Redis, Docker,
              Azure DevOps
            </p>
          </CardFooter>
        </Card>
      </a>
      <Spacer y={16} />
      <Card className="w-full relative overflow-hidden text-white">
        <CardHeader className="relative z-10 w-full justify-center pt-4">
          <h1 className={title({ class: "text-center" })}>Freelance</h1>
        </CardHeader>
        <Image
          removeWrapper
          alt="Background"
          className="absolute inset-0 z-0 w-full h-full object-cover"
          src="/soil circuits.jpg"
        />
        <div className="absolute inset-0 bg-black/50" />
        <CardBody className="relative z-10 gap-2 w-full px-12 py-8">
          <p className="text-lg text-center">
            <span className="text-xl font-bold">Data Migrations</span> - Migrate
            well monitoring and chemigation data from historical spreadsheets,
            and databases to a modern database via API.
          </p>
        </CardBody>
      </Card>
      <Spacer y={16} />
      <Card className="w-full relative overflow-hidden text-white">
        <CardHeader className="relative z-10 w-full justify-center pt-4">
          <h1 className={title({ class: "text-center" })}>
            Senior Design Project
          </h1>
        </CardHeader>
        <Image
          removeWrapper
          alt="Background"
          className="absolute inset-0 z-0 w-full h-full object-cover"
          src="/sandhills background.jpg"
        />
        <div className="absolute inset-0 bg-black/50" />
        <CardBody className="relative z-10 gap-2 w-full px-12 py-8">
          <p className="text-lg text-center">
            Worked with a team of 5 other seniors to develop a flexible web
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
      <Card className="w-full relative overflow-hidden text-white">
        <CardHeader className="relative z-10 w-full justify-center pt-4">
          <h1 className={title({ class: "text-center" })}>
            Internship at Crete Carrier
          </h1>
        </CardHeader>
        <Image
          removeWrapper
          alt="Background"
          className="absolute inset-0 z-0 w-full h-full object-cover"
          src="/truck background.jpg"
        />
        <div className="absolute inset-0 bg-black/50" />
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
            <span className="text-lg font-bold">Technology</span> - Vue.js,
            Node.js, Express, SQLServer
          </p>
        </CardFooter>
      </Card>
      <Spacer y={16} />
      <Card className="w-full relative overflow-hidden text-white">
        <CardHeader className="relative z-10 w-full justify-center pt-4">
          <h1 className={title({ class: "text-center" })}>
            Nebraska Game & Parks
          </h1>
        </CardHeader>
        <Image
          removeWrapper
          alt="Background"
          className="absolute inset-0 z-0 w-full h-full object-cover"
          src="/landscape.jpg"
        />
        <div className="absolute inset-0 bg-black/50" />
        <CardBody className="relative z-10 gap-2 w-full px-12 py-8">
          <p className="text-lg text-center">
            As a Conservation Technician, I primarily worked on habitat
            management projects, such as prescribed burns, weed control, food
            plot planting, and wildlife surveys.
          </p>
        </CardBody>
      </Card>
      <Spacer y={16} />
      <Card className="w-full relative overflow-hidden text-white">
        <CardHeader className="relative z-10 w-full justify-center pt-4">
          <h1 className={title({ class: "text-center" })}>Intern at N-CORPE</h1>
        </CardHeader>
        <Image
          removeWrapper
          alt="Background"
          className="absolute inset-0 z-0 w-full h-full object-cover"
          src="/prairie.jpg"
        />
        <div className="absolute inset-0 bg-black/50" />
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
