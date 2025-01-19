const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3007;
const aboutroutes = require("./routes/aboutRoutes");
const contactroutes = require("./routes/contactRoutes");
const eventroutes = require("./routes/eventRoutes");
const imagesroutes = require("./routes/imagesRoutes");
// Middleware to parse JSON request bodies
app.use(express.json());


// Connect to MongoDB
mongoose.connect('mongodb+srv://harshitshakya94:Kanpur94%40@studentopedia.ufyih.mongodb.net/studentopedia', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
  
const cors = require("cors");

app.use(
  cors({
    origin: [
      "https://studentopedia.in",
      "http://localhost:3000",
    ],
  })
);

// Handle preflight requests (OPTIONS)
app.options("*", (req, res) => {
  const allowedOrigins = [
    "https://studentopedia.in",
    "http://localhost:3000",
  ];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.sendStatus(200);
});


app.use('/api',aboutroutes);
app.use('/api',contactroutes);
app.use('/api',eventroutes);
app.use('/api',imagesroutes);

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
