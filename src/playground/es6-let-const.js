var nameVar = 'David';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
// can not redine let variable, will get an error
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// can not redefine const either
// can not reassign either
console.log('nameConst', nameConst);

// scope, var is function scope, let and const are also function scoped
// Block scoping
var fullName = 'David Punzel';

if (fullName) {
    // var firstName = fullName.split(' ')[0];
    // const firstName = fullName.split(' ')[0];
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}
// showing var are function scoped we have access to firstName
console.log(firstName);
// change to const and let we see 2nd is not available

