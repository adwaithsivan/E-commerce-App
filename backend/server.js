const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "e_ecommerce",
});



app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/register", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (email, username, password) VALUES (?,?,?)",
    [email, username, password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post('/', (req,res) => {

    const username = req.body.username
    const password = req.body.password

    db.query(
        "SELECT * FROM users WHERE username = ? password = ?",
        [username,password],
        (err,result) => {
            if(err){
                res.send({err:"Error Occured"})
            }
            if(result){
                res.send(result)
            }else {
                res.send({message: "invalid user"})
            }
        }
    )
})

app.listen(port, () => {
  console.log(`App Running on port ${port}`);
});
