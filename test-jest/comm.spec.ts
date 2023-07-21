


// import User from "../user";
// import Address from "../address";
// import Community from "../community";

import superagent from "superagent";

// describe('Community tests 1', () => {

//         test('Check user search by existing email', async () => {
//             const community = new Community();
//             await community.initialize();
//             const email = 'Shanna@melissa.tv';
//             const expectedUser = new User('Ervin Howell', 'Antonette', 'Shanna@melissa.tv', '010-692-6593 x09125', 'anastasia.net',
//                 new Address('Victor Plains', 'Suite 879', 'Wisokyburgh', '90566-7771'));



//             const recievedUser = community.getUserByEmail(email);
//             expect(recievedUser).toMatchObject(expectedUser);
//         });
//     });

// describe("Test suite", () => {
//     test("Test", async () => {
//         const expectObject ={
//         id: 2,
//         email: "janet.weaver@reqres.in",
//         first_name: "Janet",
//         last_name: "Weaver",
//         avatar: "https://reqres.in/img/faces/2-image.jpg"
//         }
//         let response: any;
//         try {
//             response = await superagent.get('https://reqres.in/api/users?id=2').query('{id: 2}');
//         }
//         catch (err: any) {
//             console.log(err.message)
//         }

//         expect(response.status).toBe(200);
//         expect(response.body.data).toEqual(expectObject);
//     });
// });

// describe("Test suite", () => {
//     test("Test", async () => {
//         let response: any;
//         try {
//             response = await superagent.get('https://jsonplaceholder.typicode.com/users?id=5').query('{id: 5}');
//         }
//         catch (err: any) {
//             console.log(err.message)
//         }

//         expect(response.status).toBe(200);
//         expect(response.body[0].username).toEqual("Kamren");
//         expect(response.body[0].name).toEqual("Chelsey Dietrich");
//         expect(response.body[0].email).toEqual("Lucio_Hettinger@annie.ca");

//     });
// });

// describe("Test suite", () => {
//         test("Test", async () => {
//             const res = await superagent
//             .post('https://reqres.in/api/users')
//             .set('Content-Type', 'application/json')
//             .send({name: 'James', job: 'manager'})

//             expect(res.statusCode).toEqual(201);
//             expect(res.body.createdAt).toEqual(new Date());
//         });
//     });

