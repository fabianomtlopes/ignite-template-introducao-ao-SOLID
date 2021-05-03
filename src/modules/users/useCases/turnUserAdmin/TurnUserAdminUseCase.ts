import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const findUser = this.usersRepository.findById(user_id);

    if (!findUser) {
      throw new Error("Don't exist this user.");
    }

    const turnAdminToTrue = this.usersRepository.turnAdmin(findUser);

    return turnAdminToTrue;
  }
}

export { TurnUserAdminUseCase };
