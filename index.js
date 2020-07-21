// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 has a variable set to count, defined within the scope of the counterMaker function. counter2's variable is within the global scope
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 uses closure and you can tell because it contains a function within a function
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * counter1 one be preferrable if you wanted to store the data within count so if you call the function multiple times the value increases based off the previous value.
 * 
 * conuter2 would be preferrable if you just wanted count to go up by only 1 every time the function is called
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random() * 3)
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

// function finalScore(fun, inn){
//   let gameScore = {
//     // Home: Math.floor((fun()+1*(inn*Math.random()))),
//     // Away: Math.floor((fun()+1*(inn*Math.random()))),
//     Home: 0,
//     Away: 0,
//   };

//   for (let i = 0; i < inn; i++) {
//     gameScore.Home += fun();
//     gameScore.Away += fun();
//   }
//   return gameScore
// };

// console.log(finalScore(inning, 9))
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function inning(){
  return Math.floor(Math.random() * 3)
}

function getInningScore(fun1) {
  return gameScore = {
    Home: fun1(),
    Away: fun1(),
  };

}

getInningScore(inning);

function scoreboard(inning, getInningScore, num) {
  const scoreByInning = [];
  let awayTotal = 0;
  let homeTotal = 0;

  for(let i =0; i <= num; i++){
    const scores = getInningScore(inning)

    awayTotal = awayTotal + scores.Away
    homeTotal = homeTotal + scores.Home

    scoreByInning.push(`inning ${i + 1}: ${awayTotal} - ${homeTotal}`)

  }

  return scoreByInning
}

console.log(scoreboard(inning, getInningScore, 9));