const express = require("express");
const app = express();
const router = require("./router/auth-router"); 
const connectDb = require("./db/db")

app.use(express.json());

app.use("/api/auth", router);

const Port = 4000;

connectDb().then(()=>{
  app.listen(Port, () => {
    console.log(`Server is running: ${Port}`);
  });
})


