bed_image="";
bottles_image="";
fruitbasket_image="";
desk_image="";


  objects=[];//ARRAY
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
     object_detector=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML=" Status : detecting objects ";
}

function draw() {
    image(bed_image,bottles_image,fruitbasket_image,desk_image,0,0,400,400)
    if (status!="") {
        for(i=0;  i<object.length;  i++){
            document.getElementById("status").innerHTML=" status : object detected ";
            fill("red")
            
            percent=floor(object[i].confidence*100); 
            text(object[i].label+"  "+percent+ "%",object[i].x,object[i].y);
            noFill()
            stroke(200,250, 3)
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
             
            
        }
        
          
    }
    }


function preload() {
bed_image=loadImage("bed.webp");   
}

function modelLoaded(){
console.log(" model has been loaded ");
status=true;                                            
object_detector.detect(bed_image,gotResult)
}

function gotResult(error,result) {
    if (error) {
        console.log(error);   
    }
    else{
        console.log(result);
        object=result;
    }
  
  
}
function bedroom() {
      window.location="bedroom.html"
}  


function tvandac() {
    window.location="tvandac.html"
} 

function desk() {
    window.location="desk.html"
}

function bedroom() {
    window.location="bottle.html"
} 

function bedroom() {
    window.location="fruitbasket.html"
}  

function BACK() {
    window.location="index.html"
  
}