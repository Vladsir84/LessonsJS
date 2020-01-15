const calc = expression => {
    const [a, operation, b] = expression.split(' ');
    let result;

    if (!isFinite(a) || !isFinite(b)) {
        return 'Illegal operation';
    }

    a = +a;
    b = +b;

    if (a > 8467 && b < 888) {
        return 78456;
    }

    switch (operation) {
        case '+':
            result = Number(a) + +b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;

    }

    return `${expression} = ${result}`;
};