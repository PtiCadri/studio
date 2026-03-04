"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box } from "@mui/material";

type Props = {
  frames: React.ReactNode[];
  height: string;       // e.g. `calc(100vh - 80px)`
  fadeMs?: number;      // 120–170 feels good
};

function getHeightPx(el: HTMLElement): number {
  return Math.round(el.getBoundingClientRect().height);
}

export default function FullPageSnapLoop({
  frames,
  height,
  fadeMs = 140,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isFading, setIsFading] = useState(false);

  const frameCount = useMemo(() => frames.length, [frames.length]);

  const teleport = (targetIndex: number) => {
    const el = containerRef.current;
    if (!el) return;

    const h = getHeightPx(el);
    const top = h * targetIndex;

    setIsFading(true);

    window.setTimeout(() => {
      const prevSnap = el.style.scrollSnapType;
      const prevBehavior = el.style.scrollBehavior;

      el.style.scrollSnapType = "none";
      el.style.scrollBehavior = "auto";

      el.scrollTo({ top, behavior: "auto" });

      // restore immediately
      el.style.scrollSnapType = prevSnap || "y mandatory";
      el.style.scrollBehavior = prevBehavior || "smooth";

      window.setTimeout(() => {
        setIsFading(false);
      }, fadeMs);
    }, fadeMs);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el || frameCount === 0) return;

    // Desktop: intercept wheel only at edges
    const onWheel = (e: WheelEvent) => {
      const h = getHeightPx(el);
      if (h <= 0) return;

      const idx = Math.round(el.scrollTop / h);
      const goingDown = e.deltaY > 0;

      const isLast = idx === frameCount - 1;
      const isFirst = idx === 0;

      // Only prevent default when trying to go past edges
      if (goingDown && isLast) {
        e.preventDefault();
        teleport(0);
      } else if (!goingDown && isFirst) {
        e.preventDefault();
        teleport(frameCount - 1);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel as any);
  }, [frameCount, fadeMs]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || frameCount === 0) return;

    // Mobile: detect swipe direction at edges
    let startY = 0;

    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0]?.clientY ?? 0;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const endY = e.changedTouches[0]?.clientY ?? 0;
      const dy = endY - startY; // positive = swipe down, negative = swipe up
      if (Math.abs(dy) < 30) return; // ignore tiny movements

      const h = getHeightPx(el);
      const idx = Math.round(el.scrollTop / h);

      const isLast = idx === frameCount - 1;
      const isFirst = idx === 0;

      // Swipe up (dy < 0) means user wants to go down
      if (dy < 0 && isLast) {
        teleport(0);
      }

      // Swipe down (dy > 0) means user wants to go up
      if (dy > 0 && isFirst) {
        teleport(frameCount - 1);
      }
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [frameCount, fadeMs]);

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        ref={containerRef}
        sx={{
          height,
          overflowY: "auto",
          overflowX: "hidden",
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          // Optional: reduces iOS rubber-band visuals
          overscrollBehavior: "contain",
        }}
      >
        {frames.map((node, i) => (
          <Box
            key={i}
            sx={{
              height: "100%",
              scrollSnapAlign: "start",
            }}
          >
            {node}
          </Box>
        ))}
      </Box>

      {/* Fade overlay */}
      <Box
        sx={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          bgcolor: "background.default",
          opacity: isFading ? 1 : 0,
          transition: `opacity ${fadeMs}ms ease`,
        }}
      />
    </Box>
  );
}