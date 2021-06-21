import express from "express";

const app = express();

app.get("/test", (req, res) => {
  return res.send("olá do GET");
});

app.post("/test-post", (req, res) => {
  return res.send("olá do POST");
});

app.listen(3000, () => console.log("Server is running on port 3000"));
