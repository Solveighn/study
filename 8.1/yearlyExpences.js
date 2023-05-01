let expencesExamples = [
    { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
   ];

 function sumExpences(yearlyExpences){
    let sum = 0;
    for (let yearlyExpence of yearlyExpences)
        if (yearlyExpence > 1000) {
            sum = sum + yearlyExpence;
        }

    return sum;
 }

expencesExamples.forEach(
    function(expencesExample){
        console.log(sumExpences(expencesExample.yearlyExpences))
        console.log('\n')
    }
)


function testSum(){
    input1 = [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390]
    expect1 = 40590

    input2 = [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200]
    expect2 = 148200

    input3 = [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000]
    expect3 = 25709

    if ((sumExpences(input1) === expect1) && (sumExpences(input2) === expect2) && (sumExpences(input3) === expect3)) {
        console.log('input = expect')
    }else {
        console.log('input != expect')
    }
}

testSum();