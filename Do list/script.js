let val1 = document.getElementById("name");
let val2 = document.getElementById("phone");
let val3= document.getElementById("address");
let val4 = document.getElementById("email");

let btn = document.getElementById("btn");
let form = document.getElementById("form");
let myDiv = document.getElementById("myDiv");
form.addEventListener("submit",check);

function check(e){
    e.preventDefault();
    //warning if input name is empty
    if(val1.value == ""){
      alert ("name IS empty");
    }else if(val2.value.length <= 8){
      alert ('phone NB must field and contain at list 8 digits');
    }else{
    //declare all variable and appending some classes and text    
    let name = document.createElement("DIV");
    name.className  = "names";
    name.innerText = val1.value;
    let phone = document.createElement("DIV");
    phone.className = "phone";
    phone.innerText = "NB: "+val2.value;
    let del = document.createElement("span");
    del.className = "delete";
    let i = document.createElement("I");
    i.classList ="las la-trash";
    //variable for next element
    let next = "";

    //append elements
    myDiv.appendChild(name);
    myDiv.appendChild(phone);
    name.appendChild(del);
    del.appendChild(i);

  const event = name;
 

  //viewing person number by click
  event.addEventListener("click",function(){
      this.classList.toggle("active")
      next = this.nextElementSibling;

      if(next.style.display === "block"){
        next.style.display = "none";
      }else{
        next.style.display = "block";
      }
  });

   //delete element
   del.addEventListener("click",function(){
    myDiv.removeChild(name);
    myDiv.removeChild(phone);
    //name.style.display = "none";
  });


}
  //empty input field
  
  val1.value = "";
  val2.value = "";  
  val3.value = "";
  val4.value = "";  

}





    