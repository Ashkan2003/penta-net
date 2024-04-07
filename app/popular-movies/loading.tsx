import { CircularProgress } from "@mui/material";
import React from "react";

const loading = () => {
  return (
    <div className="relative h-[50vh]">
      {/* <CircularProgress
        className="!absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2"
        color="error"
        size={50}
      /> */}
      <CircularProgress className="!absolute" size={200} color="error" />
    </div>
  );
};

export default loading;
