// describe("Test suite", () => {
//     test("Test", () => {
//         expect(2).toBe(2);
//     })
// })


import User from "../user";
import Address from "../address";
import Community from "../community";

describe('Community tests 1', () => {

        test('Check user search by existing email', async () => {
            const community = new Community();
            await community.initialize();
            const email = 'Shanna@melissa.tv';
            const expectedUser = new User('Ervin Howell', 'Antonette', 'Shanna@melissa.tv', '010-692-6593 x09125', 'anastasia.net',
                new Address('Victor Plains', 'Suite 879', 'Wisokyburgh', '90566-7771'));
            
    
            
            const recievedUser = community.getUserByEmail(email);
            expect(recievedUser).toMatchObject(expectedUser);
        });
    });