let input =document.getElementById('email')



 
input.onblur = function(){
   
    if(!input.value.includes("@")){
        
    
        input.style.color="red";
        alert('@ missing')
    }
    else{
        input.style.color="#00ABE4"
    
    }
}

