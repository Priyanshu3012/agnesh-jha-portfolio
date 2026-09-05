"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox, { type LightboxImage } from "./Lightbox";

export default function LightboxGallery({
  images,
  className = "",
  imageClassName = "",
  captions = false,
}: {
  images: LightboxImage[];
  className?: string;
  imageClassName?: string;
  captions?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className={className}>
        {images.map((image, i) => (
          <figure key={image.src} className="m-0">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`View larger image: ${image.alt}`}
              className={`group relative block w-full overflow-hidden rounded-xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-black/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${imageClassName}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={700}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 text-sm font-medium text-transparent transition-colors group-hover:bg-black/30 group-hover:text-white">
                View
              </span>
            </button>
            {captions && (
              <figcaption className="mt-2 text-center text-sm text-muted">
                {image.alt}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </>
  );
}
