import express from 'express';
import admin from 'firebase-admin';
import {  initializeApp } from "firebase/app";
import { getDatabase, get, ref, child } from "firebase/database";
import FileSystem from 'fs';
import DataBase from './utils/database.util.js';
import TestRouter from './routes/test.route.js';

// Initialize Express app and get the port from environment variables or default to 3000
const app = express();
const PORT = process.env.PORT || 3000;

// Firebase configuration and initialization
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "super-ngs.firebaseapp.com",
  databaseURL: "https://super-ngs-default-rtdb.firebaseio.com",
  projectId: "super-ngs",
  credential: admin.credential.cert(JSON.parse(FileSystem.readFileSync('./config/serviceAccountKey.json', 'utf8'))),
};
app.locals.firebase = initializeApp(firebaseConfig);

// Daatabase connection initialization
app.locals.db = new DataBase();


app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.json());

// Example route to test database connection
app.use("/", TestRouter);

export default app;