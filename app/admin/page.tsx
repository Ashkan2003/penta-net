// "use client";
import React, { useState } from "react";
import Video from "next-video";
import getStarted from "/videos/get-started.mp4";
import axios from "axios";
export default async function Page() {
  let x;
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/tv/1399/videos",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmQyYTVjM2ZjMDU2Mzc3MDYxZjE5NTEzODY5M2QzOCIsInN1YiI6IjY2MDE4MmZhNzcwNzAwMDE3YzBmNjgxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5d5dJnztUQ_IFITVtIJxjlae6nTyUu9NVJV1ikveXJc",
    },
  };

  await axios
    .request(options)
    .then(function (response) {
      x = response.data.results
      // console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
    console.log(x)
  return (
    <div>
      <Video src={getStarted} style={{ width: "50rem" }} />
      {/* <Video src={x!.at(1)} style={{ width: "50rem" }} /> */}
    </div>
  );
}
