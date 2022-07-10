import { User } from './entities/user.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getAllUsers(): Promise<User[]>;
    getUser(userId: number): Promise<User>;
    updateUser(userId: number, body: Partial<User>): Promise<User>;
    deleteUser(userId: number): Promise<User>;
}
