export class User {
    id?: number;
    name?: string;
    address?: string;
    email?: string;
    password?: string;
    lecturer?: boolean;
    constructor() {
       this.id= undefined
       this.name=""
       this.address =""
       this.email=""
       this.password=""
       this.lecturer= false

    }
}