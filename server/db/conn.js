const mongoose = require('mongoose')
const DB = process.env.DATABASE

mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => {
    console.log("Connection successful")
}).catch((err) => console.log(`No connection ${err}`))


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = process.env.DATABASE
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("mern_thapa-technical").collection("users");
//   console.log("Connection successful")
//   // perform actions on the collection object
//   client.close();
// });