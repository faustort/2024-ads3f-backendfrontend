const express = require("express");
const database = require("./database/db");
const UserApi = require("./api/user");
// const PostApi = require("./api/post"); // Remover esta linha
const cors = require("cors");

const app = express();
const corsOptions = {
  // origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // para compatibilidade com navegadores antigos
  // allow from all origins
  origin: "*",
};
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

// Rotas sem token
app.post("/login", UserApi.login);
app.post("/user", UserApi.createUser);

// Rotas com token
app.use(UserApi.validateToken);
app.put("/user/:id", UserApi.updateUser);
app.get("/user", UserApi.findUsers);
app.delete("/user/:id", UserApi.deleteUser);

// Remover as rotas relacionadas a `post`
/*
app.post("/post", PostApi.createPost);
app.put("/post/:id", PostApi.updatePost);
app.get("/post", PostApi.findPosts);
app.delete("/post/:id", PostApi.deletePost);
*/

database.db
  .sync({ force: false })
  .then((_) => {
    app.listen(8000, (_) => {
      console.log("Server running on port 8000 http://localhost:8000");
    });
  })
  .catch((e) => {
    console.error(`Erro ao inicializar o banco de dados ${e}`);
  });
