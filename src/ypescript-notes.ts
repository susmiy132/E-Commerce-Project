

let fullName: string = "ram"
let price: number = 12
let isActiv: boolean = true

// Type Inference

let course = "mern"
course = "Python"

// let courses = ["mern", "python", {title: "qa"},]
let courses: string[] = ["mern", "python", "qa"]

// let evenNumbers: number[] = [2,4,6, "eight"]   //error:

let evenNumbers: number[] = [2, 4, 6, 8]

let user = { name: "Ram", age: 12, address: { street: "street 101" } };

console.log(user.age);
console.log(user.name);
console.log(user.address);
console.log(user.address.street);

console.log("end");
console.log("end");

// let colors: {name: string, hex:string, rgb: string} [] =

type Color = {
    name: string
    hex: string
    rgb: string
}

let color: Color = {
    name: "red",
    hex: "#24234",
    rgb: "rbg.....",
}

let colors: Color[] = [
    {
        name: "red",
        hex: "#adf",
        rgb: "rgb(....."
    }
]

interface User {
    name: string
    address: {
        street: string
    }

}

let users: User[] = [
    {
        name: "ram",
        address: {
            street: "ktm"
        }
    }
]

users[0].address.street