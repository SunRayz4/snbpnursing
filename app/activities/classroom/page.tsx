"use client";

import React from "react";

const Page = () => {
  const videoSrc = `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/videos/classroom.mp4`;

  return (
    <div className="container my-4 text-center">
      <h1 className="mb-4">Classroom Activities</h1>
      <h5 className="mb-4 text-secondary">Micro-Teaching</h5>

      {/* Video */}
      <video
        src={videoSrc}
        controls
        autoPlay
        muted
        style={{
          aspectRatio: "9 / 16",
          width: "100%",
          maxWidth: "400px",
          display: "block",
          margin: "0 auto",
        }}
      />
    </div>
  );
};

export default Page;
