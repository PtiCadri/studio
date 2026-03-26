import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

import { rows } from "@/constants/tarifs";

export default function GrilleTarifs() {
    return (
        <TableContainer component={Paper} sx={tableContainerSx}>
            <Table sx={tableSx}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={headerCellSx}>
                            Prestations
                        </TableCell>
                        <TableCell sx={headerCellSx}>
                            Tarifs
                        </TableCell>
                        <TableCell sx={headerCellSx}>
                            Description
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.prestation}>
                            <TableCell sx={prestationCellSx}>
                                {row.prestation}
                            </TableCell>

                            <TableCell sx={bodyCellSx}>
                                {row.tarif}
                            </TableCell>

                            <TableCell sx={descriptionCellSx}>
                                {row.description}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const tableContainerSx = {
    mt: "70px",
    mb: "70px",
    maxWidth: "950px",
    borderRadius: "4px",
    boxShadow: "none",
    backgroundColor: "transparent",
};

const tableSx = {
    tableLayout: "fixed",
    borderCollapse: "collapse",
    border: "1px solid",
    borderColor: "divider",

    "& .MuiTableCell-root": {
        border: "1px solid",
        borderColor: "divider",
        textAlign: "center",
        verticalAlign: "middle",
        fontFamily: "inherit",
        px: 2,
    },
};

const headerCellSx = {
    fontWeight: 500,
    backgroundColor: "rgba(255,255,255,0.05)",
    fontSize: "1.5rem",
    lineHeight: 1.1,
    py: 1.5,
};

const bodyCellSx = {
    backgroundColor: "rgba(0,0,0,0.4)",
    fontWeight: 500,
    fontSize: "1.1rem",
    color: "text.secondary",
    lineHeight: 1.4,
    py: 4,
    whiteSpace: "pre-line",
};

const prestationCellSx = {
    ...bodyCellSx,
    fontStyle: "italic",
};

const descriptionCellSx = {
    ...bodyCellSx,
    whiteSpace: "pre-line",
};
