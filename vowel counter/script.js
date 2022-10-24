let text = document.getElementById("text");
let btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    if(text.value.trim() == ""){
        alert("input empty");
    }else{
        let newStr = text.value.match(/[aiuoe]/gi);
        alert("Word '"+ text.value + "' contain "+ newStr.length +" vowel");
        text.value = "";
    }   
   
});