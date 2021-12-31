const express = require("express");
const morgan = require("morgan");
const bordyPaser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { readdirSync } = require("fs"); // map() all rounter
require("dotenv").config();

// const Register = require('./Routers/Register');

// app
const app = express();

// connect mongoodb
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 
  })
  .then(() => {
    app.use(cors());
    app.use(morgan("dev"));
    app.use(bordyPaser.urlencoded({ extended: false }));
    app.use(bordyPaser.json());
  
    
     // for require all file any Rounter 
    readdirSync("./routers").map((r) => {app.use("/api/v1", require("./routers/" + r));
    });
    // app.use('/api/v1/',Register);
    app.listen(process.env.PORT || 5000, () => {
      console.log(`server is runing on port ${port}`);
    });
  })
  .catch((err) => console.log(`Mongoodb Database Connect Error ${err}`));

 

