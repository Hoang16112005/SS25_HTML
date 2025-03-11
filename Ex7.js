let a = prompt("Enter a string: ");

function uppercase(str)
{
  let array = str.split(' ');
  let newarray = [];
    
  for(let i = 0; i < array.length; i++){
      newarray.push(array[i].charAt(0).toUpperCase()+array[i].slice(1).toLowerCase());
  }
  return newarray.join(' ');
}
document.write(uppercase(a));