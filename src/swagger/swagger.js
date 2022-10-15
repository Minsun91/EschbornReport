const swaggerAutogen = require("swagger-autogen")();
const swaggerJsdoc = require("swagger-jsdoc");

const doc = {
    info: {
        title:"API",
        description : "EschbornReport API",
    },
    servers:[{
        url: "localhost:3000",
    },],
    schemes:["http"]
};

const specs = swaggerJsdoc(doc);
const outputFile = "./swagger-output.json";
const endpointsFiles = ["../app.js"];

swaggerAutogen(outputFile, endpointsFiles, specs)