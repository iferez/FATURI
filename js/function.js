$(document).ready(function(){

    $('nav .button').click(function(){
      $('nav .button span').toggleClass("rotate");
    });


})


function ocultoPantallaIngreso(){
  let pantallaUno = document.querySelector('#ingresanteUno');
  pantallaUno.style.display = 'none';

  let pantallaDos = document.querySelector('#ingresanteDos')
  pantallaDos.style.display = 'block';

}

function ocultoPantallaFormulario(){
  let pantallaDos = document.querySelector('#ingresanteDos')
  pantallaDos.style.display = 'none';

  
  let pantallaTres = document.querySelector('#ingresanteTres')
  pantallaTres.style.display = 'block';

  let btn = document.querySelector('#guardar')
  btn.style.display = 'block';

}


function botonesEnFormulario(){
  let observaciones = document.querySelector('#observaciones')

  let btnGuardar = document.querySelector('#guardarbtn')
  let btnSeguir = document.querySelector('#siguientebtn')

 if(observaciones.length < 0){
alert("holaaaa")
  btnGuardar.style.display = 'block';
  btnSeguir.style.display = 'none';

 }


}



