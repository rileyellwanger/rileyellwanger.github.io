import { Link } from "@heroui/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16 ">
        {children}
      </main>
      <footer className="w-full flex flex-col items-center justify-center gap-4 py-6 px-6 text-default-600">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <Link
            className="inline-flex items-center gap-2 text-foreground"
            href={siteConfig.links.email}
          >
            <FontAwesomeIcon className="text-2xl" icon={faEnvelope} />
            <span className="text-sm underline-offset-4 hover:underline">
              rileyellwanger@outlook.com
            </span>
          </Link>
          <Link
            isExternal
            showAnchorIcon
            aria-label="LinkedIn profile"
            className="inline-flex items-center gap-2"
            href={siteConfig.links.linkedin}
          >
            <FontAwesomeIcon className="text-2xl" icon={faLinkedin} />
          </Link>
          <Link
            isExternal
            showAnchorIcon
            aria-label="GitHub profile"
            className="inline-flex items-center gap-2"
            href={siteConfig.links.github}
          >
            <FontAwesomeIcon className="text-2xl" icon={faGithub} />
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm">
          <Link href={siteConfig.links.resume}>Resume (PDF)</Link>
          <span aria-hidden className="text-default-400">
            ·
          </span>
          <Link isExternal showAnchorIcon href={siteConfig.links.siteRepo}>
            Site source
          </Link>
        </div>
        <p className="text-xs text-default-500 text-center">
          Built with{" "}
          <Link isExternal showAnchorIcon href="https://nextjs.org/">
            Next.js
          </Link>
          .
        </p>
      </footer>
    </div>
  );
}
