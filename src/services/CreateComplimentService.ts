import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
  tag_id: string;
  user_reciver: string;
  user_sender: string;
  message: string;
}

class CreateComplimentService {
  async execute({
    tag_id,
    user_reciver,
    user_sender,
    message,
  }: IComplimentRequest) {
    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories
    );
    const usersRepositories = getCustomRepository(UsersRepositories);

    if (user_reciver === user_sender) {
      throw new Error("Incorrect User Reciver");
    }

    const userReciverExists = await usersRepositories.findOne(user_reciver);

    if (!userReciverExists) {
      throw new Error("User Reciver does not exist!");
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_reciver,
      user_sender,
      message,
    });

    await complimentsRepositories.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };
