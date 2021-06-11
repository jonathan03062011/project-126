song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
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
     
 }
}

function draw()
{
 image(video,0,0,500,500);
 
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function stop()
{
    song.stop();
}