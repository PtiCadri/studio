import { TextField } from "@mui/material";

interface UserDataFieldProps {
    label: string;
    type: string;
    name: string;
    required?: boolean;
};

export default function UserDataField({
    label,
    type,
    name,
    required = false,
}: UserDataFieldProps ) {
    return (
        <TextField
                label={label}
                type={type}
                variant="outlined"
                fullWidth
                required={required}
                name={name}   
                sx={fieldSx}             
            />
    );
}

const fieldSx = {
    mb: "20px",
};
