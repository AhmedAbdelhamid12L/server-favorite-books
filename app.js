require('dotenv').config();
const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const dbConnection = require('./Configration/config')
const schema = require('./Schema/schema')
const app = express()
const port = process.env.PORT || 4000

app.use(express.json());

app.use(cors())

dbConnection();

app.use('/', graphqlHTTP({
  schema,
  graphiql: true
}))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))