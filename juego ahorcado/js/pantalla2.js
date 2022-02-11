var vidas=5;
var msg = '';
var asinar;
asinar.getElementById("texto");
let palabra=[asinar.textContent];

document.onkeypress=mostrarInformacionCaracter;

function mostrarInformacionCaracter(evObject) { 
    var Caracter = String.fromCharCode(evObject.which); 
    if(evObject.which>96 && evObject.which <123||evObject.which>64 && evObject.which <90){
        msg =Caracter;
        var expresion=new RegExp(msg,"i");
        
        if(!expresion.test(control.textContent)&&!expresion.test(palabra)){
            control.innerHTML += msg;
            vidas--;
        }else if(expresion.test(palabra)){
            document.getElementById("con").innerHTML+=msg;
        }
        document.getElementById("vidas").innerHTML="vidas "+vidas;
        if(vidas<=4){
            base();
        }
        if(vidas<=3){
            cabeza();
        }
        if(vidas<=2){
            brazoD();
            brazoI();
        }
        if(vidas<=1){
            cuerpo();
        }
        if(vidas<=0){
            pieD();
            pieI();
            alert("perdiste");
        }
    }       
}
