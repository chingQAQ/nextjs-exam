import { NextApiRequest, NextApiResponse } from "next";
import { BASE_URL } from '../constants'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        res.status(405).json({ message: "Method Not Allowed" });

        return;
    }

    const { tid } = req.query;
    let resp = null

    try {
        if (tid === 'all') {
            resp = await fetch(BASE_URL);
            return res.status(200).json(await resp.json());
        }

        resp = await fetch(BASE_URL + `/${tid}`);
        const product = await resp.json();

        if (!product) {
            res.status(404);    
        }

        res.status(200).json({ product });   
    } catch (error) {
        // noop...
    }
}
