import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/styles";

const VideoWithVoiceControl = ({ src, controls, width, borderRadius, mx, my ,isPlaying}) => {
  const { shape, customShadows } = useTheme();
  const videoRef = useRef();
 
  if(isPlaying){
    videoRef.current?.play()
  }else{
    videoRef.current?.pause()
  }

  useEffect(() => {
    videoRef.current?.load();
    console.dir(videoRef.current)
  }, [src]);
  return (
    <Box sx={{ width: width || 240, my: my || 2, mx: mx || 0 }}>
      <video
        ref={videoRef}
        width="100%"
        loop
        controls={controls || false}
        style={{
          borderRadius: borderRadius || shape.borderRadiusMd,
          boxShadow: customShadows.z1,
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </Box>
  );
};

export default VideoWithVoiceControl;