import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HardwareDetails from "./HardwareDetails";
import type { HardwareItem } from "./types";

type Props = {
  items: HardwareItem[];
};

function makeOnChange(
  id: string,
  setExpandedId: React.Dispatch<React.SetStateAction<string | false>>,
) {
  return (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedId(isExpanded ? id : false);
  };
}

export default function StudioHardwareAccordion(props: Props) {
  const { items } = props;
  const [expandedId, setExpandedId] = React.useState<string | false>(false);

  return (
    <Box sx={{ mx: 4 }}>
      {items.map((it) => (
        <Accordion
          key={it.id}
          expanded={expandedId === it.id}
          onChange={makeOnChange(it.id, setExpandedId)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color="text.primary">
              {it.title}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <HardwareDetails
              imageSrc={it.imageSrc}
              imageAlt={it.imageAlt}
              description={it.description}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
