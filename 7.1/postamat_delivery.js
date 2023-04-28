let postamat =  [null, null, null, "A001DFX0" , null];
let customer = {
    sum: 100,
    codeSMS: "A001DFX0",
    textSMS: "… ваша посылка находится в ячейке под номером 4"
}
let getDelivery = false;

for(let value of postamat){
if (customer.codeSMS === value) {
console.log(`Вы получили посылку из ячейки 4 и ваш счет составляет: ${customer.sum} р.`)
getDelivery = true;
}}

if (getDelivery == false) {
    console.log("Неверный код")
}