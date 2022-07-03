 //to retrieve
 const queryString=window.location.search;
 const urlParams= new URLSearchParams(queryString);

  const sname=urlParams.get('SNAME');
 
 const fname=urlParams.get('FNAME');
 
 const scnic=urlParams.get('SNIC');
 
 const sid=urlParams.get('SID');
 
 const sphn=urlParams.get('SNO');
 
 const sgrade=urlParams.get('SGRADE');




//to show
var element=document.getElementById('name').innerHTML=sname;
var element=document.getElementById('fname').innerHTML=fname;
var element=document.getElementById('scnic').innerHTML=scnic;
var element=document.getElementById('sid').innerHTML=sid;
var element=document.getElementById('sphn').innerHTML=sphn;
var element=document.getElementById('sgrade').innerHTML=sgrade;




//to retrieve subjects
const sub1=urlParams.get('sub1');
const tmark1=urlParams.get('tmark1');
const obt1=urlParams.get('obt1');

const sub2=urlParams.get('sub2');
const tmark2=urlParams.get('tmark2');
const obt2=urlParams.get('obt2');

const sub3=urlParams.get('sub3');
const tmark3=urlParams.get('tmark3');
const obt3=urlParams.get('obt3');

const sub4=urlParams.get('sub4');
const tmark4=urlParams.get('tmark4');
const obt4=urlParams.get('obt4');

const sub5=urlParams.get('sub5');
const tmark5=urlParams.get('tmark5');
const obt5=urlParams.get('obt5');

//to show subjects
var element=document.getElementById('sub_1').innerHTML=sub1;
var element=document.getElementById('tmark_1').innerHTML=tmark1;
var element=document.getElementById('obt_1').innerHTML=obt1;

var element=document.getElementById('sub_2').innerHTML=sub2;
var element=document.getElementById('tmark_2').innerHTML=tmark2;
var element=document.getElementById('obt_2').innerHTML=obt2;

var element=document.getElementById('sub_3').innerHTML=sub3;
var element=document.getElementById('tmark_3').innerHTML=tmark3;
var element=document.getElementById('obt_3').innerHTML=obt3;

var element=document.getElementById('sub_4').innerHTML=sub4;
var element=document.getElementById('tmark_4').innerHTML=tmark4;
var element=document.getElementById('obt_4').innerHTML=obt4;

var element=document.getElementById('sub_5').innerHTML=sub5;
var element=document.getElementById('tmark_5').innerHTML=tmark5;
var element=document.getElementById('obt_5').innerHTML=obt5;