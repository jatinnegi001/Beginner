const bone = document.querySelector('#bone');
const btwo = document.querySelector('#btwo');
const brst = document.querySelector('#brst');

const select = document.querySelector('.selectUpto');
let Pvalue = parseInt(select.value);
select.addEventListener('change', () =>{
  Pvalue = parseInt(select.value);
  player1.innerText = 0
  player2.innerText = 0;
  
  player2.style.color = "black";
  player1.style.color = "black"; 
})

const player1 = document.querySelector('#one');
const player2 = document.querySelector('#two');

let plusOne = 0;
let plusTwo = 0;


bone.addEventListener('click',() => {
  if(plusOne !== Pvalue && plusTwo !== Pvalue){
    const value = parseInt(player1.innerText);
    plusOne = value+1;
    player1.innerText = plusOne;
    if(plusOne === Pvalue){
      player1.style.color = "green";
      player2.style.color = "red";
    } 
  }
});

btwo.addEventListener('click',() => {
  if(plusOne !== Pvalue && plusTwo !== Pvalue){
    const value = parseInt(player2.innerText);
    plusTwo = value+1;
    player2.innerText = plusTwo;
    if(plusTwo === Pvalue){
      player2.style.color = "green";
      player1.style.color = "red";
    } 
  }
  
});


brst.addEventListener('click',() => {
  player1.innerText = 0
  player2.innerText = 0;
  
  player2.style.color = "black";
  player1.style.color = "black"; 
});



