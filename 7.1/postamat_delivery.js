let postamat =  [null, null, null, "4 - ваша посылка" , null];
let customer = {
    sum: 100,
    codeSMS: "A001DFX0",
    textSMS: "… ваша посылка находится в ячейке под номером 4"
}
if (customer.codeSMS === "A001DFX0") {
console.log(`Вы получили посылку из ячейки 4 и ваш счет составляет: ${customer.sum} р.`)
}
else {
console.log("Неверный код")
}