const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I0KRsHLNfDYyBlpiHy7ukzcnJDGP2FGXAKZV9etf5SN1eWvPSfNIoyd52surK26hQiP5iT0w5j4LMHCsq9l7EcW00vPCsAmLJ"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Paymnet Request recieved BBOM!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-7d4d5/us-central1/api
