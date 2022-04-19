// First task
let x  = -1;

    if (x !== 0){
    console.log('True')
        } else {
    console.log('False')
}

x  = 0;

    if (x !== 0){
    console.log('True')
        } else {
    console.log('False')
}

x  = 3;

    if (x !== 0){
    console.log('True')
        } else {
    console.log('False')
}

// Second task

let time = +prompt('Tell me the minutes, Jason!'); //0-59

    if (time <= 15) {
        console.log('First quarter')
    }   else if (time > 15 && time <= 30) {
        console.log('Second quarter')
    }   else if (time > 30 && time <= 45) {
        console.log('Third quarter')
    }   else if (time > 45 && time < 59) {
        console.log('Fourth quarter')
    }
        else {
        console.log('What are those numbers, Jason?')
    }

// Third task

let day = +prompt('Check your calendar, what is todayʼs number?');

    if (day <= 10) {
        console.log('First dacade of the mounth')
    }   else if (day > 10 && day <= 20) {
        console.log('Second dacade of the mounth')
    }   else if (day > 20 && day <= 31) {
        console.log('Third dacade of the mounth')
    }
        else {
        console.log('What kind of calendar youʼr using, bro?')
    }


// Fourth task

let dayOfWeek = +prompt('What day is it? (1-7, Mon-Sun)'); //1-7

    switch (dayOfWeek) {
        case '1':
            console.log('Monday');
            break;
        case '2':
            console.log('Tuesday');
            break;
        case '3':
            console.log('Wednesday');
            break;
        case '4':
            console.log('Thursday');
            break;
        case '5':
            console.log('Friday');
            break;
        case '6':
            console.log('Saturday');
            break;
        case '7':
            console.log('Sunday');
            break;
        default:
            console.log('idk mate, looks like that`s wrong number')
    }

// Fifth task

let firstNumber = +prompt('Enter your first number');
let secondNumber = +prompt('Enter your second number');

    if (firstNumber > secondNumber) {
        console.log(firstNumber)
    }   else if (firstNumber < secondNumber) {
        console.log(secondNumber)
    }   else if (firstNumber === secondNumber) {
        console.log('The numbers are equal')
    }

    // На рахунок цього завдання не впевнений, щодо оптимальності підходу для виконання.
    // Але здається працює все окей :)
