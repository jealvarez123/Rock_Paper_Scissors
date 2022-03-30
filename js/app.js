//This takes in the user input and lower cases it and returns result
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!')
  }
};

// This creates a random choice for the computer
const getComputerChoice = () => {
  randomNum = Math.floor(Math.random() * 3);
  switch(randomNum) {
    case 0 :
      return 'rock';
    case 1 :
      return 'paper';
    case 2 :
      return 'scissors';
    default:
    console.log('boo');
  }
};

// This can be used to get a random choice for the user
const getRandomUserChoice = () => {
  randomNum = Math.floor(Math.random() * 4);
  switch(randomNum) {
    case 0 :
      return 'rock';
    case 1 :
      return 'paper';
    case 2 :
      return 'scissors';
    case 3 :
      return 'bomb';
    default:
    console.log('boo');
  }
};

//This will determine who wins
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'You won big!';
  } if (userChoice === computerChoice) {
    return "it\'s a tie!";
  } if (userChoice === 'rock' && computerChoice === 'paper') {
    return 'Computer won!'
  } if (userChoice === 'paper' && computerChoice === 'scissors') {
    return 'Computer won!'
  } if (userChoice === 'scissors' && computerChoice === 'rock') {
    return 'Computer won!'
  } else {
    return 'You won!'
  }
};

// this is the game that is called to play game
const playGame = () => {
  const userChoice = getRandomUserChoice();
  const computerChoice = getComputerChoice();
  console.log(`You threw ${userChoice}`);
  console.log(`The computer threw ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame()
