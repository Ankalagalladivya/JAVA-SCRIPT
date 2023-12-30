let goTosalar =(success,failure)=>{
    let amount =1100;
    if(amount>=650){
        success("go to movie and enjoy");

    }
    else{
        failure("go to pg and practice");
    }
}
goTosalar((msg)=>{console.log(msg),(err)=>console.log(err)})
