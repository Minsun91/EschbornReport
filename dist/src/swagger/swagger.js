"use strict";
var swaggerAutogen = require("swagger-autogen")();
var swaggerJsdoc = require("swagger-jsdoc");
var doc = {
    info: {
        title: "API",
        description: "EschbornReport API",
    },
    servers: [{
            url: "localhost:3000",
        },],
    schemes: ["http"]
};
var specs = swaggerJsdoc(doc);
var outputFile = "./swagger-output.json";
var endpointsFiles = ["../app.js"];
swaggerAutogen(outputFile, endpointsFiles, specs);
