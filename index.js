"use strict";
require("dotenv").config();
const { createServer } = require("@lhci/server");

console.log("Starting server...");
createServer({
  port: process.env.PORT,
  storage: {
    storageMethod: "sql",
    sqlDialect: "postgres",
    sqlConnectionSsl: true,
    sqlConnectionUrl: process.env.PROD_DATABASE,
    sqlDialectOptions: {
      // this flag also needs to be set in order to make a secure connection if not setting custom certificates
      ssl: true,
    },
    pool: {
      acquire: 30000,
    },
  },
  /* If you need basic auth uncomment this section
  basicAuth: {
    username: process.env.BASIC_AUTH_USERNAME,
    password: process.env.BASIC_AUTH_PASSWORD,
  },
  */
}).then(({ port }) => console.log("Listening on port", port));
