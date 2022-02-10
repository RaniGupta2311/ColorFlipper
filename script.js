console.log("Welcome to Color Flipper");
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


const colorBtn=document.querySelector('.colorbtn');
const color=document.querySelector('.color');

colorBtn.addEventListener("click",function(){
    let hexColor="#";
    for(i=0;i<6;i++){
        hexColor+=hex[generateRandomNumber()];
    }
    color.textContent=hexColor;
    document.body.style.backgroundColor=hexColor;
});

function generateRandomNumber(){
    return Math.floor(Math.random()*hex.length);
};