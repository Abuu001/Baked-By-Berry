const functions = require('firebase-functions');
const express= require('express')
const cors= require('cors')
const stripe= require('stripe')('sk_test_51IdhMjFe3O7A748K0wmyclfXhojawNPzjX8IjYxGd62EKIZ1yHq5KCT4yP2UxuCTNol0igzwdwLM8wvrzU2rKHHJ00cZ41Xo7s')

//-App config
const app = express()

//-Middlewares
app.use(cors({origin:true}))
app.use(express.json())


//-API

//-API ROUTES
app.get('/',(req,res)=>{
    res.status(200).send("Hello world")
})

app.post('/payments/create',async(req,res)=>{
    const {total} =req.query;
    console.log(total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount :total,
        currency : "usd"
    })
    
    res.status(201).send({
        clientSecret : paymentIntent.client_secret
    })
}) 
 
//http://localhost:5001/baked-by-berry/us-central1/api
exports.api=functions.https.onRequest(app)