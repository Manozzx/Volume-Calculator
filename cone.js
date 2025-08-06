function calculatevolumeofcone(){
 let radius = prompt("Enter the radius of the cone:");
 let height = prompt("Enter the height of the cone:");
 let volume = (1/3) * Math.PI * radius * radius * height;

 document.getElementById("coneResult").innerHTML = `The volume of the cone is ${volume.toFixed(2)}`;
}
