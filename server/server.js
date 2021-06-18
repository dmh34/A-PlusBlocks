const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = require("./app");
const passport = require("passport");





if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// app.post('/login',(req,res,next)=>{
//   passport.authenticate('local', {session: false},(err,user,info)=>{

//   })
// })

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
