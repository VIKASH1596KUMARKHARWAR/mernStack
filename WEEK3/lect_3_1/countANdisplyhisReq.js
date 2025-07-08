import express from "express";

const app = express();
let requestCount = 0;

// Array to store route details and hit history
const routes = [
  { method: "GET", path: "/" },
  { method: "GET", path: "/user" },
  { method: "POST", path: "/user" },
  { method: "GET", path: "/requestCount" },
];

let requestHistory = []; // Array to track the requests

// Global middleware to count requests and track history
app.use((req, res, next) => {
  requestCount++; // Increment the global request count
  // Record the request method and path
  requestHistory.push({
    method: req.method,
    path: req.originalUrl,
    timestamp: new Date(),
  });
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

// Endpoint to list all available routes
app.get("/endpoints", (req, res) => {
  const endpointList = routes.map((route) => `${route.method} ${route.path}`);
  res.status(200).json({ endpoints: endpointList });
});

// Endpoint to show the request history
app.get("/requestHistory", (req, res) => {
  res.status(200).json({ requestHistory });
});

app.listen(3000, () => {
  console.log("Express server initialized on port 3000");
});
