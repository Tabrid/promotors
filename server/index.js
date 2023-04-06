const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const jwt = require('jsonwebtoken');


// connect mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7jx70jr.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




// jwt token
function verifyToken( req , res , next){

    const authHeaders = req.headers.authorization;


    if (!authHeaders) {
       return res.status(401).send({message : 'unauthorized access'})
        
    }
    const token = authHeaders.split(' ')[1];
    jwt.verify(token , process.env.ACCESS_TOKEN , function(err , decoded){

        if (err) {
           return res.status(401).send({message : 'unauthorized access'}) 
            
        }
        req.decoded = decoded;
        next();
    } )

}


// api function

async function run(){
    try{
        const products = client.db('ServiceUser').collection('AllService');
        const review = client.db('ServiceUser').collection('AllReview');
        const servent = client.db('ServiceUser').collection('AllServent');
        const user = client.db('ServiceUser').collection('User');



        //passing jwt token from font
        app.post('/jwt' , (req , res) => {

        const user = req.body;
        const token = jwt.sign(user , process.env.ACCESS_TOKEN , { expiresIn : '1h'})
            res.send({token});

        })

        // get review by mail and product id
        app.get('/review',verifyToken, async (req, res) => {       
            let query = {}
            if (req.query.mail) {
                query = {
                    mail: req.query.mail
                }
            }
            else if (req.query.productId) {
                query = {
                    productId: req.query.productId
                }
            }
            const cursor = review.find(query);

            const products = await cursor.toArray();

            res.send(products);
        });
        // get all product
        app.get('/product', async(req, res) => {
            const query = {};
            const cursor = products.find(query);
            const product = await cursor.toArray();
            res.send(product);
        })
        // get all servent
        app.get('/servent', async(req, res) => {
            const query = {};
            const cursor = servent.find(query);
            const servents = await cursor.toArray();
            res.send(servents);
        })
        // get product by id
        app.get('/product/:id', async(req, res) =>{
            const id = req.params.id;
           const query = {_id: new ObjectId(id)};
           const service = await products.findOne(query);
           res.send(service);
          })
          // get review by id
        app.get('/review/:id',verifyToken, async(req, res) =>{
            const id = req.params.id;
           const query = {_id: new ObjectId(id)};
           const service = await review.findOne(query);
           res.send(service);
          })
          // delete review by id
        app.delete('/review/:id',verifyToken, async(req, res) =>{
            const id = req.params.id;
           const query = {_id: new ObjectId(id)};
           const service = await review.deleteOne(query);
           res.send(service);
          })
          // update data by id
        app.patch('/review/:id',verifyToken,async(req, res) =>{
            const id = req.params.id;
           const query = {_id: new ObjectId(id)};
           const service = await review.updateOne(query , { $set: req.body});
           res.send(service);
          })
          // add product
        app.post('/product',verifyToken, async (req, res) => {
            const product = req.body;

            const result = await products.insertOne(product);
            res.send(result);

        })
          // add user
        app.post('/user',async (req, res) => {
            const users = req.body;
            const result = await user.insertOne(users);
            res.send(result);
        })

        // add review

        app.post('/review',verifyToken, async (req, res) => {
            const product = req.body;

            const result = await review.insertOne(product);
            res.send(result);

        });
    
    }
    finally{

    }



}
run().catch( err => console.log(err));





app.get('/', (req , res) => {
    res.send('ha ha server is running')
})


app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})