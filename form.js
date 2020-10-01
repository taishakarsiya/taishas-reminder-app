class Form{
constructor(){
    this.button = createButton('stop-sound' );
    this.button1 = createButton('Add Schedule' );
    this.msg= createElement('h1');
    this.text= createElement('h5');
    this.text1= createElement('h5');
    this.text2= createElement('h5');
    this.text3= createElement('h5');
    this.text4= createElement('h5');
    this.text5= createElement('h5');
    this.wakeup  = createInput('wakeuptime' ,"time" );
    this.classs   = createInput('classstime' ,"time"  );
    this.school  = createInput('schooltime'  ,"time" );
    this.homework  = createInput(' homeworktime' ,"time"  );
    this.dinner = createInput('dinnertime',"time" )
    this.sleep  = createInput('sleeptime' ,"time"  );

}

display(){
    
this.button.position(300,500)
this.button1.position(900,400);

this.msg.html("Please Add Schedule")
this.msg.position(50,80);
 
this.text.html("Wakeup Time:")
this.text.position(800,80);
this.wakeup.position(900,100);


this.text1.html("Class Time:")
this.text1.position(800,130);

this.classs.position(900,150);
  
this.text2.html("School Time:")
this.text2.position(800,180);

 this.school.position(900,200);

this.text3.html("HomeWork Time:")
this.text3.position(800,230);

 this.homework.position(900,250);

 this.text4.html("Dinner Time:")
this.text4.position(800,280);

this.dinner.position(900,300);

this.text5.html("Sleep Time:")
this.text5.position(800,330);
 
 this.sleep.position(900,350);

 this.button1.mousePressed(()=>{
    
    this.button1.hide();
    this.msg.hide();
    this.text.hide();
    this.text1.hide();
    this.text2.hide();
    this.text3.hide();
    this.text4.hide();
    this.text5.hide();
    this.wakeup.hide();
    this.classs.hide();
    this.school.hide();
    this.homework.hide();
    this.dinner.hide();
    this.sleep.hide();
    var wakeuptime=this.wakeup.value();
     wh=wakeuptime.slice(0,2);
    wm=wakeuptime.slice(3,5);

    var classtime=this.classs.value();
     ch=classtime.slice(0,2);
     cm=classtime.slice(3,5);

    var schooltime=this.school.value();
     sh=schooltime.slice(0,2);
     sm=schooltime.slice(3,5);

    var hwtime=this.homework.value();
     hwh=hwtime.slice(0,2);
     hwm=hwtime.slice(3,5);

    var dinnertime=this.dinner.value();
     dh=dinnertime.slice(0,2);
     dm=dinnertime.slice(3,5);

    var sleeptime=this.sleep.value();
     slh=sleeptime.slice(0,2);
     slm=sleeptime.slice(3,5);

    if(hour==wh && minute==wm){
        
        morningwakeup.loop();
      
      }
      if(hour==ch && minute==cm){
        
        classsound.loop();
      
      }

      if(hour==sh && minute==sm){
           school.loop();
      
      }

      if(hour==hwh && minute==hwm){
        homework.loop();
      
      }

      if(hour==dh && minute==dm){
        dinner.loop();
      
      }
      if(hour==slh && minute==slm){
         sleep.loop();
      
      }
 })
}
}