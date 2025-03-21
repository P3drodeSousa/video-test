"use client";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

type Props = {
  src: string;
};

const Video = ({ src }: Props) => {
  return (
    <ReactPlayer
      id="active"
      playing
      loop
      muted
      playsinline
      url={src}
      width="100%"
      height="100%"
      config={{
        file: {
          attributes: {
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
            },
          },
        },
      }}
    />
  );
};

export default Video;
