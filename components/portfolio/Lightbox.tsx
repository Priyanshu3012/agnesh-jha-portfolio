"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export type LightboxImage = {
  src: string;
  alt: string;
};

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const current = images[index];
  const hasMultiple = images.length > 1;

  useEffect(() => {
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowRight" && hasMultiple) {
        onNavigate((index + 1) % images.length);
      } else if (event.key === "ArrowLeft" && hasMultiple) {
        onNavigate((index - 1 + images.length) % images.length);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [index, images.length, hasMultiple, onClose, onNavigate]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        <span aria-hidden>✕</span>
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + images.length) % images.length);
            }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-accent hover:text-accent sm:left-6"
          >
            <span aria-hidden>‹</span>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % images.length);
            }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-accent hover:text-accent sm:right-6"
          >
            <span aria-hidden>›</span>
          </button>
        </>
      )}

      <div
        className="relative flex max-h-[85vh] w-full max-w-4xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[75vh] w-full overflow-auto rounded-xl border border-border bg-surface">
          <Image
            src={current.src}
            alt={current.alt}
            width={1600}
            height={1200}
            sizes="(max-width: 768px) 100vw, 900px"
            className="h-auto w-full object-contain"
          />
        </div>
        <p className="mt-4 text-center text-sm text-muted">
          {current.alt}
          {hasMultiple && (
            <span className="ml-2 text-muted/70">
              ({index + 1}/{images.length})
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
