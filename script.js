const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};
let team=players;
let team1=[...players]
let cap1=[...person]
console.log(team);    // Output: ['Player 1', 'Player 2', 'Player 3']
console.log(team1);   // Output: ['Player 1', 'Player 2', 'Player 3']
console.log(cap1);    // Output: { name: 'John', age: 30, city: 'New York' }

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
