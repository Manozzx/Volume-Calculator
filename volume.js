function calculatevolumeofcube(){
 let side = prompt("Enter the length of a side of the cube:");  
 let volume = side * side * side;

 document.getElementById("cubeResult").innerHTML = `The volume of the cube is ${volume}`;
}


function calculatevolumeofrectangle(){
 let length = prompt("Enter the length of the rectangle:");
 let width = prompt("Enter the width of the rectangle:");
 let height = prompt("Enter the height of the rectangle:");
 let volume = length * width * height;

 document.getElementById("rectangleResult").innerHTML = `The volume of the rectangle is ${volume}`;
}

function calculatevolumeofcone(){
 let radius = prompt("Enter the radius of the cone:");
 let height = prompt("Enter the height of the cone:");
 let volume = (1/3) * Math.PI * radius * radius * height;

 document.getElementById("coneResult").innerHTML = `The volume of the cone is ${volume.toFixed(2)}`;
}

function calculatevolumeofcylinder(){
 let radius = prompt("Enter the radius of the cylinder:");
 let height = prompt("Enter the height of the cylinder:");
 let volume = Math.PI * radius * radius * height;

 document.getElementById("cylinderResult").innerHTML = `The volume of the cylinder is ${volume.toFixed(2)}`;
}

function calculatevolumeofsphere(){
 let radius = prompt("Enter the radius of the sphere:");
 let volume = (4/3) * Math.PI * radius * radius * radius;

 document.getElementById("sphereResult").innerHTML = `The volume of the sphere is ${volume.toFixed(2)}`;
}       

function calculatevolumeofpyramid(){
 let baseLength = prompt("Enter the length of the base of the pyramid:");
 let baseWidth = prompt("Enter the width of the base of the pyramid:");
 let height = prompt("Enter the height of the pyramid:");
 let volume = (1/3) * baseLength * baseWidth * height;

 document.getElementById("pyramidResult").innerHTML = `The volume of the pyramid is ${volume.toFixed(2)}`;
}   

function resetResults() {
 document.getElementById("cubeResult").innerHTML = "";
 document.getElementById("rectangleResult").innerHTML = "";
 document.getElementById("coneResult").innerHTML = "";
 document.getElementById("cylinderResult").innerHTML = "";
 document.getElementById("sphereResult").innerHTML = "";
 document.getElementById("pyramidResult").innerHTML = "";
    document.getElementById("resetMessage").innerHTML = "All results have been reset.";
}