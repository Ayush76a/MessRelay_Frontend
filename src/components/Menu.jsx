import React, { useState } from "react";
import { Typography, Divider, Box, TextField, IconButton } from "@mui/material";
// import { CheckCircle } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setUpdateMessMenu } from "state";

const Menu = ({ menuId, day, breakfast, lunch, snack, dinner, isEditable }) => {
    const dispatch = useDispatch();
    const BaseUrl = process.env.REACT_APP_Backend_Url; // Fetching Base URL from .env

    const dayA = day.toUpperCase();
    const breakfastA = breakfast.toUpperCase();
    const lunchA = lunch.toUpperCase();
    const snackA = snack.toUpperCase();
    const dinnerA = dinner.toUpperCase();

    // const [isEditBreakfast, setIsEditBreakfast] = useState("false");
    // const [isEditLunch, setIsEditLunch] = useState("false");
    // const [isEditSnack, setIsEditSnack] = useState("false");
    // const [isEditDinner, setIsEditDinner] = useState("false");

    const [editedBreakValue, setEditedBreakValue] = useState(breakfastA);
    const [editedLunchValue, setEditedLunchValue] = useState(lunchA);
    const [editedSnackValue, setEditedSnackValue] = useState(snackA);
    const [editedDinnerValue, setEditedDinnerValue] = useState(dinnerA);

    const handleBreakfastClick = () => {
        if (isEditable) {
            setIsEditBreakfast(true);
        }
    };
    const handleLunchClick = () => {
        if (isEditable) {
            setIsEditLunch(true);
        }
    };
    const handleSnackClick = () => {
        if (isEditable) {
            setIsEditSnack(true);
        }
    };
    const handleDinnerClick = () => {
        if (isEditable) {
            setIsEditDinner(true);
        }
    };

    // const handleBreakChange = (e) => {
    //     setEditedBreakValue(e.target.value);
    // };
    // const handleLunchChange = (e) => {
    //     setEditedLunchValue(e.target.value);
    // };
    // const handleSnackChange = (e) => {
    //     setEditedSnackValue(e.target.value);
    // };
    // const handleDinnerChange = (e) => {
    //     setEditedDinnerValue(e.target.value);
    // };

    // const handleBreakfastEdit = async () => {
    //     const response = await fetch(
    //         `${BaseUrl}/admin/menu/update/${menuId}`,
    //         {
    //             method: "PATCH",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({
    //                 type: "breakfast",
    //                 field: editedBreakValue,
    //             }),
    //         }
    //     );
    //     const updatedMenu = await response.json();
    //     dispatch(setUpdateMessMenu({ menu: updatedMenu }));
    //     setIsEditBreakfast(false);
    // };
    // const handleLunchEdit = async () => {
    //     const response = await fetch(
    //         `${BaseUrl}/admin/menu/update/${menuId}`,
    //         {
    //             method: "PATCH",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({
    //                 type: "lunch",
    //                 field: editedLunchValue,
    //             }),
    //         }
    //     );
    //     const updatedMenu = await response.json();
    //     dispatch(setUpdateMessMenu({ menu: updatedMenu }));
    //     setIsEditLunch(false);
    // };
    // const handleSnackEdit = async () => {
    //     const response = await fetch(
    //         `${BaseUrl}/admin/menu/update/${menuId}`,
    //         {
    //             method: "PATCH",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({
    //                 type: "snack",
    //                 field: editedSnackValue,
    //             }),
    //         }
    //     );
    //     const updatedMenu = await response.json();
    //     dispatch(setUpdateMessMenu({ menu: updatedMenu }));
    //     setIsEditSnack(false);
    // };
    // const handleDinnerEdit = async () => {
    //     const response = await fetch(
    //         `${BaseUrl}/admin/menu/update/${menuId}`,
    //         {
    //             method: "PATCH",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({
    //                 type: "dinner",
    //                 field: editedDinnerValue,
    //             }),
    //         }
    //     );
    //     const updatedMenu = await response.json();
    //     dispatch(setUpdateMessMenu({ menu: updatedMenu }));
    //     setIsEditDinner(false);
    // };

    return (
        <Box
            border={"1px solid"}
            borderRadius={"1rem"}
            margin={"1rem 1rem 1rem 1rem"}
        >
            <Typography
                variant="h4"
                margin={"1rem 1rem 1rem 1rem"}
                padding={"1rem 1rem 1rem 1rem"}
            >
                {dayA}
            </Typography>
            <Box width={"100%"}>
                <Divider textAlign="left">Breakfast</Divider>
                <Box
                    onClick={handleBreakfastClick}
                    sx={{
                        m: "1rem 1rem",
                        transition: "transform 0.2s",
                        ...(isEditable && {
                            "&:hover": {
                                transform: "scale(1.1)",
                            },
                        }),
                    }}
                >
                    {breakfastA}
                </Box>
                <Divider textAlign="left">Lunch</Divider>
                <Box
                    onClick={handleLunchClick}
                    sx={{
                        m: "1rem 1rem",
                        transition: "transform 0.2s",
                        ...(isEditable && {
                            "&:hover": {
                                transform: "scale(1.1)",
                            },
                        }),
                    }}
                >
                    {lunchA}
                </Box>
                <Divider textAlign="left">Snack</Divider>
                <Box
                    onClick={handleSnackClick}
                    sx={{
                        m: "1rem 1rem",
                        transition: "transform 0.2s",
                        ...(isEditable && {
                            "&:hover": {
                                transform: "scale(1.1)",
                            },
                        }),
                    }}
                >
                    {snackA}
                </Box>
                <Divider textAlign="left">Dinner</Divider>
                <Box
                    onClick={handleDinnerClick}
                    sx={{
                        m: "1rem 1rem",
                        transition: "transform 0.2s",
                        ...(isEditable && {
                            "&:hover": {
                                transform: "scale(1.1)",
                            },
                        }),
                    }}
                >
                    {dinnerA}
                </Box>
            </Box>
        </Box>
    );
};

export default Menu;
