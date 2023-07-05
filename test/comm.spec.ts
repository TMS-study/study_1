// assert
// import assert from "assert";
// import User from "../user";
// import Address from "../address";
// import Community from "../community";

// describe('Community tests 1', function () {

//     it('Check user search by existing email', async function () {

//         const email = 'Shanna@melissa.tv';
//         const expectedUser = new User('Ervin Howell', 'Antonette', 'Shanna@melissa.tv', '010-692-6593 x09125', 'anastasia.net',
//             new Address('Victor Plains', 'Suite 879', 'Wisokyburgh', '90566-7771'));
//         const community = new Community();

//         await community.initialize();
//         const recievedUser = community.getUserByEmail(email);
//         assert.deepEqual(recievedUser, expectedUser);
//     });


//     it('Check if user email underfined', async function () {
//         const email = 'Shanna@melissa111.tv';
//         const community = new Community();
    
//         await community.initialize();
//         const recievedUser = community.getUserByEmail(email);
//         assert.equal(recievedUser, undefined);
//     });
        
// });

// chai
// import chai from "chai";
// import User from "../user";
// import Address from "../address";
// import Community from "../community";

// describe('Community tests 1', function () {

//     it('Check user search by existing email', async function () {

//         const email = 'Shanna@melissa.tv';
//         const expectedUser = new User('Ervin Howell', 'Antonette', 'Shanna@melissa.tv', '010-692-6593 x09125', 'anastasia.net',
//             new Address('Victor Plains', 'Suite 879', 'Wisokyburgh', '90566-7771'));
//         const community = new Community();

//         await community.initialize();
//         const recievedUser = community.getUserByEmail(email);
//         chai.expect(recievedUser).to.deep.equal(expectedUser);
//     });


//     it('Check if user email underfined', async function () {
//         const email = 'Shanna@melissa111.tv';
//         const community = new Community();
    
//         await community.initialize();
//         const recievedUser = community.getUserByEmail(email);
//         chai.expect(recievedUser).be.undefined;
//     });
        
// });

// хуки

import {expect} from "chai";
import User from "../user";
import Address from "../address";
import Community from "../community";

describe('Community tests 1', function () {

    let community: Community;

    before('Community initialization', async function () {
        community = new Community();
        await community.initialize();
    })

    it.only('Check user search by existing email', async function () {

        const email = 'Shanna@melissa.tv';
        const expectedUser = new User('Ervin Howell', 'Antonette', 'Shanna@melissa.tv', '010-692-6593 x09125', 'anastasia.net',
            new Address('Victor Plains', 'Suite 879', 'Wisokyburgh', '90566-7771'));


        
        const recievedUser = community.getUserByEmail(email);
        expect(recievedUser).to.deep.equal(expectedUser);
    });


    it('Check if user email underfined', async function () {
        const email = 'Shanna@melissa111.tv';
        
        const recievedUser = community.getUserByEmail(email);
        expect(recievedUser).be.undefined;
    });
        
});



