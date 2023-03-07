// function greeting (email){
//     if(/^\w+([\.-]?\w+)*@Darwinbox.io/.test(email)){
//         return true
//     }
//     else{
//         return false
//     }
// }
// const email1="preetham.shinde.5@gmail.com"
// const email2="preetham.s@Darwinbox.io"
// console.log(greeting(email1))
// console.log(greeting(email2))
//for,for each ,for in,for of , while/Do while


// const greetings= function(username){
//     console.log("hello user"+username)
// }
// greetings("Rajiv")


//Functions inside objects
// const my_object={
//     id: 1001,
//     name : "Mike Ross",
//     profession : "lawyer",
//     work: function(){
//         console.log("solves cases")
//     }
// }
// my_object.work()


//Iterating through objects
var emp_obj=[
    {
        name:"Hassan",
        age:"28",
        level:"5",
        designation:"Manager"
    },
    {
        name:"Raj",
        age:"28",
        level:"4",
        designation:"Manager"
    },
    {
        name:"Ram",
        age:"28",
        level:"4",
        designation:"Manager"
    },
    {
        name:"Kevin",
        age:"28",
        level:"4",
        designation:"Manager"
    },
  
]
function add(name1,age1,level1,d1){
    new_obj={
        name:name1,
        age:age1,
        level:level1,
        designation:d1,
    };
    emp_obj.push(new_obj)
}
// add("preetham","20","2","Employee")

function remove(name1){
    let ind=emp_obj.findIndex(obj=>obj.name==name1)
    emp_obj.splice(ind)
}
//remove("Kevin")

function update(name1){
    let ind=emp_obj.findIndex(obj=>obj.name==name1)
    emp_obj[ind]["name"]="Nikhil"
    
}

function filter(name1){
    let ind=emp_obj.find(obj=>obj.name==name1)
    console.log(ind)
}
filter("Raj")


