require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connection = require("./db");
const cors = require("cors");
const path = require("path");

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
    res.status(200).json({
      message: 'Hello from EduSYnC ',
    });
  });


  let port = process.env.PORT;
  if (port == null || port == "") {
    port = 5000;
  }
    const startServer = async () => {
      try {
        connection();
        app.listen(port, () => console.log(`Server started on port ${port}`));
      } catch (error) {
        console.log(error);
      }
    };
    
    startServer();