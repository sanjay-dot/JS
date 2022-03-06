function mail(str){
   
    var format =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var first =  /[0-9]/g;
    if(!(str[0]+"").match(first) && str.match(format)){
       console.log("valid");
   }
   else{
       console.log("Not Valid");
   }
}

mail('sanj56ay@gmail.com');