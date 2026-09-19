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

    let frame: number | null = null;

    const calculate = () => {
      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight;

      /*
       * The element begins appearing while it is still
       * near the bottom of the viewport.
       *
       * It is completely visible well before reaching
       * the middle of the screen.
       */
      const start = viewport * 1.02;
      const finish = viewport * 0.82;

      let next =
        (start - rect.top) /
        (start - finish);

      /*
       * Small stagger without turning it into
       * a delayed canned animation.
       */
      const stagger = Math.min(
        delay / 2500,
        0.08
      );

      next =
        (next - stagger) /
        (1 - stagger);

      next = Math.max(
        0,
        Math.min(1, next)
      );

      /*
       * Smoothstep easing.
       *
       * This removes the linear / mechanical feeling
       * while still keeping the animation connected
       * to scrolling.
       */
      const smooth =
        next *
        next *
        (3 - 2 * next);

      setProgress(smooth);

      frame = null;
    };

    const update = () => {
      if (frame !== null) return;

      frame =
        window.requestAnimationFrame(
          calculate
        );
    };

    calculate();

    window.addEventListener(
      "scroll",
      update,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      update
    );

    return () => {
      window.removeEventListener(
        "scroll",
        update
      );

      window.removeEventListener(
        "resize",
        update
      );

      if (frame !== null) {
        window.cancelAnimationFrame(
          frame
        );
      }
    };
  }, [delay]);

  /*
   * VERY small movement.
   *
   * The fade should be what you notice,
   * not an object sliding upward.
   */
  const y = (1 - progress) * 6;

  /*
   * Tiny scale change adds softness without
   * looking like the cards are zooming.
   */
  const scale =
    0.997 +
    progress * 0.003;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: progress,

        transform: `
          translate3d(
            0,
            ${y}px,
            0
          )
          scale(${scale})
        `,

        transformOrigin: "center center",

        willChange:
          "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}