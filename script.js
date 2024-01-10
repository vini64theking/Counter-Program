const increase=document.getElementById("increaseBtn");
const decrease=document.getElementById("decreaseBtn");
const reset=document.getElementById("resetBtn");
const counter=document.getElementById("Counter");

let count=0;

increase.onclick=function(){
    count++;
    counter.innerHTML=count;
}
decrease.onclick=function(){
    count--;
    counter.innerHTML=count;
}
reset.onclick=function(){
    count=0;
    counter.innerHTML=count;
}