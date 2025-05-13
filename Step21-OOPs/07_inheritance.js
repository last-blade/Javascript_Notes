class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        return `Username is ${this.username}`;
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);// pichhli step 05_call.js mein humne dekha tha ki ".call" kaa use kar rahe hain or 'this' ko bhi pass karna pad raha hai, but yahan par woh sab karne ki need nahin hai, kewal 'super' keyword kaa use karenge usmein apna argument send kar denge and "this" keyword bhejne ki zaroorat nahin hai '.call' wale method ki tarah, yeh super keyword khud behind the scene send kar dega 'this' ko.
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`New course added by ${this.username}`);
    }
}

const teacher1 = new Teacher("prashant", "prashant@google.com", "1234@");
teacher1.addCourse(); // OUTPUT: New course added by prashant

console.log(Teacher instanceof User); // OUTPUT: false
console.log(teacher1 instanceof Teacher); // OUTPUT: true
console.log(teacher1 instanceof User); // OUTPUT: true
