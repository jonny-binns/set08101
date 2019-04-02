const bcrypt = require('bcrypt');

var userpw = 'super secret password';
var badpass = 'bad password';
let hash = bcrypt.hashSync(userpw, 10);
console.log("Hashed password: " + hash);

console.log("Using password: " + badpass + " we get: ");
if(bcrypt.compareSync(badpass, hash))
{
    console.log("Match");
}
else
{
    console.log("Unmatch");
}

console.log("using password: " + userpw + " we get: ");
if(bcrypt.compareSync(userpw, hash))
{
    console.log("match");
}
else
{
    console.log("unmatch");
}
