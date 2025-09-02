import express from 'express';
import { initializeApp } from "firebase/app";
import DataBase from './utils/database.util.js';
import TestRouter from './routes/test.route.js';

// Initialize Express app and get the port from environment variables or default to 3000
const app = express();
const PORT = process.env.PORT || 3000;

// Firebase configuration using environment variables for sensitive information
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "super-ngs.firebaseapp.com",
  databaseURL: "https://super-ngs-default-rtdb.firebaseio.com",
  projectId: "super-ngs"
};

// Initialize Firebase and Database utility, and attach them to app.locals for global access
app.locals.firebase = initializeApp(firebaseConfig);
app.locals.db = new DataBase();

// Start the server and listen on the specified port
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Example route to test database connection
app.use("/", TestRouter);

// Export the app for use in other modules (e.g., for testing)
export default app;