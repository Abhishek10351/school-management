import { Request, Response } from "express";

const addSchool = async (req: Request, res: Response) => {
    try {
        const { name, address, location, latitute, longitude } = req.body;
        return res.status(200).json({ success: true });
    } catch (error) {
        console.log(error);
    }
};

export default addSchool;
