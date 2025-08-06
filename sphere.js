function calculatevolumeofsphere(){
 let radius = prompt("Enter the radius of the sphere:");
 let volume = (4/3) * Math.PI * radius * radius * radius;

 document.getElementById("sphereResult").innerHTML = `The volume of the sphere is ${volume.toFixed(2)}`;
}
