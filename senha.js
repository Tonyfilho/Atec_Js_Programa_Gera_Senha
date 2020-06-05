//static var senha = 'A';
// var charCode = senha.charCodeAt(0);
// senha = String.fromCharCode(charCode + 1);

 var letraG = 'A';
 var letraP = 'A';
 var numeroG = 0;
 var numeroP = 0;
 var listaPrio = [];
 var listaGeral = [];
 var ctP = 0; // quantas pessoas prioritarias atendidas
 var ctG = 0; // quantas pessoas Geral atendidas
 var ct = 0; // contador de prioritaria

 function geraSenhaGeral(){
 var senha = ""; 
 if(numeroG <= 9) {
     senha = letraG + '0' +numeroG;
 }
 else {
     senha = letraG + numeroG;
 }
 if(numeroG > 99) {
     numeroG = 0;
     if(letraG != 'Z'){
        var charCode = letraG.charCodeAt(0);
        letraG = String.fromCharCode(charCode + 1);        
    }else
       letraG = 'A';     
 }
 else 
  numeroG++;
 return senha;
}

function geraSenhaPrio(){
    var senha = ""; 
    if(numeroP <= 9) {
        senha = letraP + '0' +numeroP;
    }
    else {
        senha = letraP + numeroP;
    }
    
    if(numeroP > 99) {
        numeroP = 0;
        if(letraP != 'Z'){
           var charCode = letraP.charCodeAt(0);
           letraP = String.fromCharCode(charCode + 1);
           
       }else
          letraP = 'A';
        
    } else 
     numeroP++;
    return senha;
   }



   function botaoPrioridade() {
    var r = "";
    ctP++;
     r = geraSenhaPrio();
     document.getElementById('senha_prio').innerHTML = "P- " + r;
     listaPrio.push(r);
    return r;
   }

   function botaoGeral() { 
    var s = "";
     ctG++;
     s = geraSenhaGeral();
    document.getElementById('senha_geral').innerHTML = "G- " + s;
     listaGeral.push(s);
   return s;
  }



  function  botaoAtendimento(id){
    var f ="";
 
     ct++;
    if(ct < 4 && listaPrio.length != 0) {        
        f = listaPrio.shift();
      document.getElementById(id).innerHTML = "P- " + f + "";
         
    }// fim if
    else if(listaGeral.length != 0) {      
        f = listaGeral.shift();
        document.getElementById(id).innerHTML = "G- "+ f + "";
        ct = 0; 

    }  
    else{
        document.getElementById(id).innerHTML = "P- " + "Senha Zeradas" + "";
    }   
   

    return f;
  }


console.log("ENTROU");
console.log(geraSenhaGeral());
console.log(geraSenhaPrio());
console.log(listaPrio);
console.log(listaGeral);
console.log(ctP);


//console.log(botaoPrioridade());



