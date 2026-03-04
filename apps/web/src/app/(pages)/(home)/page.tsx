"use client";

import { Box, Typography } from "@mui/material";
import { NAVBAR_HEIGHT } from "@/constants/layout";
import FullPageSnapLoop from "@/components/scroll/FullPageSnapLoop";
import HomeFrame1 from "@/components/home/frames/HomeFrame1";
import HomeFrame2 from "@/components/home/frames/HomeFrame2";
import HomeFrame3 from "@/components/home/frames/HomeFrame3";

export default function HomePage() {
  const frames = [
    <HomeFrame1 key="1" />,
    <HomeFrame2 key="2" />,
    <HomeFrame3 key="3" />,
  ];

  return (
    <FullPageSnapLoop
      frames={frames}
      height={`calc(100vh - ${NAVBAR_HEIGHT}px)`}
      fadeMs={140}
    />
  );
}
