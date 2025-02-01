import React, { useState, useEffect } from "react";
import { Typography, Box, Button, TextField } from "@mui/material";

const App = () => {
  const [count, setCount] = useState(0); // Initialize state for count
  const [name, setName] = useState(""); // Initialize state for name
  const [quote, setQuote] = useState(""); // Initialize state for random quote

  // Load saved data from local storage
  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    const savedName = localStorage.getItem("name");
    if (savedCount) setCount(Number(savedCount));
    if (savedName) setName(savedName);
  }, []);

  // Save data to local storage whenever the count or name changes
  useEffect(() => {
    localStorage.setItem("count", count);
    localStorage.setItem("name", name);
  }, [count, name]);

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

  const handleGetQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content); // Set random quote
  };

  const getBackgroundColor = () => {
    if (count > 0) return "lightgreen";
    if (count < 0) return "lightcoral";
    return "lightgray";
  };

  return (
    <Box style={{ backgroundColor: getBackgroundColor(), padding: "16px" }}>
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

      <Typography variant="h6" style={{ marginBottom: "16px" }}>
        {count > 10
          ? "High Count!"
          : count < -10
          ? "Low Count!"
          : "Normal Count"}
      </Typography>

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

      <Button
        variant="contained"
        color="info"
        onClick={handleGetQuote}
        style={{ marginTop: "16px", marginBottom: "16px" }}
      >
        Get a Random Quote
      </Button>

      {quote && (
        <Typography variant="body1" style={{ fontStyle: "italic" }}>
          "{quote}"
        </Typography>
      )}
    </Box>
  );
};

export default App;
