// const person: {
//     name: string; 
//     age: number;
// }
enum Role {
    ADMIN, READ_ONLY, AUTHOR
}

const developer = {
    name: 'Darrius Wright',
    role: Role.ADMIN
}

if(Role.ADMIN === developer.role) {
    console.log("Access Allowed")
}