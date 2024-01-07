import React from "react";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import logo from '../assets/images/youtube.svg'
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      p={2}
      sx={{
        position: "sticky",
		zIndex:100,
        background: "#000",
        top: "0",
        justifyContent: "space-between",
		color: 'white',
      }}
    >
		<Link to={'/'} style={{display: 'flex', alignItems:'center', }}> 
	  		<img src={logo} alt="logo"  height={60} width={60}  />
		</Link>
		<SearchBar/>
	</Stack>
  );
};
