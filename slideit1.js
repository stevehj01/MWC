
<!--
//variable that will increment through the images
var step=1
function slideit1()
{
//if browser does not support the image object, exit.
if (!document.images)
return

document.images.slide.src=eval("image"+step+".src")
if (step<16)
step++
else
step=1
//call function "slideit1()" every 5 seconds
setTimeout("slideit1()",5000)
}

//-->
