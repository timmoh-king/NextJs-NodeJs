const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 8080;

app.use(cors());

app.get("/api/home", (req, res) => {
    res.json({
        message: "Hello NextJs-NodeJs",
        people: ['Harry', 'Jack', 'Alex', 'John', 'Doe']
    });
})

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
})
