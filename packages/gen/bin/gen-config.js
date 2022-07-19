#!/usr/bin/env node
const genConfig = require("../config");
try {
  genConfig();
} catch (error) {
  console.log("ERROR :(", error);
}
