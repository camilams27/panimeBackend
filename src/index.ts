import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app: Express = express();
const PORT = process.env.PORT || 3000;

// home
app.get('/', (req: Request, res: Response) => {
    res.send({
        "msg": "Server On!🌈"
    })
})

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});