import { Request, Response } from 'express'

export default async (req: Request, res: Response) => {
  console.log("hello")
  return res.send({ message: "Everything's ok" })
}
