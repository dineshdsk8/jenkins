const express = require("express");
const axios = require("axios");

const app = express();

const backend = "http://localhost:6000";

app.get("/", async (req, res) => {

    try {

        const response = await axios.get(backend);

        res.send(`
            <h1>Hello from Jenkins CD</h1>
            <pre>${JSON.stringify(response.data,null,2)}</pre>
        `);

    } catch(err){

        res.send("Backend Not Reachable");

    }

});

app.listen(4000, '0.0.0.0', ()=>{

    console.log("Express running on port 4000");

});