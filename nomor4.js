//nomor 4
//a
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}
//fusion and replace
let data2 = {
    ...data,
    name: "Denny Wahyu Prasetyo",
    email: "dennywp666@gmail.com",
    hobby: ["menonton anime", "bermain game mobile", "mendengarkan musik"]
}
console.log(data2);


// b
const {
    street,
    city
} = data.address

console.log(street);
console.log(city);