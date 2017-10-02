/**
 * Created by malbinson on 10/2/17.
 */

function sleep_in(weekday,vacation) {
    if(!weekday || vacation) {
        return true
    }
    return false;
}

function monkey_trouble(a_smile,b_smile) {
    if(a_smile == b_smile) {
        return true
    }
    return false;
}

function front_times(string,n) {
    var total = '';
    for (var i = 0; i<n; i++) {
        total += string.substring(0,3);
    }
    return total
}

function string_bits(string){
    var result = "";
    for(var i = 0; i<=string.length; i+=2){
        result += string[i];
    }
    return result;
}

function caughtSpeeding(speed, bday) {
    if (bday) {
        speed -= 5;
    }
    if (speed <= 60) {
        return 0;
    } else if (speed <= 80) {
        return 1;
    } else {
        return 2;
    }
}

function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return 'FizzBuzz!';
    } else if (num % 5 == 0) {
        return 'Buzz!';
    } else if (num % 3 == 0) {
        return 'Fizz!';
    } else {
        return num + '!';
    }
}

function teaParty(tea, candy) {
    if (tea < 5 || candy < 5) {
        return 0;
    } else if (tea >= candy * 2 || candy >= tea * 2) {
        return 2;
    } else {
        return 1;
    }
}

function blackjack(a,b) {
    if(a>21 && b>21) {
        return 0;
    }
    if(a>21) {
        return b;
    }
    if(b > 21) {
        return a;
    }
    if((21-a)<=(21-b)) {
        return a;
    }
    if((21-a)>=(21-b)) {
        return b;
    }
    return 0;
}

function loneSum(a, b, c) {
    if (a === b && b === c) {
        return 0;
    } else if (b === c) {
        return a;
    } else if (a === c) {
        return b;
    } else if (a === b) {
        return c;
    } else {
        return a + b + c;
    }
}