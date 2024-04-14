import { CircularProgress } from "@mui/material";

const FullPageLoading = () => {
  return (
    <div className="h-[90vh] flex items-center justify-center">
      <CircularProgress color="error" size={50} />
    </div>
  );
};

export default FullPageLoading;
