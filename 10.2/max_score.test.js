const maxScore = require ("./max_score");
describe("Позитивный сценарий для 3-х наборов данных", () => {
it.each`
studentsGroup | result
${[
      { "name": "Ivan", "score": 45, "date": "2022-10-11" },
      { "name": "Maria", "score": 5, "date": "2022-10-10" },
      { "name": "Olga", "score": 6, "date": "" },
      { "name": "Stepan", "score": 45, "date": "2022-10-11" },
      { "name": "Oleg", "score": 9, "date": "2022-10-01" },
      { "name": "Zhanna", "score": 15, "date": "2022-10-11" }
    ]} | ${"Congratulations Ivan!\n"}
    


    ${[
      { "name": "Margo", "score": 0, "date": "2022-10-11" },
      { "name": "Natalia", "score": 25, "date": "2022-10-10" },
      { "name": "Marina", "score": 25, "date": "2022-10-01" },
      { "name": "Dmitry", "score": 25, "date": "2022-10-12" },
      { "name": "Denis", "score": 10, "date": "2022-10-02" },
      { "name": "Vladimyr", "score": 1, "date": "2022-10-11" }
    ]} | ${"Congratulations Marina!\n"}



    ${[
      { "name": "Irina", "score": 33, "date": "2022-10-11" },
      { "name": "Vasily", "score": 80, "date": "2022-10-10" },
      { "name": "David", "score": 80, "date": "2022-10-01" },
      { "name": "Kristina", "score": 60, "date": "2022-10-12" },
      { "name": "Varvara", "score": 25, "date": "2022-10-01" },
      { "name": "Tanya", "score": 75, "date": "2022-10-11" }
    ]} | ${"Congratulations David!\n"}
    
  ` ("Проверка возвращаемого результата", ({studentsGroup, result}) => {
    expect(maxScore(studentsGroup)).toEqual(result);
  });
});