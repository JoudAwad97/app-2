const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Home page of package 2!");
});

app.get("/dummy", (req, res) => {
  res.json({ message: "Dummy response from package 2" });
});

app.get("/call-endpoint", async (req, res) => {
  try {
    const response = await axios.get("http://app-1-active.retail-store");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to call endpoint" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
