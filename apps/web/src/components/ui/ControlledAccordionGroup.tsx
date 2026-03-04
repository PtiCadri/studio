import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  SxProps,
  Theme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export type AccordionItemData = {
  id: string;
  summary: React.ReactNode;
  details: React.ReactNode;
  disabled?: boolean;
};

type Props = {
  items: AccordionItemData[];
  expandedId: string | false;
  onExpandedIdChange: (next: string | false) => void;
  sx?: SxProps<Theme>;
};

function makeHandleChange(
  id: string,
  onExpandedIdChange: Props["onExpandedIdChange"],
) {
  return (_: React.SyntheticEvent, isExpanded: boolean) => {
    onExpandedIdChange(isExpanded ? id : false);
  };
}

export default function ControlledAccordionGroup(props: Props) {
  const { items, expandedId, onExpandedIdChange, sx } = props;

  return (
    <div>
      {items.map((it) => (
        <Accordion
          key={it.id}
          expanded={expandedId === it.id}
          onChange={makeHandleChange(it.id, onExpandedIdChange)}
          disabled={it.disabled}
          sx={sx}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {it.summary}
          </AccordionSummary>
          <AccordionDetails>{it.details}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
