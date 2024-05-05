import type { NextApiRequest, NextApiResponse } from 'next';
import User from "@/models/User";
import connectDB from "../lib/db";

type Data = {
    status: string,
    message?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== 'POST') {
        res.status(405).json({ status: "failed", message: 'Only POST requests allowed' });
        return;
    }
    
    await connectDB();
    
    const { mail, walletId } = req.body;
    
    const existingUser = await User.findOne({ $or: [{ mail }, { walletId }] });
    if (!existingUser) {
        const newUser = new User({ mail, walletId });
        await newUser.save();
    }

    res.status(200).json({ status: "success" });
}
