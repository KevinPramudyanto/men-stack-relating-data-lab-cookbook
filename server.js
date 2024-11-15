require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");

const connectDB = require("./db/db.js");
const authRouter = require("./routers/auth.js");
const isSignedIn = require("./middleware/is-signed-in.js");
const foodsRouter = require("./routers/foods.js");
const usersRouter = require("./routers/users.js");
const recipesRouter = require("./routers/recipes.js");
const ingredientsRouter = require("./routers/ingredients.js");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/auth", authRouter);
app.use(isSignedIn);
app.use("/users/foods", foodsRouter);
app.use("/users", usersRouter);
app.use("/recipes", recipesRouter);
app.use("/ingredients", ingredientsRouter);

const PORT = process.env.PORT ? process.env.PORT : "5001";

app.listen(PORT, () => {
  console.log(`The express app is ready on port ${PORT}!`);
});
