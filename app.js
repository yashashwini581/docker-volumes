const fs = require("fs");
const filePath = "/data/message.txt";

// write
fs.writeFileSync(filePath, "Hello Bestie from Node.js!\n");

// read
const content = fs.readFileSync(filePath, "utf-8");
console.log("File content:", content);

