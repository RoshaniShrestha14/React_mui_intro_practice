import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";

const App = () => {
  const [count, setCount] = useState(0); // Initialize state

  return (
    <Box>
      <Typography variant="h3">{count}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          const newCount = count + 1; // Increment count
          setCount(newCount);
        }}
        style={{ marginRight: "8px" }} // Add some spacing between buttons
      >
        Increase count
      </Button>
      {/* <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          const newCount = count - 1; // Decrement count
          setCount(newCount);
        }}
      >
        Decrease count
      </Button> */}
    </Box>
  );
};

export default App;
