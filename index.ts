import "dotenv/config";
import express from "express";
import cors from "cors";
import { addSchoolRouter, listSchoolsRouter } from "./routes";
const app = express();
const PORT = process.env.PORT || 3000;

//middleware

app.use(express.json());
app.use(cors());

//routes
app.use("/api", addSchoolRouter);
app.use("/api", listSchoolsRouter);
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`connected to server: ${PORT}`);
});

export default app;
