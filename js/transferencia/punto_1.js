for (let num=1; num<=50; num ++) {
    let esprimo= true;
    if (num < 1) {
        esprimo= false;
    } else {
        for (let i=2; i<num; i++) {
            if (num % i == 0) {
                esprimo= false;
                break;
            }
        }
    }
    if (esprimo) {
        console.log(num);
    }    

}

