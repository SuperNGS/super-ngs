import express from 'express';
import admin from 'firebase-admin';
import FileSystem from 'fs';
import ContactRouter from './routes/contact.route.js';
import TestRouter from './routes/test.route.js';

// Initialize Express app and get the port from environment variables or default to 3000
const app = express();
const PORT = process.env.PORT || 3000;

// Configures Firebase Admin SDK
const firebaseConfig = {
  credential: admin.credential.cert(JSON.parse(FileSystem.readFileSync('./config/serviceAccountKey.json', 'utf8'))),
  apiKey: process.env.API_KEY,
  authDomain: "super-ngs.firebaseapp.com",
  databaseURL: "https://super-ngs-default-rtdb.firebaseio.com",
  projectId: "super-ngs"
};

// Gets references to the Firebase app and database
app.locals.firebase = admin.initializeApp(firebaseConfig);
app.locals.db = admin.database();

// Starts the server and listens on the specified port
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Sets up the routes
app.use('/contact', ContactRouter);
app.use("/test", TestRouter);

export default app;