import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from "react-redux";

function LoadingComponent() {
  const { isLoading }: any = useSelector<any>((state) => state.loading)
  const [loadingState, setLoadingState] = useState<boolean>(false)

  useEffect(() => {
    console.log(isLoading)
    setLoadingState(isLoading)
  }, [isLoading])

  return (
    <>
      {loadingState && (
        <Box sx={{ display: "flex", width: "100%", height: "100vh", position: "fixed", zIndex: 10 }}>
          <CircularProgress sx={{ color: "#002F4D", margin: "auto" }} size={80}/>
        </Box>
      )}
    </>
  )
}

export default LoadingComponent
