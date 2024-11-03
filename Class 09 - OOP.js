class User {
    #pin = "0000";
    constructor(name, pin) {
        this.username = name;
        this.#pin = pin;
    }
    detail() {
        return `Name is ${this.username}`;
    }
    static Uname() {
        return "This is a static method in User class";
    }
}

class Attendant extends User {
    constructor(name, pin, salary) {
        super(name, pin);
        this.salary = salary;
    }

    detail() {
        return `Name: ${this.username}, Salary: ${this.salary}`;
    }

    static Uname() {
        return "This is a static method in Attendant class";
    }
}

let obj = new Attendant("Zohaib", 21, 20000);
console.log(obj.detail());          // Access instance method detail()
console.log(Attendant.Uname());     // Access static method from Attendant
console.log(User.Uname());          // Access static method from User

class User {
    name = "Default Name"; // Public field declaration
    #pin = "0000";         // Private field declaration

    constructor(name, pin) {
        this.name = name; // Override public field if needed
        this.#pin = pin;  // Set private field in the constructor
    }
}

class User1 {
    constructor(name, age) {
        this.name = name; // Instance property
        this.age = age;   // Instance property
    }
}
