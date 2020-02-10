#!/usr/bin/env node
const program = require("commander");
program.version("0.0.1");

program
  .command("setup")
  .alias("s")
  .description("this set up your working dir for Clean Architecture")
  .action(() => {
    require("./lib/app")();
    console.log("Your Project dir is setup...\ncomplete your project setup\n=> run the command (yarn start-up)")
  });

program.parse(process.argv);
