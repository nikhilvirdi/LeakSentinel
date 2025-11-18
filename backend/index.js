// index.js — entry point
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const rateLimiter = require("./middleware/rateLimiter");
const errorHandler = require("./middleware/errorHandler");

const breachRoutes = require("./routes/breach");
const exposureRoutes = require("./routes/exposure");
const riskRoutes = require("./routes/risk");

const app = express();

app.use(cors());
app.use(express.json());
app.use(rateLimiter);

// Routes
app.use("/api/breach-check", breachRoutes);
app.use("/api/exposure-check", exposureRoutes);
app.use("/api/risk-score", riskRoutes);

// health
app.get("/api/ping", (req, res) => res.json({ success: true, message: "pong" }));

// static docs (optional) - serve data for quick testing
app.use("/data", express.static(path.join(__dirname, "data")));

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Backend (Z-OIE) listening on ${port}`));
