let input =document.getElementById('email')
let password= document.getElementById('password')


 
input.onblur = function(){
   
    if(!input.value.includes("@")){
        
    
        input.style.color="red";
        alert('@ missing')
    }
    else{
        input.style.color="#00ABE4"
    
    }
}


