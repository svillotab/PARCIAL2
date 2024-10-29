
let obj = {
    id: 0,
    name: "Tiago",
    age: 12,
    email: "msantim@hotmail.com"
}

let json = JSON.stringify(obj)
localStorage.setItem("user", json)

let objString = localStorage.getItem("user")
let obj = JSON.parse(objString)
console.log(obj)