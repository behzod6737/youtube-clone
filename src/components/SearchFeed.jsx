import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";


export const SearchFeed = () => {
  const [videos, setvideos] = useState([]);
  const {searchTerm} = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
	.then((data) =>
      setvideos(data.items)
    );
  }, [searchTerm]);

  return (
	<Box p={2} minHeight="95vh">
	<Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
	  Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
	</Typography>
	<Box display="flex">
	  <Box sx={{ mr: { sm: '100px' } }}/>
	  {<Videos videos={videos} />}
	</Box>
  </Box>
  );
};
