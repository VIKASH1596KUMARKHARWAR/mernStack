import express from "express";

const app = express();

let numberofRequest = 0;

app.use(calculateRequest);
function calculateRequest(req, res, next) {
  numberofRequest++;
  console.log(numberofRequest);
  next();
}

app.post("/health-checUp", function (req, res) {
  res.json({
    msg: "hi there!!",
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Express server initialized");
});
