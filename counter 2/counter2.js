let x=0;
let counting=document.getElementById("output");
let y= parseInt(document.getElementById("ent").value);


function add(){
  let y= parseInt(document.getElementById("ent").value);

  x=x + y;

  output.value=x;
}
function sub(){
  let y= (document.getElementById("ent").value);

  if(x>0)
  x= x - y;
  output.value=x;
}
function res(){
  let y=document.getElementById("ent").value;
  x=0;
  output.value=x;
}