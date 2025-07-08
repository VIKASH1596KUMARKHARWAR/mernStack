import express from "express";

const app = express();

let numberofRequest = 0;
let totaltime = 0;

// this will not be taking the middleware as this is above the the app.use....statements for the middleware
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Middleware to count requests
app.use((req, res, next) => {
  numberofRequest++;
  next();
});

// Middleware to calculate time taken by each request
app.use((req, res, next) => {
  const startTime = Date.now();

  res.on("finish", () => {
    const endTime = Date.now();
    const timeTaken = endTime - startTime;
    totaltime += timeTaken; // Accumulate total time
    console.log(`Request #${numberofRequest} took ${timeTaken} ms`);
  });

  next();
});

// Endpoint to display average time - but it should be the first one end point to measur the thing good the other one is the one that is not good as the count willl be specific to that routes only
app.get("/stats", (req, res) => {
  const averageTime =
    numberofRequest > 0 ? (totaltime / numberofRequest).toFixed(2) : 0;
  res.json({
    averageTime: `${averageTime}ms`,
    totalRequests: numberofRequest,
  });
});

app.post("/health-checkup", (req, res) => {
  res.json({
    msg: "hi there!!",
  });
});

app.listen(3000, () => {
  console.log("Express server initialized on port 3000");
});
