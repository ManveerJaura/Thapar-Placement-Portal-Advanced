const mongoose = require('mongoose');
require("dotenv").config();

const username = process.env.MONGO_USERNAME || "admin";
const password = process.env.MONGO_PASSWORD || "admin123";
const host = process.env.MONGO_HOST || "tpp-mongo"; // 👈 use container name
const port = process.env.MONGO_PORT || 27017;

const uri = process.env.MONGO_URI || "mongodb://mongo:27017/test";

const clientOptions = { 
  serverApi: { version: '1', strict: true, deprecationErrors: true } 
};

const connectToDB = async () => {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("✅ Connected to MongoDB!");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
};

module.exports = connectToDB;
