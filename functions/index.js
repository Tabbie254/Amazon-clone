const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe") ('sk_test_51IIrYIAFWwNTS2VvRCdeBk10wbQMDQE0aX0rx345Xx1yolrCNlGI5A1KgN1DvrQ2InX2xBXnELlW6USXUilZt1O400NuOa75dL')
// API

// App config
const app = express();
// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200) .send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment  Request Recieved Boom!!!for this amount>>> ', total)

    const paymentIntent= await stripe.paymentIntents.create({
        amount: total, //subunis of the currency
        currency: "usd",
    });
    //ok-created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// Listen command
exports.api = functions.https.onRequest(app)
// Example endpoint
//(http://localhost:5001/clone-fae31/us-central1/api).
