const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');
const authRoutes = require("./routes/auth");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URI, {})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.use(
    "/auth",
    (req, res, next) => {
        next();
    },
    authRoutes
);


app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
