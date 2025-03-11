let a = prompt("Enter a string: ");
let check = true 
function isPalindrome(a){
    for (let i = 0; i < a.length; i++){
        if(a[i] != a[a.length - i - 1]){
            check = false;
            document.write("Not Palindrome");
            break;
        }
    }
    if(check){
        document.write("Is Palindrome"); 
        
    } 
}

isPalindrome(a);