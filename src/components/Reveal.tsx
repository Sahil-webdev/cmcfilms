import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * High-performance IntersectionObserver hook.
 * Replaces expensive scroll event listeners with off-main-thread browser observation.
 */
export function useInView<T extends HTMLElement>(threshold = 0.15, rootMargin = "0px 0px -50px 0px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback if IntersectionObserver is not available
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
};

/** Fade + rise on scroll entry using IntersectionObserver. */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", inView && "reveal-in", className)}
    >
      {children}
    </Tag>
  );
}

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onClick?: () => void;
};

/** Clip-path mask reveal with slow hover zoom. */
export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  width,
  height,
  priority,
  onClick,
}: ImageRevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref}
      onClick={onClick}
      style={{
        clipPath: inView ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
        transition: "clip-path 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={cn(
        "hover-zoom bg-beige relative overflow-hidden group cursor-pointer",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn(
          "h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105",
          imgClassName
        )}
      />
      <div className="absolute inset-0 bg-cinema/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
        <span className="label-xs text-ivory bg-cinema/70 px-4 py-2 rounded-full border border-ivory/20 backdrop-blur-md translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          View Image ↗
        </span>
      </div>
    </div>
  );
}

/** Word-by-word staggered heading reveal. */
export function TextReveal({
  text,
  className,
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: ElementType;
}) {
  const { ref, inView } = useInView<HTMLHeadingElement>(0.1);
  return (
    <Tag ref={ref} className={className}>
      {text.split("\n").map((line, li) => (
        <span key={li} className="block overflow-hidden">
          <span
            className="inline-block transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transitionDelay: `${li * 90}ms`,
              transform: inView ? "none" : "translateY(105%)",
              opacity: inView ? 1 : 0,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}

export function SectionLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="rule-gold w-10 shrink-0" />
      <span className="label-xs text-gold">{children}</span>
    </div>
  );
}
