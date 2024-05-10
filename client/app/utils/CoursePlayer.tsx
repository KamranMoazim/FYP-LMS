import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from 'react-player/youtube'

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: "",
  });

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:8000/api/v1/getVdoCipherOTP", {
  //       videoId: videoUrl,
  //     })
  //     .then((res) => {
  //       setVideoData(res.data);
  //     });
  // }, [videoUrl]);

  console.log(videoUrl);

  return (
    // <div style={{position:"relative",paddingTop:"56.25%",overflow:"hidden"}}>
    <div>
      {/* {videoData.otp && videoData.playbackInfo !== "" && (
        <iframe
          src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=Ub9OiZXIOeUXH0Nv`}
          // src={videoUrl}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0
          }}
          allowFullScreen={true}
          allow="encrypted-media"
        ></iframe>
      )} */}
      {/* <video controls={true}>
        <source src={videoUrl} type="video/mp4" />
    </video> */}
    {/* <ReactPlayer  url={videoUrl} /> */}
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={videoUrl}
          width='100%'
          height='100%'
        />
      </div>
    </div>
  );
};

export default CoursePlayer;
