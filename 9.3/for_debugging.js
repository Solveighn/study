const calculateBonus = (a, b) => {
let bonus; //объявление переменной
const sum = a + b; // вычисление суммы a и b 
sum > 50 ? (bonus = 50) : (bonus = sum);
return bonus;
};

console.log(calculateBonus(0.537,49.464));

module.exports = calculateBonus;