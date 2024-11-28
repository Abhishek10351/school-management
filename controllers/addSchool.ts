import { Request, Response } from "express";
import { connection } from "../db";

const addSchool = async (req: Request, res: Response) => {
    try {
        const { name, address, latitude, longitude } = req.body;
        const schoolQuery =
            "INSERT INTO school (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

        const [result, fields] = await (
            await connection
        ).execute(schoolQuery, [name, address, latitude, longitude]);

        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export default addSchool;
