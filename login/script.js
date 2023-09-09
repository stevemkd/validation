let input =document.getElementById('email')
let password= document.getElementById('password')



 
input.onblur = function(){
   
    if(!input.value.includes("@")){
        
    
        input.style.color="red";
        alert('@ missing')
        
    }
    else{
        input.style.color="green"
    
    }
}

password.onblur=function(){
    if(password==null){
        alert('enter password');
        password.style.color="red";
    }
    else{

        password.style.color="green"

    }
}



