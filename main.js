song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
InNumberleftWristY=0;
remove_decimal=0;
volume=0;
scoreleftWrist=0;
scorerightWrist=0;

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
      scoreleftWrist=results[0].pose.keypoints[9].score;

      rightWristX=results[0].pose.rightWrist.x;
     rightWristY=results[0].pose.rightWrist.y;    
      scorerightWrist=results[0].pose.keypoints[9].score;
 }
}

function draw()
{
 image(video,0,0,500,500);

 fill('red');
 stroke('red');
 if(scoreleftWrist>0.2)
 {
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY=Number(leftWristY);
    remove_decimal=floor(InNumberleftWristY);
    volume=remove_decimal/500;
    document.getElementById("volume").innerHTML="VOLUME="+volume;
    song.setVolume(volume);
 }

 if(scorerightWrist>0.2)
 {
     circle(rightWristX,rightWristY,20);
     if(rightWristY>0 && rightWristY < 100)
     {
         song.rate(0.5);
         document.getElementById("speed").innerHTML="SPEED=0.5x";
     }
     else if(rightWristY>100 && rightWristY < 200)
     {
         song.rate(1);
         document.getElementById("speed").innerHTML="SPEED=1x";
     }
     else if(rightWristY>200 && rightWristY < 300)
     {
         song.rate(1.5);
         document.getElementById("speed").innerHTML="SPEED=1.5x";
     }
     else if(rightWristY>300 && rightWristY < 400)
     {
         song.rate(2);
         document.getElementById("speed").innerHTML="SPEED=2x";
     }
     else if(rightWristY>400 && rightWristY < 500)
     {
         song.rate(2.5);
         document.getElementById("speed").innerHTML="SPEED=2.5x";
     }
 }

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