let btns= document.querySelectorAll("#btn");
let resetbtn= document.querySelector("#reset-btn");
let newBtn= document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msgs");
let turnO = true;
const winningpatterns =[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
btns.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turnO){
        btn.innerText ="O";
            turnO= false;
        }else{
            btn.innerText ="X";
            turnO =true;
        }
        btn.disabled=true;
       checkWinner();
     });
});

const resetGame=()=>{
    enableBtns();
    turnO=true;
    msgContainer.classList.add("hide");
}
const enableBtns=()=>{
    for ( let btn of btns){
        btn.disabled=false;
        btn.innerText=""
    }
}

const disableBtns=()=>{
    for ( let btn of btns){
        btn.disabled=true;
    }
}
const showWinner=(postval1)=>{
    msg.innerText=`Congratulations,The winner is ${postval1}`;
    msgContainer.classList.remove("hide");
   disableBtns();
}
const checkWinner = () =>{
    for (let pattern of winningpatterns){
     let postval1=btns[pattern[0]].innerText;
     let postval2=btns[pattern[1]].innerText
     let postval3=btns[pattern[2]].innerText;

      if(postval1 !="" && postval2!= ""&& postval3!="" ){
      if(postval1===postval2 && postval2===postval3){
         showWinner(postval1); 
      }
      }
    }
};
newBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
