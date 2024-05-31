const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { setGlobalOptions } = require("firebase-functions/v2");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const app = express();

setGlobalOptions({ maxInstances: 10 });
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "success!" });
});

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // amount in cents
      currency: "usd",
    });
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(500).json({ error: error.message });
  }
});

exports.api = onRequest(app);
