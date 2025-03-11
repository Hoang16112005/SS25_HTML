function min(a, n){
    for(let i = 0; i < n; i++){
        a[i] = parseInt(prompt("Enter elements " + i));
    }

    let minValue = a[0];
    
    for (let i = 0; i < n; i++){
        if (a[i] < minValue){
            minValue = a[i];
        }
    }
    return minValue;
}

let a = [100];
let n = parseInt(prompt("Enter amount of elements: "));
let minValue = min(a, n);
alert(minValue);

