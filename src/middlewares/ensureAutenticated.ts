import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAutenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // receber o tokens
  const atuthToken = req.headers.authorization;

  //validar se token está preenchido
  if (!atuthToken) {
    return res.status(401).end();
  }

  const [, token] = atuthToken.split(" ");

  try {
    // validar se o token é válido
    const { sub } = verify(
      token,
      "8ca1218d222b89915bd0c4abb46a6169"
    ) as IPayload;

    // recuperar informações do usuário
    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
