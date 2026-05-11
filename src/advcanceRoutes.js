const express = require("express");

// intallization of the express app instance
const app = express();

//port
const port = 9999;

/*
here b become optional so it can respond to /abc and /ac
bur what we can do is (ab) targetiing more values 
optional means full like 
*/

app.get("/(ab)?c", (req, res) => {
  // logging out query
  console.log(req.query);
  res.send("This is abc route");
});

//               Query parametre
// Query is s data sent in the URL after a ?
// User can pass multiple query with key=value&key=value

//    single query
// http://www.localhost:7777/main?user=1

//    mutiple query
// http://www.localhost:7777/main?user=1&username="rohit"

/* 
Query parametre 
key>string     value>string
  "user"          "1"
"username"      "rohit"

logg this by property 
req.query
*/

//   Understanding parametre
app.get("/main/:id", (req, res) => {
  // logging out query
  // console.log(req.query);

  // logging the parametre
  console.log(req.params);
  res.send("This is abc route");
});

// Parametre is dynamic parametre passed inside the URL
// http://localhost:7777/main/123

// unlike the query this parametre has to explictly handled in the request itself or else it not gonna work

// "/main/:id" to this :id itself the placeholder of that dynamic URL
// if there is dynamic URL then,
/*
this are all dynaic URL with :id or :user 
this means that colon ":" is necessary before giving an parametre
http://localhost:7777/main/123
http://localhost:7777/main/1234
http://localhost:7777/main/12555664

now we can give multiple parametre like this 
/main/:id/:username/:password
This means /main/dynamic/dynamic/dynamic
http://localhost:7777/main/1234/rishi/qwqesdswder123

how to logg this by property params
req.params
*/

//deafult route
app.use("/", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(port);
