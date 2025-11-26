const person = {
    name: "anjila",
    address: "dhankuta",
    // phone: 98766544,
    // email: "anjila@gmial.com",
    password: "anjila123"
}
const res = {
    body: person,
    params: "adcd",
}
const { name, address, phone, email, password } = res.body
// console.log(email, name, address);
// console.log(res.params);

// if (!email) {
//     console.log("required");
// }
// if (!name) {
//     console.log("name required");
// }

// if (!email || !name || !address || !phone) {
//     console.log("required");
// }

// if (!email && !phone) {
//     console.log("email and phone number is missing");
// }
// console.log("end");


// for (i = 0; i < 5; i++) {
//     console.log("object");
// }

// for (i = 0; i < 30; i++) {
//     if (i % 3 == 0) {
//         console.log("is divisible");
//     } else {
//         console.log("not divisible");
//     }
// }

for (i = 4; i <= 0; i--) {
    for (j = 0; j <= 4; j++) {
        console.log("*");
    }
}