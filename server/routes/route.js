const express = require("express");
const { getGames, searchGame } = require("../controller/games");

const routes = express.Router();

routes.get("/games", getGames);
routes.get("/games/:game", searchGame);

module.exports = routes;