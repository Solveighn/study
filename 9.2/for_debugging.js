const calculateBonus = (a, b) => {
let bonus; //объявление переменной
const sum = a + b; // вычисление суммы a и b 
debugger;
sum > 50 ? (bonus = 50) : (bonus = sum);
debugger;
return bonus;
};

calculateBonus(4,5);