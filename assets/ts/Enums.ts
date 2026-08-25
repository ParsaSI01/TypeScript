// ===========================================
// Enums
// ===========================================

enum Role {
    READ_ONLY = 0,
    AUTHOR = 1,
    TEACHER = 2,
    MANAGER = 3,
    ADMIN = 4,
};

let manager: {
    name: string;
    age: number;
    hasAdminAccess: boolean;
    tasks: string[];
    role: Role;
} = {
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
};

