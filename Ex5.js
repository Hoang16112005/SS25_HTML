let a = [1, -2, 5, -9, 5, 7, 4, 8];
let count = 0;
function check(a){
    for (let i = 0; i < a.length; i++){
        if(a[i] > 0){
            count++;
        }
    }
    document.write(count + " positive numbers");
}

check(a);