let userScore=0;
let compScore=0;
const userScore_span= document.getElementById("user-score");
const compScore_span= document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".scoreBoard");
const result_p= document.querySelector(".result > p");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissors_div=document.getElementById("scissors");

function getCompChoice(){
	const choices= ['rock', 'paper','scissors'];
	const randomNumber= Math.floor(Math.random()*3);
	return choices[randomNumber];
}

function win(userChoice, compChoice){
	const smalluser="user".fontsize(3).sub();
	const smallcomp="comp".fontsize(3).sub();
	const userChoice_div= document.getElementById(userChoice);
userScore++;
	userScore_span.innerHTML=userScore;
	compScore_span.innerHTML=compScore;
	result_p.innerHTML= userChoice + smalluser + "beats "+compChoice+ smallcomp + ". you win!!👍👍";
	userChoice_div.classList.add('green-glow');
	setTimeout(()=> userChoice_div.classList.remove("green-glow"),300);
}


function lose(userChoice, compChoice){
	compScore++;
	const userChoice_div= document.getElementById(userChoice);
	userScore_span.innerHTML=userScore;
	compScore_span.innerHTML=compScore;
	const smalluser="user".fontsize(3).sub();
	const smallcomp="comp".fontsize(3).sub();
	result_p.innerHTML= compChoice + smallcomp + "beats "+userChoice+ smalluser + ". you lose.💩💩";
	userChoice_div.classList.add('red-glow');
	setTimeout(()=> userChoice_div.classList.remove("red-glow"),300);
}

function draw(userChoice, compChoice){
	const userChoice_div= document.getElementById(userChoice);
	const smalluser="user".fontsize(3).sub();
	const smallcomp="comp".fontsize(3).sub();
	result_p.innerHTML= userChoice + smalluser + "equals "+compChoice+ smallcomp + ". It's a draw.";
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => userChoice_div.classList.remove("gray-glow"),300);
}

function game(userChoice){
	const compChoice=getCompChoice();
	switch(userChoice + compChoice){
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
		win(userChoice, compChoice);
		break;
		case "rockpaper":
		case "paperscissors":
		case "scissorsrock":
		lose(userChoice, compChoice);
		break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
		draw(userChoice, compChoice);
		break;
}
}
function main(){
rock_div.addEventListener('click', () =>
	game("rock")
);

paper_div.addEventListener('click', ()=>
game("paper")	
);

scissors_div.addEventListener('click', ()=>
	game("scissors")
);
}

main();
