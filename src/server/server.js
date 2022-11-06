import app from "../app.js";

const PORT = process.env.PORT || 5500;

await app.listen(PORT);
console.log(`http://localhost:${PORT}`);