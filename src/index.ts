import express, { Request, Response } from "express";

// Creating an Express application
const app = express();
const port = process.env.PORT || 3000; // Port number on which the server will listen

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Sample route with route parameters
app.get("/users/:userId", (req: Request, res: Response) => {
  const userId: string = req.params.userId;
  res.send(`User ID: ${userId}`);
});

// Sample POST route
app.post("/users", (req: Request, res: Response) => {
  const user = req.body;
  // Process the received user data
  console.log(user);
  res.send("User created successfully");
});

// Starting the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
