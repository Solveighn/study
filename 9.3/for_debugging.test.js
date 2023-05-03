const calculateBonus = require ('./for_debugging');

//Проверка отработки для значения <50
test ('bonus=sum', () => {
    value = calculateBonus(1,48);
    expect(value).toBeLessThan(50);
});

//Проверка отработки для значения >= 50
test ('bonus = 50', () => {
    value = calculateBonus(0,100);
    expect(value).toBe(50);
});