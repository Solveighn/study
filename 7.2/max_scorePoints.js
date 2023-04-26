const players = [
{
    "id": 1,
    "name": "Ivan",
    "scorePoints": 4500
 },
{
    "id": 2,
    "name": "Petr",
    "scorePoints": 3600
},
{
    "id": 3,
    "name": "Vadim",
    "scorePoints": 3433
},
{
    "id": 4,
    "name": "Olga",
    "scorePoints": 2356
},

];

//console.log(players[0].scorePoints);
let arrayScorePoints = [];
for (i = 0; i < 4; i++) {
    arrayScorePoints.push(players[i].scorePoints)
} 
console.log(arrayScorePoints);

console.log(Math.max(...arrayScorePoints));

console.log(players.filter((el) => el.scorePoints === Math.max(...arrayScorePoints)))

