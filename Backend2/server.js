const express = require('express');
const payload = require('payload');
const router = express.Router();
require('dotenv').config();
const app = express();
const cors = require("cors")


//middleware
app.use('/api', router)
app.use(cors())


// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here

router.get('/Posts-Posts', (req, res) => {
  res.json(Posts);
});


app.listen(5000);

