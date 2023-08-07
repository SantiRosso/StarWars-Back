const { Router } = require("express");
const fs = require("fs");
// const charactersRouter = require("./characters");
// const filmsRouter = require("./films");

const router = Router();

// router.use("/characters", charactersRouter);
// router.use("/films", filmsRouter);

fs.readdirSync("./src/routes").forEach((file) => {
  const module = file.split(".")[0];
  file !== "index.js" && router.use(`/${module}`, require(`./${module}`));
});

module.exports = router;
