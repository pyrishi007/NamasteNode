- app.use() 
is a middleware/route handler that matches any HTTP method (GET, POST, PUT, DELETE, etc.), while specific methods only match their respective request type.


// app.use() matches /main AND /main/anything/else (prefix match)
app.use("/main", (req, res) => {
    res.send("Matches: /main, /main/users, /main/abc/xyz")
})

// app.get() matches ONLY exactly /main
app.get("/main", (req, res) => {
    res.send("Matches: /main  ✅  | /main/users  ❌")
})


app.use("/api", (req, res) => {
    res.send("matched!")
})

this will all this 
/api              ✅
/api/users        ✅
/api/users/123    ✅
/api/anything     ✅

This will not match this
/apixyz           ❌
/other            ❌


Why app.use("/") Matches Everything

app.use("/", (req, res) => {
    res.send("I run for everything!")
})

app.use() checks: "does the URL start with this path?" --> "/"

we know that Every single URL starts with "/"
/              ✅  starts with /
/users         ✅  starts with /
/anything      ✅  starts with /
/wrong/route   ✅  starts with /
/laskdjflkasj  ✅  starts with /


This is How a 404 Handler is Built
Because of this behavior, developers put a catch-all at the bottom of all routes:

app.get("/users", (req, res) => {
    res.send("users page")
})

app.get("/products", (req, res) => {
    res.send("products page")
})

// ⬇️ BOTTOM — only reaches here if nothing above matched
app.use("/", (req, res) => {
    res.status(404).send("Page not found!")
})