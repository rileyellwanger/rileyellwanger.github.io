import type { ReactNode } from "react";

import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";

const shell = "overflow-hidden border border-default-200 bg-content1 shadow-md";

type EditorialSplitCardProps = {
  imageSrc: string;
  imageAlt: string;
  /** Small caps label above the heading; omit for hero-style blocks */
  eyebrow?: string;
  /** Use `<h1>`, `<h2>`, etc. with `title()` classes as needed */
  heading: ReactNode;
  chips?: readonly string[];
  footer?: ReactNode;
  children: ReactNode;
  /** Taller image column on large screens (home hero) */
  tall?: boolean;
};

export function EditorialSplitCard({
  imageSrc,
  imageAlt,
  eyebrow,
  heading,
  chips,
  footer,
  children,
  tall = false,
}: EditorialSplitCardProps) {
  const rowClass = tall
    ? "flex flex-col md:flex-row md:min-h-[400px] md:items-stretch"
    : "flex flex-col md:flex-row md:min-h-[280px] md:items-stretch";

  const imgColClass = tall
    ? "relative h-64 shrink-0 md:h-auto md:min-h-[400px] md:w-[42%]"
    : "relative h-52 shrink-0 md:h-auto md:min-h-[280px] md:w-[42%]";

  return (
    <Card className={shell}>
      <div className={rowClass}>
        <div className={imgColClass}>
          <Image
            removeWrapper
            alt={imageAlt}
            className="h-full w-full object-cover"
            src={imageSrc}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r" />
        </div>
        <CardBody className="flex flex-1 flex-col justify-center gap-5 px-6 py-8 sm:px-10">
          <div>
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-widest text-default-500">
                {eyebrow}
              </p>
            ) : null}
            <div className={eyebrow ? "mt-1" : undefined}>{heading}</div>
          </div>
          {chips && chips.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {chips.map((label) => (
                <span
                  key={label}
                  className="rounded-full bg-primary/15 px-3 py-1 text-sm font-medium text-primary"
                >
                  {label}
                </span>
              ))}
            </div>
          ) : null}
          {children}
          {footer ? (
            <div className="border-t border-default-200 pt-4 text-sm leading-relaxed text-default-600">
              {footer}
            </div>
          ) : null}
        </CardBody>
      </div>
    </Card>
  );
}
