import React from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  textClassName?: string;
  variant?: "light" | "dark" | "custom";
  to?: string;
}

export function BrandLogo({
  className,
  textClassName,
  variant = "light",
  to = "/",
}: BrandLogoProps) {
  const textColor =
    variant === "dark"
      ? "text-[#171717]"
      : variant === "custom"
        ? ""
        : "text-white";

  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center group transition-all duration-300 hover:opacity-90 select-none",
        className
      )}
    >
      <span
        className={cn(
          "font-display text-xl sm:text-2xl md:text-[25px] font-normal uppercase tracking-[0.34em] transition-colors leading-none",
          textColor,
          textClassName
        )}
      >
        CMC FILMS
      </span>
    </Link>
  );
}
