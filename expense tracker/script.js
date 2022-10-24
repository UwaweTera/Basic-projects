//take necessary variable

const table = document.getElementById("table");
let text = document.getElementById("name");
let date = document.getElementById("date");
let amount = document.getElementById("money");
let form = document.getElementById("form")

//when submit button clicked

form.addEventListener("submit",function(e){
    e.preventDefault();

    if(text.value.trim()  === '' ){
        alert("text empty");
    }else if(date.value === ''){
        alert("date is empty");
    }else if(amount.value === ''){
        alert("amount is empty");
    }else{
        //create close button
        let but = document.createElement("button");
        but.innerText = "";
        but.className = "btn-close close";
        
        //create row in table

        let row = table.insertRow(-1);

        //create row celling
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(-1);
        let cell3 = row.insertCell(-1);
        let cell4 = row.insertCell(-1);
        cell3.className = "text-danger amount";
        cell1.innerHTML = text.value;
        cell2.innerHTML = date.value;
        cell3.innerHTML = amount.value + ' $';
        cell4.appendChild(but);


        // set input field to empty
        
        text.value = "";
        date.value = "";
        amount.value = "";
        
        
        
        //when click to close button

        but.addEventListener("click", function(){
            row.style.display ="none";
        })
    }
    
});
console.log(table)
