const express = require("express");
const mongoose = require("mongoose");
const user_router = require("./routes/userRouter");
const country_router = require("./routes/countryRouter");
const cors = require('cors');

const PORT = process.env.PORT || 3300;

const app = express();

mongoose.connect(
  "mongodb+srv://Alexander:monutor93@cluster0-zvaiu.mongodb.net/userProfile",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/users", user_router);
app.use("/countries", country_router);

app.listen(PORT, () => {
  console.log("Сервер запустился!!!");
});
