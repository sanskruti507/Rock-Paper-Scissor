userScore=0;
compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const opt=["Rock","Paper","Scissor"];
    const randidx=Math.floor(Math.random()*3);
    return opt[randidx];
};

const drawGame=()=>{
    msg.innerText="GAME DRAW.PLAY AGAIN";
    msg.style.backgroundColor="#13505B";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userscorepara.innerText=userScore;
        msg.innerText=`YOU WIN ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscorepara.innerText=compScore;
        msg.innerText=`YOU LOOSE !${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playgame=(userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        drawGame();
    }else{
            let userWin=true;
            if(userChoice==="Rock"){
                userWin=compChoice==="Paper"? false : true;
            }
            else if(userChoice==="Paper"){
                userWin=compChoice==="Scissor" ? false : true;
            } else{
                userWin=compChoice==="Rock"? false:true;
            }
            showWinner(userWin,userChoice,compChoice);

        }

    };


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});