import express from 'express';
const router = express.Router(); // Create a router instance

// Simple test route to verify database connection
router.get('/test', (req, res) => {
    req.app.locals.db.get('/test').then((snapshot) => {
        if (snapshot.exists()) {
            res.json(snapshot.val());
        } else {
            res.status(404).json({ message: 'No data available' });
        }
    }).catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Export the router to be used in other parts of the application
export default router;