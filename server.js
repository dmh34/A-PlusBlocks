const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = require("./app");




//app.use(checkJwt);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("Client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Client","build", "index.html"));
});


app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
})

// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//         error: {
//             message: error.message
//         }
//     });
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
