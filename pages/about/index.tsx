import { Spacer } from "@heroui/spacer";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="relative isolate overflow-hidden py-8 md:py-10">
        <Image
          removeWrapper
          alt="Abstract digital tree motif over a natural palette"
          className="pointer-events-none absolute inset-0 z-0 h-full min-h-full w-full object-cover"
          src="/digital-tree-background.jpg"
        />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-black/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center overlay-image-text text-white">
          <h1 className={title()}>About</h1>
          <p className="mt-6 text-lg">
            I am Riley Ellwanger, a software engineer whose roots are deeply
            embedded in agriculture. My background in agriculture and growing up
            in the outdoors naturally led me to pursue a degree in Wildlife
            Ecology. However, my path took an exciting turn when I realized the
            potential of software to not only enhance but also revolutionize
            agriculture and conservation. That epiphany guided me to switch my
            focus to Computer Science, where I could magnify my impact on the
            environment through technology.
          </p>
          <Spacer y={6} />
          <p className="text-lg">
            Now, I thrive in the dynamic and innovative environment of AgTech
            startups, where I&apos;ve found my niche as a Senior Software
            Engineer at Sentinel Fertigation. Here, I&apos;m deeply involved in
            creating software solutions that marry the best of both worlds—the
            natural and the digital. My expertise spans full-stack web
            development, geospatial data analysis, map visualizations and
            drawing, image processing, and agriculture data management, all of
            which enable me to push the boundaries of what&apos;s possible in
            farming technology, help farmers optimize their nitrogen management,
            and keep excess nitrogen out of our waterways.
          </p>
          <Spacer y={6} />
          <p className="text-lg">
            My biggest hobbies are hunting and fishing. I particularly enjoy
            bowhunting for deer and turkey, and fishing for bass, but the best
            part is sharing the experience and harvest with friends and family.
            I&apos;m always eager to discuss new projects, share ideas, or
            explore how we can work together to make a positive impact on the
            environment through technology. Feel free to reach out for
            collaborations, or just to chat about the future of farming.
          </p>
          <Spacer y={12} />
          <h2 className={title({ size: "sm" })}>
            Designing software with natural principles
          </h2>
          <p className="mt-6 text-lg">
            My work in software engineering is inspired by the ecological
            principles I studied in Wildlife Ecology. Just as a diverse
            ecosystem is more resilient to change, I believe that software
            should be designed with a diverse set of functions that work
            together to create a robust and adaptable system. This approach
            allows for greater flexibility, scalability, and efficiency,
            ensuring that the software can evolve and adapt to changing
            conditions over time. I strive for equilibrium in design, where
            simplicity and complexity are balanced to create a harmonious and
            efficient system that is both elegant and powerful.
          </p>
          <Spacer y={12} />
          <h2 className={title({ size: "sm" })}>From the ground up</h2>
          <p className="mt-6 text-lg">
            My journey from working on ranches, construction sites, and
            conservation areas has been a rich soil for my growth as a software
            engineer. The unpredictability of a ranch taught me to build
            software that&apos;s robust and adaptable, capable of handling the
            unexpected. Construction projects taught me the importance of
            precision and accuracy in software design, where every detail
            matters. Conservation work taught me how to prioritize balance and
            sustainability in software development, where the long-term impact
            is always considered.
          </p>
          <Spacer y={12} />
          <h2 className={title({ size: "sm" })}>User-driven innovation</h2>
          <p className="mt-6 text-lg">
            Software can only go as far as people take it. Software should make
            people&apos;s lives easier; that&apos;s where the real value lies.
            My unique blend of experiences, and people I&apos;ve worked with,
            enables me to create software that&apos;s intuitive, efficient, and
            effective. I&apos;ve learned to listen, not just to what is said,
            but to find the underlying needs and desires that drive
            people&apos;s actions, crafting software that speaks the language of
            its users. My software isn&apos;t just a tool; it&apos;s an ally to
            those in agriculture, designed to augment decision-making and labor.
          </p>
          <Spacer y={8} />
          <Link
            className="text-sky-300 underline hover:text-sky-200"
            href="/work"
          >
            Learn more about my work
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
