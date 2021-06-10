import express from 'express'
import cors from 'cors'
import posts from './routers/posts.js'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.port || 5000
const URI =
  'mongodb+srv://admin:T123456@cluster0.osm43.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(cors())

app.use('/posts', posts)

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to DB')
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.log(`err`, err)
  })
