"use client";

import {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let rafId: number | null = null;

    const update = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Starts appearing near the bottom of the screen.
      const revealStart = viewportHeight * 0.96;

      // Fully visible once it reaches this point.
      const revealEnd = viewportHeight * 0.76;

      let rawProgress =
        (revealStart - rect.top) /
        (revealStart - revealEnd);

      rawProgress = Math.max(
        0,
        Math.min(1, rawProgress)
      );

      // Smoothstep easing.
      const eased =
        rawProgress *
        rawProgress *
        (3 - 2 * rawProgress);

      setProgress(eased);

      rafId = null;
    };

    const requestUpdate = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(update);
    };

    update();

    window.addEventListener(
      "scroll",
      requestUpdate,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      requestUpdate
    );

    return () => {
      window.removeEventListener(
        "scroll",
        requestUpdate
      );

      window.removeEventListener(
        "resize",
        requestUpdate
      );

      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  /*
   * Keeps the stagger on product cards,
   * but makes it much smaller than before.
   */
  const staggerAmount =
    delay > 0
      ? Math.min(delay / 1800, 0.12)
      : 0;

  const adjustedProgress = Math.max(
    0,
    Math.min(
      1,
      (progress - staggerAmount) /
        (1 - staggerAmount)
    )
  );

  /*
   * Very small movement.
   * Opacity is doing most of the visual work.
   */
  const translateY =
    (1 - adjustedProgress) * 10;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: adjustedProgress,

        transform: `
          translate3d(
            0,
            ${translateY}px,
            0
          )
        `,

        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}