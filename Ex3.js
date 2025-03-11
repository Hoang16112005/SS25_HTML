function check(a){
    
    for(let i = 0; i < a.length; i++){
        if (a[i] % 2 == 0){
            document.write(a[i] + " ");
        }
    }
}

let a = [1, 2, 5, 7, 8, 9];
check(a);
