"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * Renders the Uplifted logo:
 * - If /brand/logo.svg (or .png) exists, uses that.
 * - Otherwise shows an inline SVG wordmark in brand charcoal (replace with your export when ready).
 */
export function Logo({ className = "" }: { className?: string }) {
  const [fallback, setFallback] = useState<"png" | "svg" | null>(null);

  const useInlineWordmark = fallback === "svg";

  const handleError = () => {
    if (fallback === null) setFallback("png");
    else setFallback("svg");
  };

  if (useInlineWordmark) {
    return (
      <Link href="/" className={`relative block ${className}`} aria-label="Uplifted – home">
        <svg
          viewBox="0 0 120 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-auto max-w-[180px]"
          aria-hidden
        >
          <text
            x="0"
            y="24"
            fill="#3D3938"
            fontFamily="system-ui, Segoe UI, sans-serif"
            fontSize="24"
            fontWeight="700"
            letterSpacing="-0.02em"
          >
            uplifted
          </text>
        </svg>
      </Link>
    );
  }

  const src = fallback === "png" ? "/brand/logo.png" : "/brand/logo.svg";

  return (
    <Link href="/" className={`relative block ${className}`}>
      <img
        src={src}
        alt="Uplifted"
        className="h-10 w-auto max-w-[180px] object-contain object-left"
        onError={handleError}
      />
    </Link>
  );
}
