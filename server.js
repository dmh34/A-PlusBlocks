const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const controller = require("./controllers/studentController");

const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');


const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and 
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://aplusauth.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'http://localhost:3001/api/students',
  issuer: `https://aplusauth.auth0.com/`,
  algorithms: ['RS256']
});

const checkScopes = jwtAuthz(['read:students', 'write:students']);


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(jwtCheck);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.post("/api/students", checkJwt, (req, res) => {
  controller.addStudents(req, res)
})

app.get("/api/students", checkJwt, (req, res) => {
  console.log("route hit");
  controller.getAllStudents(req, res);
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
