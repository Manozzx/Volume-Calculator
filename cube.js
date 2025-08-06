function calculatevolumeofcube(){
 let side = prompt("Enter the length of a side of the cube:");  
 let volume = side * side * side;

 document.getElementById("cubeResult").innerHTML = `The volume of the cube is ${volume}`;
}