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
    <video
      loop
      muted
      autoPlay
      preload="auto"
      playsInline
      src={src}
      className="object-cover size-full will-change-auto"
    >
      <source type="video/mp4" src={src} />
      Your browser does not support the video element.
    </video>
  );
};

export default Video;
