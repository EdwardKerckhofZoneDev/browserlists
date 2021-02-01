#!/usr/bin/env node
const fs = require("fs");

(async () => {
  const browserslistrc = fs.createWriteStream(".browserslistrc");
  browserslistrc.on("error", function (err) {
    console.error(err.message);
  });
  const config = ["> 1%", "last 2 versions", "not dead"];
  await config.forEach((c) => browserslistrc.write(c + "\n"));
  browserslistrc.end();

  console.log(".browserslistrc successfully created");
})();
