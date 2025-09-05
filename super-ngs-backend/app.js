import express from 'express';
import admin from 'firebase-admin';
import FileSystem from 'fs';
import { rateLimit } from 'express-rate-limit';
import ContactRouter from './routes/contact.route.js';
import HomeRouter from './routes/home.route.js';
import TestRouter from './routes/test.route.js';

// Initialize Express app and get the port from environment variables or default to 3000
const app = express();

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

// Rate limiting middleware to limit repeated requests to public APIs and/or endpoints
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Middleware to parse JSON request bodies and set up rate limiting
app.use(express.json(), limiter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
});

// Sets up the routes
app.use('/contact', ContactRouter);
app.use('/home', HomeRouter);
app.use("/test", TestRouter);

export default app;