 function DOMCONTENTLOADED(){
    let count=0;
 document.getElementById("clickMe") 
 .addEventListener("click", function (){
     console.log("Clicked me", count++);
 })
}
DOMCONTENTLOADED();