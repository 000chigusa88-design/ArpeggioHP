export class Member {
    id: string;
    name: string;
    role: string;
    description: string;

    constructor(id: string, name: string, role: string, description: string) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.description = description;
    }
}
