const express =require('express');
const cors =require('cors');
const { Op } =require( "sequelize");
const app = express();
const port = 8080;

app.use(cors());
//https://test-cors.org

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(port, 'posts로 진행해주세요');
});   

app.use(express.json());


const userRouter = require("./routes/routers/sign");

app.use("/api/", [userRouter]);