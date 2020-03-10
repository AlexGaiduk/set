// TODO: write your code here
import Team from "./team";
import Character from "./character";

const team = new Team();

const char1 = new Character("Willy", "Magician");
const char2 = new Character("Billy", "Daemon");
const char3 = new Character("Dilly", "Swordsman");

team.add(char3);
team.addAll(char1, char2, char3);

console.log(team);

const arrayOfHeroes = team.toArray();
console.log(team.members);
console.log(arrayOfHeroes);