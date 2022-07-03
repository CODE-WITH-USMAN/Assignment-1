  var studName,guarName,sCNIC,studID,studPhn,studLevel,tMarks,ObtMarks,valid;
  studName=document.getElementById("studname");
  guarName=document.getElementById("guarname");
  sCNIC=document.getElementById("scnic");
  studID=document.getElementById("studid");
  studPhn=document.getElementById("studphn");
  studLevel=document.getElementById("studgrade")
   
  function confirmValidate(){
    error=false;
    
    if(studName.value==""){
      alert("STUDENT NAME MUST BE FILLED");
      error=true;
    }
    if(guarName.value==""){
      error=true;
     alert("FATHER/GUARDIAN NAME MUST BE FILLED");    
    }
    if(sCNIC.value==""){
      error=true;
      alert("STUDENT CNIC MUST BE FILLED");
      
     }
     if(studID.value==""){
      error=true;
       alert("STUDENT ID MUST BE FILLED");
       
     }
     if(studPhn.value==""){
      error=true;
       alert("STUDENT PHONE MUST BE FILLED");
       
    }
     if(studLevel.value==""){
      error=true;
       alert("STUDENT LEVEL MUST BE FILLED");
        
     }
 for(let i=1;i<6;i++){
   var tmarks=
     document.getElementById('tmarks_'+i).value;
     var obtmarks=document.getElementById('obtmarks_'+i).value;
     var subject=document.getElementById('Sub_'+i).value;
     if(tmarks!="" && obtmarks!="" && subject!=""){
      //alert(tmarks + obtmarks + subject);
if(parseInt(tmarks)< parseInt(obtmarks)){
  alert("ERROR ! OBTAINED MARKS "+obtmarks+" ARE GREATER THAN TOTAL MARKS "+tmarks+"  IN "+subject+"!");
  error=true;
}
     }
     
 }
  

     
     
    
   



     if(error){
      //do nothing as it is true value----means there is an error
     }
     else{
      document.getElementById('myform').submit();
     }
  }