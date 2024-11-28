import { Request, Response } from "express";
import { connection } from "../db";
const listSchools = async (req: Request, res: Response) => {
    try {
        const [results, fields] = await (await connection).execute("SELECT * FROM school");
        console.log(fields);
        return res.status(200).json(results);
    } catch (error) {
        console.log(error);
    }
};

export default listSchools;
