let emp={}
let user={
    uname:'DIVYA',
    uemail:"divya@gmail.com"
}

let arr=[]
for(prop in user){
    arr.push(prop)
}
arr.length>0 ?  console.log("Not Empty oject"):console.log("Empty")