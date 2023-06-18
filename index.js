

let countEl=document.getElementById("count-el")
let count=0

let saveEl= document.getElementById("save-el")

function increment(){
  count+=1
   countEl.innerText=count
    console.log(count)
}

function save(){
    let final= count + " - "
    saveEl.textContent += final
    count =0;
    countEl.textContent=count
   
}


