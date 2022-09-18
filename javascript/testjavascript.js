function checkusername(){
    var input_value=input.value;
    if(input_value.length<5){
          feedback.className='warning';
          feedback.innerText='Name is not long enough';
    }
    else{
        feedback.innerText='';
    }    
}
function tipuser(){
    feedback.className='tip';
    feedback.innerText='name should be 5 characters or more';
}
var input=document.getElementById('username');
var feedback=document.getElementById('texter');
input.addEventListener('focus',tipuser,false);
input.addEventListener('blur',checkusername,false);