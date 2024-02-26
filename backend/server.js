import express from express

const port = "5000"

const app = express();

app.get("/", (req, res) => {`server running on ${port}`})

app.listen(() => console.log("Server get started"));