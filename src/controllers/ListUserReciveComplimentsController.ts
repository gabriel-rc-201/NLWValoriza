import { Request, Response } from "express";
import { ListUserReciveComplimentsService } from "../services/ListUserReciveComplimentsService";

class ListUserReciveComplimentsController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const listUserReciveCompliments = new ListUserReciveComplimentsService();

    const compliments = await listUserReciveCompliments.execute(user_id);

    return res.json(compliments);
  }
}

export { ListUserReciveComplimentsController };
