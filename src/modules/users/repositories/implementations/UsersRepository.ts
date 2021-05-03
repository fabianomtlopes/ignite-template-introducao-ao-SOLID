import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const userNew = new User();

    Object.assign(userNew, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });
    this.users.push(userNew);
    return userNew;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const user = this.users.find((userId) => userId.id === id);
    return user;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const user = this.users.find((userEmail) => userEmail.email === email);
    return user;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    // const findAdmin = this.users.findIndex(
    //   (userAdmin) => userAdmin.id === receivedUser.id
    // );
    // if (!receivedUser.admin) {
    Object.assign(receivedUser, {
      admin: true,
      updated_at: new Date(),
    });
    // }

    // this.users[findAdmin] = receivedUser;

    return receivedUser;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
