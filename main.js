noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
var textContent=""

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}

function draw() {
 background('#6495ED');
/*
  document.getElementById("font_sides").innerHTML = "Width And Height of the font is = " + difference +"px";
  fill('#F69420');
  stroke('#F69420');
  square(noseX, noseY, difference); */

textContent = document.getElementById("textP").innerHTML;
//textSize(54);
/*fill(25, 25, 50);*/
text(textContent, 0, 500);
fill('#F69420');
stroke('#F69420');
textSize(difference);
}