object = [];

function preload()
{
    song = loadSound("emergency.mp3");
}

function start()
{
   objectDetector = ml5.objectDetector('cocossd',modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function setup()
{
   canvas = createCanvas(380,380);
   canvas.center();
   video = captureCanvas(VIDEO);
   video.size(360,360);
   video.hide();
   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image(video, 0, 0, 380, 380);
    if (statuses != "")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        fill(r,g,b);
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are :"+ objects.length;

            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x +15, objects[i].y +15);
            noFill();
            stroke(r,g,b);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }

        if(object[i].label == "person")
        {
            document.getElementById("objects_detected").innerHTML = 'Baby Found';
            song.stop();
        } else{
         document.getElementById("objects_detected").innerHTML = 'Baby Not Found';
         song.play();
        }

        if(objectS.length == 0 )
        {
            document.getElementById("objects_detected").innerHTML = 'Baby Not Found';
            song.play();
      
        } 
    }
}