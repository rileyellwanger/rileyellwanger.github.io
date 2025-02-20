import { Spacer } from "@heroui/spacer";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 text-white">
        <div className="w-full fixed inset-0 justify-self-center">
          <Image
            alt="Background"
            className="w-screen h-screen object-cover"
            src="/digital tree background.jpg"
          />
        </div>
        <div className="fixed inset-0 bg-black/70 w-full justify-self-center" />
        <div className="inline-block text-center justify-center mx-12 z-10">
          <h1 className={title()}>About</h1>
          <p className="text-lg text-center mt-6">
            I am Riley Ellwanger, a software engineer whose roots are deeply
            embedded in agriculture. My background in agriculture and growing up
            in the outdoors naturally led me to pursue a degree in Wildlife
            Ecology. However, my path took an exciting turn when I realized the
            potential of software to not only enhance but also revolutionize
            agriculture and conservation. That epiphany guided me to switch my
            focus to Computer Science, where I could magnify my impact the
            environment through technology.
          </p>
          <br />
          <p className="text-lg text-center">
            Now, I thrive in the dynamic and innovative environment of AgTech
            startups, where I&apos;ve found my niche as a Senior Software
            Engineer at Sentinel Fertigation. Here, I&apos;m deeply involved in
            creating software solutions that marry the best of both worlds - the
            natural and the digital. My expertise spans full-stack web
            development, geospatial data analysis, map visualizations and
            drawing, image processing, and agriculture data management, all of
            which enable me to push the boundaries of what&apos;s possible in
            farming technology, help farmers optimize their nitrogen management,
            and keep excess nitrogen out of our waterways.
          </p>
          <br />
          <p className="text-lg text-center">
            My biggest hobbies are hunting and fishing. I particularly enjoy
            bowhunting for deer and turkey, and fishing for bass, but the best
            part is sharing the experience and harvest with friends and family.
            I&apos;m always eager to discuss new projects, share ideas, or
            explore how we can work together to make a positive impact on the
            environment through technology. Feel free to reach out for
            collaborations, or just to chat about the future of farming.
          </p>
          <Spacer y={16} />
          <h1 className={title()}>
            Designing Software with Natural Principles
          </h1>
          <p className="text-lg text-center mt-6">
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
          <Spacer y={16} />
          <h1 className={title()}>From the Ground Up</h1>
          <p className="text-lg text-center mt-6">
            My journey from working on ranches, construction sites, and
            conservation areas has been a rich soil for my growth as a software
            engineer. The unpredictability of a ranch taught me to build
            software that&apos;s robust and adabptable, capable of handling the
            unexpected. Construction projects taught me the importance of
            precision and accuracy in software design, where every detail
            matters. Conservation work taught me how prioritize balance and
            sustainability in software development, where the long-term impact
            is always considered.
          </p>
          <Spacer y={16} />
          <h1 className={title()}>User-Driven Innovation</h1>
          <p className="text-lg text-center mt-6">
            Software can only go as far as people take it. Software should make
            people&apos;s lives easier, that&apos;s where the real value lies.
            My unique blend of experiences, and people I&apos;ve worked with,
            enables me to create software that&apos;s intuitive, efficient, and
            effective. I&apos;ve learned to listen, not just to what is said,
            but to find the underlying needs and desires that drive
            people&apos;s action, crafting software that speaks the language of
            its users. My software isn&apos;t just a tool; it&apos;s an ally to
            those in agriculture, designed to augment decision-making and labor.
          </p>
          <Link className="text-blue-500 underline mt-6" href="/work">
            Learn more about my work
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
