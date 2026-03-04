import { STARS_1, STARS_2, STARS_3, STARS_AFTER_1, STARS_AFTER_2, STARS_AFTER_3 } from "@/constants/stars";
import { Box } from "@mui/material";

export default function Starfield() {
  return (
    <Box
      aria-hidden
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
        background:
          "radial-gradient(ellipse 140% 55% at 50% 116%, #141414 0%, #0a0a0a 45%, #000000 100%)",
      }}
    >
      <Box sx={stars1Sx} />
      <Box sx={stars2Sx} />
      <Box sx={stars3Sx} />
    </Box>
  );
}

const animKeyframes = {
  "@keyframes animStar": {
    from: { transform: "translateY(0px)" },
    to: { transform: "translateY(-2000px)" },
  },
};

// 1px stars
const stars1Sx = {
  ...animKeyframes,
  position: "absolute",
  top: 0,
  left: 0,
  width: "1px",
  height: "1px",
  background: "transparent",
  borderRadius: "50%",
  animation: "animStar 50s linear infinite",
  boxShadow: STARS_1,
  "&::after": {
    content: '""',
    position: "absolute",
    top: "2000px",
    width: "1px",
    height: "1px",
    background: "transparent",
    borderRadius: "50%",
    boxShadow: STARS_AFTER_1,
  },
};

// 2px stars
const stars2Sx = {
  ...animKeyframes,
  position: "absolute",
  top: 0,
  left: 0,
  width: "2px",
  height: "2px",
  background: "transparent",
  borderRadius: "50%",
  animation: "animStar 100s linear infinite",
  boxShadow: STARS_2,
  "&::after": {
    content: '""',
    position: "absolute",
    top: "2000px",
    width: "2px",
    height: "2px",
    background: "transparent",
    borderRadius: "50%",
    boxShadow: STARS_AFTER_2,
  },
};

// 3px stars
const stars3Sx = {
  ...animKeyframes,
  position: "absolute",
  top: 0,
  left: 0,
  width: "3px",
  height: "3px",
  background: "transparent",
  borderRadius: "50%",
  animation: "animStar 150s linear infinite",
  boxShadow: STARS_3,
  "&::after": {
    content: '""',
    position: "absolute",
    top: "2000px",
    width: "3px",
    height: "3px",
    background: "transparent",
    borderRadius: "50%",
    boxShadow: STARS_AFTER_3,
  },
};
