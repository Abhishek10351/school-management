import { Request, Response } from "express";

const listSchools = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({ success: true });
    } catch (error) {
        console.log(error);
    }
};

export default listSchools;
