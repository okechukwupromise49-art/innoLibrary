const dotenv = require("dotenv").config();

const express = require("express");
const cors = require("cors");
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const mongoose = require("mongoose")
const app = express();

const bookRoutes = require("./routes/book")
const testRoutes = require("./routes/test")


console.log(require.resolve("./routes/book"))
console.log(testRoutes)


const PORT = process.env.PORT || 4000;
// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174","https://inno-library.vercel.app","http://127.0.0.1:5176"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));



app.use(express.json());

app.set("trust proxy", 1);





mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err.message));

  app.use("/api/books", bookRoutes)
  app.use("/api", testRoutes)


app.get("/health", (req,res) => {
  res.status(200).send("working fine 👍👍👍👍")
})

app.get("/", (req,res) => {
  res.status(200).send("working ❤️❤️❤️👍👍👍👍")
})




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});