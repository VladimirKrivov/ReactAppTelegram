import React from "react";
import "../../scss/index.scss"
import {Button} from "@mui/material";

export const PrimaryButton = ({ children, ...props }) => {
    return (
        <Button
            className="buttonOrder"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            {...props}
            sx={{
                textDecoration: `none`,
                backgroundColor: `#FF6900`,
                borderRadius: 30,
                boxShadow: `0px 14px 30px rgba(0, 0, 0, 0.05)`,
            }}
        >
            {children}
        </Button>
    );
};