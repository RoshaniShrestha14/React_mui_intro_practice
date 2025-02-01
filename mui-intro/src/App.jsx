import React, { useState } from "react";
import { Typography, Box, Button, TextField } from "@mui/material";

const App = () => {
  const [count, setCount] = useState(0); // Initialize state for count
  const [name, setName] = useState(""); // Initialize state for name

  const handleIncrease = () => {
    const newCount = count + 1; // Increment count
    setCount(newCount);
  };

  const handleDecrease = () => {
    const newCount = count - 1; // Decrement count
    setCount(newCount);
  };

  const handleReset = () => {
    setCount(0); // Reset count to 0
  };

  const handleNameChange = (event) => {
    setName(event.target.value); // Update name based on input
  };

  return (
    <Box>
      <Typography variant="h3">{count}</Typography>
      <Typography variant="body1">
        {count % 2 === 0 ? "Even" : "Odd"} Count
      </Typography>

      <TextField
        label="Enter your name"
        variant="outlined"
        value={name}
        onChange={handleNameChange}
        fullWidth
        style={{ marginBottom: "16px", marginTop: "16px" }}
      />

      <Typography variant="h6">Hello, {name ? name : "Guest"}!</Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={handleIncrease}
        style={{ marginRight: "8px" }}
      >
        Increase count
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleDecrease}
        style={{ marginRight: "8px" }}
      >
        Decrease count
      </Button>
      <Button variant="outlined" color="default" onClick={handleReset}>
        Reset count
      </Button>
    </Box>
  );
};

export default App;
