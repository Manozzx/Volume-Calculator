function calculatevolumeofcylinder(){
 let radius = prompt("Enter the radius of the cylinder:");
 let height = prompt("Enter the height of the cylinder:");
 let volume = Math.PI * radius * radius * height;

 document.getElementById("cylinderResult").innerHTML = `The volume of the cylinder is ${volume.toFixed(2)}`;
}
