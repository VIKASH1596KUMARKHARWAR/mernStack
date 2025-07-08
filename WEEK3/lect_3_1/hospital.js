//next keyword(as a parameter to the function-> acting as middleware )
//ensure that if the pre-checks is done and passed then move the cursor  to the next segments  ie. to next middleware or to to computation logic

//something that is sitting between the router and the handler

const express = require("express");

const app = express();
const port = 3000;

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (!(username === "harkirat" && password === "pass")) {
    res.status(400).json({ "msg": "Something up with your inputs" })
    return
  }
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({ "msg": "Something up with your kidneys" })
    return;
  }
  
  //do something with code
  res.json({
    msg: "Your Kidney is fine !",
  });
});

app.listen(port,()=>{
  console.log(`server is running on the port ${port}`);
});

