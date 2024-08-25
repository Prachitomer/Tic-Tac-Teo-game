console.log("my tic tac teo game welcome to tic tac teo game ");
let music=new Audio("winner-epic-157062.mp3");
let audioTurn=new Audio("Jhanjran_1.mp3");
let gameover=new Audio("gameover.mp3");
let turnof="X";
let gameoverr=false;

const changeTurn=()=>{
    return turnof==="X"?"O":"X";
}
const checkWin=()=>{
    let boxtexts=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2 ],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText!=='')){
            document.querySelector(".info").innerText=boxtexts[e[0]].innerText+" won";
            gameover=true;
            music.play();
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
        }
              
    })
     
    
}
music.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");
    element .addEventListener("click",()=>{
         if(boxtext.innerText===''){
             boxtext.innerText=turnof;
             turnof=changeTurn();
             audioTurn.play();
             checkWin ();
             if(!gameover){
             document.getElementsByClassName("info")[0].innerText= `Turn for`  + turnof;

         }
     }})

                 
             })
             reset.addEventListener("click",()=>{
                let boxtexts=document.querySelectorAll(".boxtext");
                Array.from(boxtexts).forEach(element=>{
                    element.innerText='';
                })
                turnof="X";
                gameover=false;
                document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";
                document.getElementsByClassName("info")[0].innerText= `Turn for`  + turnof;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";


                 
             })
