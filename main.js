function preload()
{

}

function setup()
{
canvas=createCanvas(500,480);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}

function draw()
{
image(video,0,0,500,480);
}