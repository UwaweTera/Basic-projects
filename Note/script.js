//declare variables
let title = document.getElementById("title");
let text = document.getElementById("elm");
let btn = document.getElementById("addBtn");
const parent = document.getElementById("model");
btn.addEventListener("click",()=>{

    if(text.value.trim() === ''){
        alert("input required");

    }else{
        //create all necessary element
        let div = document.createElement("DIV");
        let h2 = document.createElement("H2");
        let p = document.createElement("P");
        let p2 = document.createElement("P");
        let detail = document.createElement("BUTTON");
        let close = document.createElement("BUTTON");

        //add some text to above element
        div.className = "display";
        h2.innerText = title.value;
        
        detail.innerText = "View Detail";
        detail.className = "btn-detail";
        close.innerText = "close";
        close.className = "close";

        //function to take value
        function take(value){
            p.innerText = value;
            p.className = "model-content";
            return p;
        }
      
        //text 2
        function take2(value2){
            p2.innerText = value2;
            return p2;
        }
        //cutting text 
        function cutStr(s,n){
            let cut = s.indexOf(' ',n);
            if(cut == -1) return s;
        
            return s.substring(0,cut) + "...";
        }
        let cutTxt = cutStr(text.value,120);
       
        
        


        //append all element
        function appending(par,chil){
            chil.forEach(function(val){
                par.appendChild(val);
            });
        }
         //remove all element
        function removing(par,chil){
            chil.forEach(function(val){
                par.removeChild(val);
            });
        }
        
        //array value 
        
        let arr = [take2(cutTxt)];
        let arr2 = [take(text.value)];
        //append main div to container
        parent.appendChild(div);

        //other appending
        div.appendChild(h2);
        appending(div,arr)
        div.appendChild(detail);

        
        

        
        
        

        
        //when you click to view more
        detail.addEventListener("click",(e)=>{
            div.className = "model";
            appending(div,arr2);
            removing(div,arr);
            div.removeChild(detail);
            div.appendChild(close);
            div.removeChild(h2);
            //when click on close button
            close.addEventListener("click",function(){
                div.className = "display";
                div.appendChild(h2);
                appending(div,arr);
                div.appendChild(detail);
                detail.style.display = "block";
                removing(div,arr2);
                
                div.removeChild(close);
                
                
                });
            
        });
        title.value = "";
        text.value = "";

        
    }

   
    

    

});

