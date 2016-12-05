var names = ['urip', 'eka', 'adit'];

/*names.forEach(function (name){
    console.log('forEach', name);

});

names.forEach((name) =>{
    console.log('Arrow' , name);
});

names.forEach((name)=>console.log(name)); */



/**var myName = (name) => name + '!';
console.log(myName('Urip')); */

/*var person = {
    name: 'urip',
    greet: function(){
        names.forEach((name) => {
            console.log(this.name + ' say hello to ' + name);
        });
    }
}
person.greet(); */

/*function add(a, b) {
    return (a+b);
}

console.log(add(1, 8));
console.log(add(3, 9)); */

var addStatement = (a, b) => {
    return (a + b);
}
console.log(addStatement(2, 8));

var addExpresion = (a, b) => (a + b); console.log(addExpresion(3, 6));
