
function calculatevolumeofrectangle(){
 let length = prompt("Enter the length of the rectangle:");
 let width = prompt("Enter the width of the rectangle:");
 let height = prompt("Enter the height of the rectangle:");
 let volume = length * width * height;

 document.getElementById("rectangleResult").innerHTML = `The volume of the rectangle is ${volume}`;
}