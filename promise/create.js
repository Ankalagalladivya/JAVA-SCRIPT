let employees =[
    {eid:101,ename:'rahul'},
    {eid:102,ename:'sonia'}
]

let create_employee=(emp)=>{
    setTimeout(() => {
        employees.push(emp)
        
    },4000);
}
let display_employee =()=>{

}

create_employee({eid:103,ename:'priyanka'})
display_employee();
        
