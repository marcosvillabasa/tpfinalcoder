import { Request, Response, NextFunction } from 'express'

const admin = true

export const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (admin) next()
  return res.status(401).json({
    msg: 'Not authorized'
  })
}
