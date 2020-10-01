
var wh,wm,ch,cm,dh,dm,hwh,hwm,slm,slh,sh,sm;

function preload() {
 classsound = loadSound('class.m4a');
 morningwakeup = loadSound('morning.mp3');
dinner = loadSound('dinner.m4a')
homework = loadSound('homework.m4a')
lunch = loadSound('lunch.m4a')
sleep = loadSound('sleep.m4a')
school = loadSound('school.m4a')
 
}
 
function setup() {
  var canvas=createCanvas(750,400);
  canvas.position(0,100)
  form= new Form();

  form.button.mousePressed(stopSound);
  
 
}

function draw() {
  background('lightblue'); 
 
 textSize(40);
text(hour+' : '+minute,600,70);
form.display();
   getTime();
   if(hour==wh && minute==wm){
    text('Its ' + wh + " hour , please wake up ",200,140)
  image(clock,200,300,100,100)
  
  }
  if(hour==ch && minute==cm){
    text('Its ' + ch + " hour , you have a class ",200,140)
    image(classimg,200,300,100,100)
  
  }

  if(hour==sh && minute==sm){
    text('Its ' + sh + " hour , Its  School Time ",200,140)
   
  
  }

  if(hour==hwh && minute==hwm){
    text('Its ' + hwh + " hour , Its homework Time ",200,140)
    
  
  }

  if(hour==dh && minute==dm){
    text('Its ' + hwh + " hour , Its dinner Time ",200,140)
    
  
  }
  if(hour==slh && minute==slm){
    text('Its ' + hwh + " hour , Its  sleep Time ",200,140)
    
  
  }
}
async function getTime(){
var api = await fetch('http://worldtimeapi.org/api/timezone/Asia/kolkata')
 var apijson = await api.json()
 var datetime  = apijson.datetime   
  hour = datetime.slice(11,13)
  minute = datetime.slice(14,16)

}
 
function stopSound(){
  if(morningwakeup.isPlaying){morningwakeup.stop();}
  if(classsound.isPlaying){classs.stop();}
  if(dinner.isPlaying){dinner.stop();}
 if(homework.isPlaying){homework.stop();}
 if(lunch.isPlaying){lunch.stop();}
 if(sleep.isPlaying){sleep.stop();}
 if(school.isPlaying){school. stop();}
}




