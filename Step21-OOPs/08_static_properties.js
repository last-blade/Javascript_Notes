class User {
    constructor(username){
        this.username = username;
    }

    createId(){
        return `1234`;
    }
}

const u1 = new User("prashant");

console.log(u1.createId()); // OUTPUT: 1234


class User2 {
    constructor(username){
        this.username = username;
    }

    static createId(){
        return `1234`;
    }
}

const user1 = new User2("prashant");

console.log(user1.createId()); // OUTPUT: ab access nahin kar sakte iss createId method ko, kyoki "static" bana diya hai, even agar hum iss "User2" class ko inherit bhi kar lenge tab bhi access nahin kar sakte hain
