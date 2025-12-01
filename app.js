let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");

const msg =document.querySelector("#msg");

const userScorepara= document.querySelector("#user-score");
const compScorepara =document.querySelector("#comp-score");


const drawGame=()=>
{
    console.log("game is draw");
    msg.innerText="Game draw play again";
    msg.style.backgroundcolor="brown";
};

const genComputerChoice =() =>{
    const options=["rock","paper","scissor"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
};

const showWinner = (userWin)=> {
    if(userWin){
        console.log("you win");
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText="you win";
        msg.style.backgroundcolor="green";
    }
    else{
        console.log("you loose");
        msg.innerText="you loose";
        compScore++;
        compScorepara.innerText=compScore;
        msg.style.backgroundcolor="red";
    }
}


const playGame= (userChoice) =>{
    console.log("user choice=",userChoice);
    //generte computer choice
    const compChoice= genComputerChoice();
    console.log("comp chice=",compChoice);

    if(userChoice === compChoice)
    {
        drawGame();
    }
    else
        {
            let userWin=true;
            if(userChoice==="rock")
            {
                userWin = compChoice ==="paper" ? false :true;

            }
            else if(userChoice==="paper")
                {
                    userWin = compChoice ==="scissors" ? false : true;
            }
            else{
                userWin = compChoice ==="rock" ? false : true ;
            }
            showWinner(userWin);
    }


}








choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        
        const userChoice=choice.getAttribute("id");
        
        playGame(userChoice)

    });
});