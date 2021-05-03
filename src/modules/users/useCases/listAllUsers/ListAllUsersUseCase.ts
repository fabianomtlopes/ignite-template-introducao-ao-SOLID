import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("Don't exist this user.");
    }
    if (!user.admin) {
      throw new Error("This user not is admin");
    }

    const allUser = this.usersRepository.list();
    return allUser;
  }
}

export { ListAllUsersUseCase };
