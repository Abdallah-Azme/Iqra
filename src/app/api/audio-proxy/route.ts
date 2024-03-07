import type { NextApiRequest, NextApiResponse } from "next";

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   const url = req.query.url as string;

//   try {
//     const audioRes = await fetch(url);
//     if (!audioRes.ok) throw new Error(`Failed to fetch ${url}`);

//     // Set the content type header for the response
//     res.setHeader(
//       "Content-Type",
//       audioRes.headers.get("Content-Type") || "audio/mpeg"
//     );
//     // Stream the audio response back to the client
//     audioRes?.body?.pipe(res);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error fetching audio" });
//   }
// }
