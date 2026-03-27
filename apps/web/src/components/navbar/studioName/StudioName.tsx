"use client";

import { Box, ButtonBase } from "@mui/material";
import Link from "next/link";

import { nhaDesIcons, recordsIcon } from "./studioName.constants";
import { nhadesWrapperSx, studioNameBtnSx } from "./studioName.styles";

import StudioNamePart from "./StudioNamePart";

export default function NhaDesRecords() {
  return (
    <ButtonBase
      component={Link}
      href="/"
      aria-label="Vers la page d'Accueil de Nhadès Records"
      disableTouchRipple
      sx={studioNameBtnSx}
    >
      <Box sx={nhadesWrapperSx}>
        {nhaDesIcons.map((icon) => (
          <StudioNamePart key={icon.key} icon={icon} />
        ))}
      </Box>
      <StudioNamePart key={recordsIcon.key} icon={recordsIcon} />
    </ButtonBase>
  );
}
