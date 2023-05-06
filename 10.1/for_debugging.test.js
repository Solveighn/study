const calculateBonus = require ('./for_debugging');

//Проверка отработки для значения <50
test ('sum < 50 -> bonus=sum', () => {
    value = calculateBonus(1,48);
    expect(value).toBeLessThan(50);
});

//Проверка отработки для значения = 50
test ('sum = 50 -> bonus = 50', () => {
    value = calculateBonus(0,50);
    expect(value).toBe(50);
});

//Проверка отработки для значения > 50
test ('sum > 50 -> bonus = 50', () => {
    value = calculateBonus(0,51);
    expect(value).toBe(50);
});