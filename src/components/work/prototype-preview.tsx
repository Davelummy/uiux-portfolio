"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function PrototypePreview({ title, embedUrl, imageUrl }: {
  title: string;
  embedUrl: string;
  imageUrl: string | null;
}) {
  const [showEmbed, setShowEmbed] = useState(false);
  const prototypeUrl = new URL(embedUrl);
  prototypeUrl.hostname = "www.figma.com";
  prototypeUrl.searchParams.delete("embed-host");

  return (
    <div className="card mt-4 overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-5 p-6">
        <div>
          <h3 className="text-2xl font-semibold">Explore the prototype</h3>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Open the interactive design in Figma, or load it here when you’re ready.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={prototypeUrl.toString()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Open prototype in Figma
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
          <button type="button" className="btn btn-ghost" aria-expanded={showEmbed} aria-controls="interactive-prototype" onClick={() => setShowEmbed(!showEmbed)}>
            {showEmbed ? "Close embedded preview" : "Load prototype here"}
          </button>
        </div>
      </div>
      <div id="interactive-prototype" className="border-t border-border">
        {showEmbed ? (
          <>
            <p className="bg-white px-6 py-3 text-sm text-muted" role="status">
              Figma loads below. You can open the prototype directly using the link above at any time.
            </p>
            <iframe title={`${title} interactive Figma prototype`} src={embedUrl} className="aspect-video min-h-[420px] w-full bg-[#f1eee9]" allowFullScreen />
          </>
        ) : imageUrl ? (
          <div className="relative aspect-[16/10] max-h-[560px] bg-[#f1eee9]">
            <Image src={imageUrl} alt={`${title} static design preview`} fill sizes="(max-width: 1152px) calc(100vw - 48px), 1104px" className="object-contain" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
