const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000
const path = require('path')

app.use(cors());

app.use(express.static(path.join(__dirname, '..', 'dist')))


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})