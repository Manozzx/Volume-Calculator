function calculatevolumeofpyramid(){
 let baseArea = prompt("Enter the base area of the pyramid:");
 let height = prompt("Enter the height of the pyramid:");
 let volume = (1/3) * baseArea * height;

 document.getElementById("pyramidResult").innerHTML = `The volume of the pyramid is ${volume.toFixed(2)}`;
}
