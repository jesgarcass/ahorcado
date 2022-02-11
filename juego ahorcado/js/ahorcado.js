var pantalla=document.querySelector('canvas');
var pincel=pantalla.getContext('2d');
function base(){
    pincel.beginPath();
    pincel.moveTo(100,700);
    pincel.lineTo(280,700);
    pincel.moveTo(100,700);
    pincel.lineTo(200,500);
    pincel.moveTo(280,700);
    pincel.lineTo(200,500);
    pincel.moveTo(200,500);
    pincel.lineTo(200,100);
    pincel.moveTo(200,102);
    pincel.lineTo(500,100);
    pincel.moveTo(498,100);
    pincel.lineTo(498,200);
    pincel.strokeStyle="white";
    pincel.lineWidth=4;
    pincel.stroke();
}

function cabeza(){
    pincel.beginPath();
    pincel.arc(498,238,40,0,2*3.14);
    pincel.strokeStyle="white";
    pincel.lineWidth=4;
    pincel.stroke();
}

function cuerpo(){
    pincel.beginPath();
    pincel.moveTo(498,277);
    pincel.lineTo(498,450);
    pincel.strokeStyle="white";
    pincel.lineWidth=4;
    pincel.stroke();
}

function brazoD(){
    pincel.beginPath();
    pincel.moveTo(498,350);
    pincel.lineTo(600,300);
    pincel.strokeStyle="white";
    pincel.lineWidth=4;
    pincel.stroke();
}

function brazoI(){
    pincel.beginPath();
    pincel.moveTo(498,350);
    pincel.lineTo(400,300);
    pincel.strokeStyle="white";
    pincel.lineWidth=4;
    pincel.stroke();
}

function pieD(){
    pincel.beginPath();
    pincel.moveTo(400,550);
    pincel.lineTo(498,450);
    pincel.strokeStyle="white";
    pincel.lineWidth=4;
    pincel.stroke();
}

function pieI(){
    pincel.beginPath();
    pincel.moveTo(498,450);
    pincel.lineTo(570,560);
    pincel.strokeStyle="white";
    pincel.lineWidth=4;
    pincel.stroke();
}


