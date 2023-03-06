// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import scheduleMock from "../../__mocks__/schedule.mock";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(scheduleMock);
}
