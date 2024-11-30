import { Request, Response } from "express";
import { connection } from "../db";
import { haversine } from "../utils";
const listSchools = async (req: Request, res: Response) => {
    const { latitude, longitude } = req.body;
    const distance = 10;
    // it will only show schools within 10 km range
    if (!latitude || !longitude) {
        return res.status(400).json({ message: "Invalid request" });
    }

    try {
        const [results, fields] = await (
            await connection
        ).execute("SELECT * FROM school");

        let schools = Array.from(JSON.parse(JSON.stringify(results)));

        schools = schools.filter((school: any) => {
            const { latitude: lat, longitude: long } = school;
            return haversine(lat, long, latitude, longitude) <= distance;
        });
        // if no schools are found within the range
        if (schools.length === 0) {
            return res.status(404).json({ message: `No schools found within ${distance} km.` });
        }
        return res.status(200).json({"schools": schools});
    } catch (error) {
        console.log(error);
    }
};

export default listSchools;
