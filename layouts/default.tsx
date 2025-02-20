import { Link } from "@heroui/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16 ">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 gap-4">
        <Link href="mailto:rileyellwanger@outlook.com">
          <FontAwesomeIcon className="text-2xl" icon={faEnvelope} />
        </Link>
        <Link href="https://www.linkedin.com/in/riley-ellwanger/">
          <FontAwesomeIcon className="text-2xl" icon={faLinkedin} />
        </Link>
      </footer>
    </div>
  );
}
