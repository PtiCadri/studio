import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button } from "@mui/material";

import { expandIconSx, mainBtnSx, pageNameSx } from "./styles";

type NavLinkProps = {
  page: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  isOpen: boolean;
};

export default function NavLink({ page, onClick, isOpen }: NavLinkProps) {
  return (
    <Button onClick={onClick} disableRipple sx={mainBtnSx}>
      <Box component="span" sx={pageNameSx}>
        {page}
      </Box>

      <ExpandMoreIcon fontSize="medium" sx={expandIconSx(isOpen)} />
    </Button>
  );
}
