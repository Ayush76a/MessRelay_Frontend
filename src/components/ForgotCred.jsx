import { Box, InputBase, Button, Typography, Alert } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const ForgotCred = () => {
    const navigate = useNavigate();
    const BaseUrl = process.env.REACT_APP_Backend_Url; // Fetching Base URL from .env

    const [email, setEmail] = useState("");
    const [isSentForgot, setIsSentForgot] = useState(false);

    const handleForgot = async () => {
        const response = await fetch(`${BaseUrl}/auth/forgot`, { // Using BaseUrl dynamically
            method: "POST",
            headers: { "Content-Type": "application/json" }, // Added headers for JSON
            body: JSON.stringify({ email: email }),
        });
        const sentResponse = await response.json();
        if (sentResponse) {
            setIsSentForgot(true);
        }
    };

    return (
        <>
            <Box ml={"30%"} mt={"20%"}>
                <Header title="FORGOT PASSWORD" />
                <InputBase
                    placeholder="Enter your registered email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    sx={{
                        width: "100%",
                        borderRadius: "2rem",
                        padding: "1rem 2rem",
                    }}
                />
                <Button
                    disabled={!email || isSentForgot}
                    onClick={handleForgot}
                >
                    SUBMIT
                </Button>
                {isSentForgot && (
                    <>
                        <Alert severity="success">
                            Check your mail for password reset link
                        </Alert>
                        <Typography
                            onClick={() => navigate("/")}
                            sx={{
                                textDecoration: "underline",
                                "&:hover": {
                                    cursor: "pointer",
                                    color: "primary",
                                },
                            }}
                        >
                            GO TO LOGIN PAGE
                        </Typography>
                    </>
                )}
            </Box>
        </>
    );
};

export default ForgotCred;
