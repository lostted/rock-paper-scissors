function playRound() {
	const pickList = ["rock", "paper", "scissors"];
	const computerPick = pickList[Math.floor(Math.random()*2)];
	const userPick = prompt("Please, take a pick: rock, paper, scissors.", pickList[Math.floor(Math.random()*2)]);
	const result = pickList.indexOf(userPick.toLowerCase())-pickList.indexOf(computerPick);
	if (result <= -1) {
		console.log(`You lost this round! Your pick: ${userPick}. Computer's pick: ${computerPick}`);
		return "computer";
	}
	else if (result == 0) console.log(`It's a tie this round! Your pick: ${userPick}. Computer's pick: ${computerPick}`);
	else {
		console.log(`You won this round! Your pick: ${userPick}. Computer's pick: ${computerPick}`);
		return "user";
	}
}
let userScore = 0, computerScore = 0;
for (let i = 0; i < 5; i++) {
	if (playRound() == "user") userScore++;
	else computerScore++;

}
if (userScore > computerScore) console.log(`You won with the score of ${userScore} vs computer's ${computerScore}`);
else if (userScore < computerScore) console.log(`You lost with the score of ${userScore} vs computer's ${computerScore}`);
else console.log(`It's a tie with your and computer's score of ${userScore}!`);