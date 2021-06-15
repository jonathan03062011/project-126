song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
InNumberleftWristY=0;
remove_decimal=0;
volume=0;
function preload()
{
 song=loadSound("music.mp3");
}

function setup()
{
canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();

posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);
}

function modelloaded()
{
    console.log("posenet is intialized");
}

function gotposes(results)
{
 if(results.length>0)
 {
     console.log(results);
     leftWristX=results[0].pose.leftWrist.x;
     leftWristY=results[0].pose.leftWrist.y;     
 }
}

function draw()
{
 image(video,0,0,500,500);

 fill('red');
 stroke('red');

 circle(leftWristX,leftWristY,20);
 InNumberleftWristY=Number(leftWristY);
 remove_decimal=floor(InNumberleftWristY);
 volume=remove_decimal/500;
 document.getElementById("volume").innerHTML="VOLUME="+volume;
}

function play()
{
    song.play();
    song.setVolume(volume);
    song.rate(1);
}

function stop()
{
    song.stop();
}