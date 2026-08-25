"use strict";
// ===========================================
// Enums
// ===========================================
var Role;
(function (Role) {
    Role[Role["READ_ONLY"] = 0] = "READ_ONLY";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["TEACHER"] = 2] = "TEACHER";
    Role[Role["MANAGER"] = 3] = "MANAGER";
    Role[Role["ADMIN"] = 4] = "ADMIN";
})(Role || (Role = {}));
;
let manager = {
    name: 'John Doe',
    age: 25,
    hasAdminAccess: true,
    tasks: ['Manage User Tickets', 'Report The Bugs', 'Manage The Admin Panel'],
    role: Role.ADMIN,
};
// if (manager.role === Role.ADMIN) {
//     console.log('Let Admin Log In To The Admin Panel');
// };
if (manager.role === Role.MANAGER || manager.role === Role.ADMIN) {
    console.log('Let The Admin Log In To The Admin Panel');
    console.log(`Your Role Is/n
    ${manager.role}`);
}
;
