const dotenv = require("dotenv");
dotenv.config();
// const { makeDb } = require("../src/data-access");
(async function setupDb() {
  console.log("Setting up database...");
  // const db = await makeDb();
  // database collection will automatically be created if it does not exist
  // indexes will only be added if they don't exist
  // create index for all database colletions
  try {
    // await db.collection("collectionName").createIndexes();
    console.log("Database setup complete...\n\n");
    process.exit();
  } catch (error) {
    throw error;
  }
})();

