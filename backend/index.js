const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const cors = require("cors");

const app = express();

dotenv.config();

const connectionstring = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.listen(process.env.PORT, () => { console.log("Server Started"); });

mongoose.connect(connectionstring)
    .then(() => { console.log("Database Connected") })
    .catch((err) => { console.log(err) });