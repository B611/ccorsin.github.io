#! /usr/bin/env node
const data = require("./data.js")

try {
  let errors = [];
    if (!data.rocketData.speed) {
      errors.push(new Error("Missing rocket's speed property"));
    }
    if (!data.rocketData.date) {
      errors.push(new Error("Missing rocket's date property"));
    }
    if (!data.rocketData.angle) {
      errors.push(new Error("Missing rocket's angle property"));
    }
    if (!data.asteroidData.weight) {
      errors.push(new Error("Missing rocket's weight property"));
    }
    if (!data.rocketData.shape) {
      errors.push(new Error("Missing rocket's shape property"));
    }
    if (!data.rocketData.fuel) {
      errors.push(new Error("Missing rocket's fuel property"));
    }
    if (!data.rocketData.launchDate) {
      errors.push(new Error("Missing a launchDate to launch the rocket"));
    }
    if (errors.length > 0) {
      throw errors; 
    }
} catch (errors) {
    errors.map((e) => {
      console.log(e.name + ": " + e.message);
    })
    process.exit(1)
}
