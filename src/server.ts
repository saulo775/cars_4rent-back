import express from "express";

const app = express();
app.use(express.json());

app.post("/courses", (request, response) => {
  const { name } = request.body;
  return response.json({ name });
});

app.listen(5500, () => {
  console.log("Server running on port 5500");
});
