import { Request, Response } from "express";
import { connection } from "../db";

const addSchool = async (req: Request, res: Response) => {
    try {
       let { name, address, latitude, longitude } = req.body;
        // create a serializable transaction
        if (!name || !address || !latitude || !longitude) {
            return res.status(400).json({ message: "Invalid request" });
        }

        // parse data provided by the user
        latitude = parseFloat(latitude);
        longitude = parseFloat(longitude);
        name = name.trim();
        address = address.trim();

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
