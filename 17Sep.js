const obj = {
    name: "Nguka",
    surname: "aurelle"
}
const obj2 = {
    ... obj,
    age:21
}

const obj3 = {
    ... obj2,
    age:40
}
console.log(obj2)

const obj4 = {
    ... obj3,
    age:24
}
console.log(obj3)



const {
    surname,
    ...rest  //destructuring ; déstructuration

} = obj4;

console.log(obj4);

