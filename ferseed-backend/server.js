// server.js
const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables

const uri = process.env.MONGODB_URI || "mongodb+srv://sahzad01:Sahzad%40123@cluster0.y0r3rrx.mongodb.net/ferseed?retryWrites=true&w=majority";

async function connectDB() {
  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  });

  try {
    console.log("⌛ Attempting to connect to MongoDB Atlas...");
    await client.connect();
    await client.db("admin").command({ ping: 1 }); // Test connection
    console.log("✅ Successfully connected to MongoDB Atlas!");
    return client.db("ferseed");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    console.log("ℹ️ Full error details:", err);
    process.exit(1);
  }
}

// Test the connection immediately
connectDB().then(db => {
  console.log("🛠️ Database connection ready");
  // You can add test queries here
}).catch(err => {
  console.error("🔥 Fatal database error:", err);
});
const express = require('express');
const app = express();

// Middleware
app.use(express.json()); // For parsing JSON requests

// Test route
app.get('/', (req, res) => {
  res.send('Ferseed Backend is Running!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});