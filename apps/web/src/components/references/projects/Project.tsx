import { iconPaths } from "@/components/footer/socialLinks/constants";
import { GlassySurface } from "@/components/ui";
import SafeImage from "@/components/ui/SafeImage";
import { getImageUrl } from "@/utils/getImageUrl";
import { Box, Typography } from "@mui/material";
import LinkIcon from "./LinkIcon";

type ProjectProps = {
  name: string;
  image_url: string | null;
};

const icons = {
  spotify: iconPaths.spotify,
  deezer: iconPaths.deezer,
  appleMusic: iconPaths.appleMusic,
  soundcloud: iconPaths.soundcloud,
  youtube: iconPaths.youtube,
};

export default function Projects({ name, image_url }: ProjectProps) {
  const imageSrc = getImageUrl(image_url);

  return (
    <GlassySurface sx={surfaceSx}>
      <Box sx={imageWrapperSx}>
        <SafeImage
          src={imageSrc}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box sx={nameLinksWrapperSx}>
        <Box sx={iconsWrapperSx}>
          {Object.entries(icons).map(([key, icon]) => (
            <LinkIcon key={key} icon={icon} />
          ))}
        </Box>
        <Typography sx={projectNameSx}>{name}</Typography>
      </Box>
    </GlassySurface>
  );
}

const surfaceSx = {
  height: "100%",
  width: "100%",
  p: 3,

  display: "flex",
  flexDirection: "row",
};

const iconsWrapperSx = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  gap: 1,
  my: "auto",
  pt: 2,
};

const projectNameSx = {
  fontSize: "1.4rem",
  fontWeight: "bold",
};

const nameLinksWrapperSx = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  mt: "auto",
  ml: 2,
  mb: 1,
};

const imageWrapperSx = {
  flexShrink: 0,
  overflow: "hidden",
  borderRadius: "4px",
  position: "relative",
  height: "180px",
  aspectRatio: "1 / 1",
};
