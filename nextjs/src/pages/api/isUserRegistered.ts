import type { NextApiRequest, NextApiResponse } from 'next';
import User from "@/models/User";
import connectDB from "../lib/db";

type Data = {
    status?: string,
    message?: string,
    exists?: boolean
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== 'GET') {
        res.status(405).json({ status: "failed", message: 'Only GET requests allowed' });
        return;
    }
    
    await connectDB();

    const { mail } = req.query
    
    const existingUser = await User.findOne({ mail });
    if (!existingUser) {
        res.status(200).json({ status: "success", exists: false });
    }

    res.status(200).json({ status: "success", exists: true });
}
