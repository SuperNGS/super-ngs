import app from "./app.js";

const PORT = process.env.PORT || 3000;

// Starts the server and listens on the specified port
const server = app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default server;