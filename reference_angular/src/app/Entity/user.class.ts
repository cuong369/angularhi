export class UserModel {
    id: number;
    name: string;
    email: string;
    password: string;
    role: number;

    constructor(name: string, email: string, password: string, role: number) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    setEmail(email: string) {
        this.email = email;
    }

}
