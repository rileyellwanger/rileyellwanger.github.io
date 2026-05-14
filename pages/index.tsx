import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Spacer } from "@heroui/spacer";
import { useRouter } from "next/router";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  const router = useRouter();

  return (
    <DefaultLayout>
      <Card className="w-full min-h-[400px] relative overflow-hidden">
        <Image
          removeWrapper
          alt="Abstract digital visualization suggesting growth and connectivity"
          className="object-cover w-full h-full absolute inset-0 z-0"
          src="/digital-tree-background.jpg"
        />
        <div className="absolute inset-0 bg-black/50" />
        <CardBody className="overlay-image-text relative z-10 flex min-h-[400px] w-full flex-col justify-center gap-4 px-12">
          <h1 className={title({ class: "text-center" })}>
            Bridging the gap between the ground and the cloud
          </h1>
          <p className="text-xl text-center">
            Welcome to my portfolio, I&apos;m Riley, a software engineer with my
            hands in the dirt and my head in the clouds. Here, I blend my
            passion for agriculture and the outdoors with cutting-edge
            technology to tackle complex challenges with elegantly simple
            solutions.
          </p>
        </CardBody>
      </Card>

      <Spacer y={16} />

      <Card
        isPressable
        className="w-full min-h-[400px] relative overflow-hidden"
        onPress={() => {
          void router.push("/about");
        }}
      >
        <Image
          removeWrapper
          alt="Tractor in a field at work"
          className="object-cover w-full h-full absolute inset-0 z-0"
          src="/tractor-background.jpg"
        />
        <div className="absolute inset-0 bg-black/50" />
        <CardBody className="overlay-image-text relative z-10 flex min-h-[400px] w-full flex-col justify-center gap-4 px-12">
          <h2 className={title({ class: "text-center" })}>About</h2>
          <p className="text-lg text-center">
            Growing up on a farm, I learned to appreciate hard work, patience,
            and nature while riding in the combine with my grandpa and working
            on a cattle ranch with my dad. This, along with my love for hunting
            and fishing, led me to initially pursue a degree in Wildlife
            Ecology, but once I realized the potential of software to amplify my
            impact on both agriculture and conservation, I switched to Computer
            Science. Now, my on-the-ground experience fuels my approach to
            software design, ensuring it&apos;s efficient and sustainable for
            the people who use it.
          </p>
        </CardBody>
      </Card>

      <Spacer y={16} />

      <Card
        isPressable
        className="w-full min-h-[450px] relative overflow-hidden"
        onPress={() => {
          void router.push("/work");
        }}
      >
        <Image
          removeWrapper
          alt="Rows of corn in a green field"
          className="object-cover w-full h-full absolute inset-0 z-0"
          src="/corn-background.jpg"
        />
        <div className="absolute inset-0 bg-black/50" />
        <CardBody className="overlay-image-text relative z-10 flex min-h-[400px] w-full flex-col justify-center gap-4 px-12">
          <h2 className={title({ class: "text-center" })}>Work</h2>
          <p className="text-lg text-center">
            I have successfully merged my passion for agriculture with my work
            at Sentinel Fertigation, an AgTech startup, where I develop
            innovative software solutions that help farmers optimize their
            nitrogen management—reducing their environmental impact and
            increasing their profitability. I have gained a wealth of experience
            in full-stack development, geospatial data analysis, and image
            processing, and I am always looking for new ways to leverage
            technology to improve the world around me.
          </p>
        </CardBody>
      </Card>

      <Spacer y={16} />
    </DefaultLayout>
  );
}
