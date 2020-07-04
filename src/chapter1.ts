
// helper functions
function odd(n:number) : boolean {
    return (n & 0x1) == 1;
}

function half(n:number) : number {
    return n >> 1;
}


export function multiply0(n:number, a:number, operations = 0 ) : object {
    if (n == 1) {
        return {'value': a, 'operations': operations + 1};
    }

    var result = multiply0(n - 1, a, operations + 1);

    return {
        'value': result['value'] + a,
        'operations': result['operations']
    }
}

export function multiply1(n:number, a:number, operations = 0) : object {
    if (n == 1) {
        return {'value': a, 'operations': operations + 1};
    }
    
    var result = multiply1(half(n), a + a, operations + 1);

    if (odd(n)) {
        result['value'] = result['value'] + a;
    }

    return result;
}