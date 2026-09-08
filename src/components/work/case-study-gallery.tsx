"use client";

import Image from "next/image";
import { m } from "framer-motion";
import type { ProjectMedia } from "@/lib/projects";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
} as const;

const gallery = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
} as const;

export function CaseStudyGallery({ gallery: media }: { gallery: ProjectMedia[] }) {
  return (
    <m.div
      className="mt-4 grid gap-6 md:grid-cols-2"
      variants={gallery}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {media.map((item) => (
        <m.figure
          key={item.src}
          variants={reveal}
          className={`media-stage media-${item.presentation ?? "capture"}`}
        >
          <div className="media-stage-surface">
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="media-stage-image"
            />
          </div>
          <figcaption className="media-stage-caption">
            <span className="media-stage-kicker">{item.label ?? "Project evidence"}</span>
            {item.caption}
          </figcaption>
        </m.figure>
      ))}
    </m.div>
  );
}
