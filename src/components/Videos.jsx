import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard,Loader } from "./";


export const Videos = ({videos,direction}) => {
	if (!videos?.length) return <Loader/>;
  return (
    <Stack direction={direction || "row"} flexWrap={"wrap"} gap={2} justifyContent={"start"} >
		
      {videos.map((item, idx) => {
		return (
			<Box key={idx}>	
				{item.id.videoId && <VideoCard video={item} />}
				{item.id.channelId && <ChannelCard channelDetail={item} />}
		</Box>
		)
	  })
	  }
    </Stack>
  );
};
