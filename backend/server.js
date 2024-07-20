const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI, {})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.use(
    "/auth",
    (req, res, next) => {
        console.log("Received request on /api/auth");
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
