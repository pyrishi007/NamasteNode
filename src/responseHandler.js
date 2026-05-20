const express = require("express");

const app = express();
const port = 9999;

// So, basically there are 3 parameters in request handlers
// app.get("/main", (req, res, next) => {
//   res.send("data is from route main");
// });

// case : 1 in this i m gonna use "USE" METHOD for this
/*
in this case what if there is no response form the server to the client 

- result the request will go on infinity, there will be countinous request form client as there is no response, it will request for somtime and then there will request timeout, and it will stop and TCP/IP connection between client and server will be closed

- always remember there cant be more the one response become the TCP/IP protocol will cut off the connection which is build after ther request and followed up by the response

- Always remeber that next is just just a fucntion that means when next will run it will go to next request hanlder and run that handler, but after excition it will again fuction rest of the code.



*/
// //example 1
// app.use(
//   "/main",
//   (req, res, next) => {
//     //   res.send("data is from route main");
//     console.log("There is no response form this"); //1
//     res.send("Data is recived form req hander 1 ");//2
//     next();//3
//   },
//   (req, res) => {
//     // in this example this line wil thorugh error because onces TCP/IP is close after sending an response then this req cant just reopen that connection
//     console.log("hello");//4
//     res.send("This is form req handler 2");//erro on this line
//   },
// );

// // example 2
// app.use(
//   "/main",
//   (req, res, next) => {
//     //   res.send("data is from route main");
//     console.log("There is no response form this"); //1
//     next(); //2 --> this is start to run the next request hanlder
//     res.send("Data is recived form req hander 1 "); //error on line this
//   },
//   (req, res, next) => {
//     // in this example this line wil thorugh error because onces TCP/IP is close after sending an response then this req cant just reopen that connection
//     console.log("hello"); //3
//     next(); //4
//     res.send("This is form req handler 2");
//   },
//   (req, res, next) => {
//     // in this example this line wil thorugh error because onces TCP/IP is close after sending an response then this req cant just reopen that connection
//     console.log("hello from 3"); //5
//     next();
//     res.send("This is form req handler 3"); //4
//   },
// );

// example 3
app.use(
  "/main",
  (req, res, next) => {
    //   res.send("data is from route main");
    console.log("There is no response form this"); //1
    next(); //2 --> this is start to run the next request hanlder
    res.send("Data is recived form req hander 1 "); //error on line this
  },
  (req, res, next) => {
    // in this example this line wil thorugh error because onces TCP/IP is close after sending an response then this req cant just reopen that connection
    console.log("hello"); //3
  },
);

app.listen(port, () => console.log("server is up and runing on port 9999"));
989999999999999;
