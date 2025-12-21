require("dotenv").config();
const mongoose = require("mongoose");

// Workaround for SSL certificate issues
if (process.env.NODE_ENV !== "production") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

const dbState = [
  { value: 0, label: "Disconnected" },
  { value: 1, label: "Connected" },
  { value: 2, label: "Connecting" },
  { value: 3, label: "Disconnecting" },
];

const connection = async () => {
  try {
    const mongooseOptions = {
      ssl: true,
      retryWrites: true,
      w: "majority",
      serverSelectionTimeoutMS: 30000,
      connectTimeoutMS: 20000,
      socketTimeoutMS: 50000,
      family: 4, // Force IPv4
      maxPoolSize: 10,
      minPoolSize: 2,
    };

    // Add debug logging
    console.log("Attempting to connect to MongoDB...");
    console.log("Connection URL:", process.env.MONGO_DB_URL?.replace(/:[^:]*@/, ":***@"));

    await mongoose.connect(process.env.MONGO_DB_URL, mongooseOptions);

    // Bắt sự kiện error để tránh crash
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    const state = mongoose.connection.readyState;
    console.log(
      `MongoDB status: ${dbState.find((f) => f.value === state).label}`,
    );
  } catch (error) {
    console.error("Error connecting to DB:", error.message);
    console.error("Full error:", error);
    process.exit(1);
  }
};

module.exports = connection;
