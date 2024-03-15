let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#newGame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turn=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turn=true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="O";
            turn=false;
        }else{
            box.innerText="X";
            turn=true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(pos1val)=>{
    msg.innerText=`Congratulation Winner is ${pos1val}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPattern){
        var pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);