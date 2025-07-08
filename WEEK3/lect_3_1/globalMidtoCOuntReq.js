import express from "express";

const app = express();
let requestCount = 0;

// Global middleware to count requests
app.use((req, res, next) => {
  requestCount++; // Increment the global request count
  next(); // Pass control to the next middleware or route
});

app.get("/", function (req, res) {
  res.send("Hello dear");
});
app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});
app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/requestCount", function (req, res) {
  res.status(200).json({ requestCount }); // Respond with the current request count
});

app.listen(3000, () => {
  console.log("Express server initialized on port 3000");
});
