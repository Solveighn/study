let studentsGroups = [
    [
      { "name": "Ivan", "score": 45, "date": "2022-10-11" },
      { "name": "Maria", "score": 5, "date": "2022-10-10" },
      { "name": "Olga", "score": 6, "date": "" },
      { "name": "Stepan", "score": 45, "date": "2022-10-11" },
      { "name": "Oleg", "score": 9, "date": "2022-10-01" },
      { "name": "Zhanna", "score": 15, "date": "2022-10-11" }
    ],
    [
      { "name": "Margo", "score": 0, "date": "2022-10-11" },
      { "name": "Natalia", "score": 25, "date": "2022-10-10" },
      { "name": "Marina", "score": 25, "date": "2022-10-01" },
      { "name": "Dmitry", "score": 25, "date": "2022-10-12" },
      { "name": "Denis", "score": 10, "date": "2022-10-02" },
      { "name": "Vladimyr", "score": 1, "date": "2022-10-11" }
    ],
    [
      { "name": "Irina", "score": 33, "date": "2022-10-11" },
      { "name": "Vasily", "score": 80, "date": "2022-10-10" },
      { "name": "David", "score": 80, "date": "2022-10-01" },
      { "name": "Kristina", "score": 60, "date": "2022-10-12" },
      { "name": "Varvara", "score": 25, "date": "2022-10-01" },
      { "name": "Tanya", "score": 75, "date": "2022-10-11" }
    ]
  ];
function maxScore(studentsGroup) {
    const result = [];
    for(let i = 0; i < studentsGroup.length; i++){
        result.push(studentsGroup[i].score);
    }
    let x = Math.max(...result);
    console.log(x);
    let winners = studentsGroup.filter(el => el.score === x)
    winners.sort(function(a,b){
      if (Date.parse(a.date) > Date.parse(b.date)) {
        return 1;
      }
      else if (Date.parse(a.date) < Date.parse(b.date)) {
        return -1;
      } else{
        return 0;
      }  
    });
    return "Congratulations "+ winners[0].name + "!" + "\n";
}


studentsGroups.forEach((studentsGroup) => {
    console.log(maxScore(studentsGroup));
})

module.exports = maxScore;