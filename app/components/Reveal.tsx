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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,

        transform: visible
          ? "translate3d(0, 0, 0)"
          : "translate3d(0, 8px, 0)",

        transitionProperty: "opacity, transform",

        transitionDuration: "1200ms",

        transitionTimingFunction:
          "cubic-bezier(0.16, 1, 0.3, 1)",

        transitionDelay: `${delay}ms`,

        willChange: visible
          ? "auto"
          : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}