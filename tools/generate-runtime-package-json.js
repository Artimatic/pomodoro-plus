const fs = require("fs");
const path = require("path");

const rootPkg = require("../package.json");

const runtimePkg = {
  name: "backend",
  version: rootPkg.version,
  main: "main.js",
  scripts: {
    start: "node main.js"
  },
  dependencies: {}
};

// Copy only runtime deps used by NestJS backend
const allowedDeps = [
  "@nestjs/common",
  "@nestjs/core",
  "@nestjs/platform-express",
  "reflect-metadata",
  "rxjs",
  "tslib"
];

allowedDeps.forEach(dep => {
  if (rootPkg.dependencies?.[dep]) {
    runtimePkg.dependencies[dep] = rootPkg.dependencies[dep];
  }
});

const outputPath = path.join(__dirname, "..", "dist", "package.json");

fs.writeFileSync(outputPath, JSON.stringify(runtimePkg, null, 2));
console.log("Generated runtime package.json at:", outputPath);
