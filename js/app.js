$(() => {


    $('.start').on('click', function(e){
        e.preventDefault();
        let factor = 0;
        if (document.getElementById("small").checked ===true) {
           factor=1;

        }else if (document.getElementById("medium").checked ===true) {
           factor=10;

        }else if(document.getElementById("large").checked ===true) {
           factor=1000;
        }

    
    let num1 = Math.round((Math.random() * 5*factor) );
    let num2 = Math.round((Math.random() * 5*factor) );
    let sum = num1 + num2;

    $('.question').text(`${num1}+${num2}`);

    let falseResult1=0;
    let falseResult2=0;
    do{
        falseResult1 = Math.round((Math.random() * 10*factor) );
        falseResult2 = Math.round((Math.random() * 10*factor) );

    }while(falseResult1==falseResult2||falseResult1==sum||falseResult2==sum);

    let array = [falseResult1, falseResult2, sum];

    let sortedArray = array.sort();

    $('.answer-1').text(sortedArray[0]);
    $('.answer-2').text(sortedArray[1]);
    $('.answer-3').text(sortedArray[2]);

    })
})