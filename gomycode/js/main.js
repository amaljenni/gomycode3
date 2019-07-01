var getText=document.getElementById("tex");




function changestyle(){
    if (getText.style.fontWeight=="bold")
        { getText.style.fontWeight="normal";}
    else   
    {
        getText.style.fontWeight="bold";
    }
    
}
function changestyle2(){
    if (getText.style.fontStyle=="italic")
    { getText.style.fontStyle="normal";}
    else{
        getText.style.fontStyle="italic";
    }
    
}
function changestyle3(){
    if (getText.style.textDecoration=="underline")
    { getText.style.textDecoration="none";}
    else{
        getText.style.textDecoration="underline";
    }
    
}
function changestyle4(){

   var x= document.getElementById("sizef").value;
    
    getText.style.fontSize=x;
}

function changestyle5(){
    
    var x= document.getElementById("sizea").value;

    getText.style.fontFamily=x;

}

