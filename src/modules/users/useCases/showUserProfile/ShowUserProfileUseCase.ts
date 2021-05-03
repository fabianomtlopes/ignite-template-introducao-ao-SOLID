import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userByID = this.usersRepository.findById(user_id);

    if (!userByID) {
      throw new Error("Don't exist this user");
    }

    return userByID;
  }
}

export { ShowUserProfileUseCase };
